import { VStack, Input, Divider, FormErrorMessage, HStack, Flex, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { FormTextarea } from './../../molecules/FormTextarea';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import FormTextInput from '~/components/molecules/FormTextInput/FormTextInput';
import { LabelCheckboxGroup } from '~/components/molecules/LabelCheckboxGroup';

//Todo: TermInputProps 부분은 컴포넌트가 추가되면 제거
type TermInputProps = {
  startDateName: string;
  endDateName: string;
  isEndDateDisabled?: boolean;
  isRequired?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  type?: 'date' | 'datetime-local';
};

const TermInput = ({
  startDateName,
  endDateName,
  isEndDateDisabled = false,
  isRequired = false,
  register,
  errors,
  type,
}: TermInputProps) => {
  return (
    <HStack flexGrow={1}>
      <FormControl isInvalid={!!errors[startDateName]}>
        <Input
          id={startDateName}
          type={type}
          {...register(startDateName, {
            required: isRequired ? '시작일을 입력하세요.' : false,
            valueAsDate: true,
          })}
        />
        <FormErrorMessage>
          {errors.startDateName && errors.startDateName.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <Divider
        w={'1rem'}
        borderColor={'gray.400'}
      />
      <FormControl isInvalid={!!errors[endDateName]}>
        <VStack
          flexGrow={1}
          alignItems={'start'}
        >
          <Input
            id={endDateName}
            type={type}
            disabled={isEndDateDisabled}
            {...register(endDateName, {
              required: isRequired ? '종료일을 입력하세요.' : false,
              valueAsDate: true,
            })}
          />
          <FormErrorMessage>
            {errors.endDateName && errors.endDateName.message?.toString()}
          </FormErrorMessage>
        </VStack>
      </FormControl>
    </HStack>
  );
};

const CreateEventTemplate = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: { [key: string]: string }) => {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 3000);
    });
  };

  return (
    <>
      <Text
        mt={'3rem'}
        fontSize={'2xl'}
        fontWeight={600}
        color={'gray.900'}
      >
        첨삭 이벤트 생성
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BorderBox>
          <Flex
            direction={'column'}
            gap={'1.25rem'}
          >
            <FormControl isInvalid={!!errors['title']}>
              <FormLabel
                htmlFor={'title'}
                isRequired={true}
              >
                이벤트 제목
              </FormLabel>

              <FormTextInput
                w={'100%'}
                id="title"
                register={{ ...register('title', { required: true }) }}
                errors={errors}
                placeholder="이벤트 제목을 입력해주세요."
              />
            </FormControl>
            <FormControl isInvalid={!!errors['maximumAttendee']}>
              <FormLabel
                htmlFor={'maximumAttendee'}
                isRequired={true}
              >
                인원 수
              </FormLabel>
              <FormTextInput
                id="maximumAttendee"
                register={{
                  ...register('maximumAttendee', {
                    required: true,
                    max: { value: 10, message: '10이하로 입력해 주세요.' },
                    min: { value: 2, message: '2이상 입력해 주세요.' },
                    pattern: { value: /^(?:[2-9]|10)$/, message: '숫자를 입력해 주세요.' },
                  }),
                }}
                errors={errors}
                placeholder="신청 받을 인원 수(2~10)를 입력해주세요."
              />
            </FormControl>
            <FormControl
              spacing="1.63rem"
              isInvalid={!!errors['positions']}
            >
              <FormLabel
                htmlFor={'positions'}
                isRequired={true}
              >
                직무
              </FormLabel>
              <LabelCheckboxGroup
                control={control}
                name="positions"
                variant="role"
              />
            </FormControl>
            <HStack spacing={'1.6rem'}>
              <FormLabel isRequired={true}>신청 기간</FormLabel>
              <TermInput
                type="datetime-local"
                errors={errors}
                register={register}
                isRequired={true}
                endDateName="closeDateTime"
                startDateName="openDateTime"
              />
            </HStack>
            <FormControl isInvalid={!!errors['endDate']}>
              <FormLabel isRequired={true}>첨삭 종료일</FormLabel>
              <FormDateInput
                name="endDate"
                w={'100%'}
                maxW={'386px'}
                register={{ ...register('endDate', { required: true }) }}
              />
            </FormControl>
            <FormControl
              spacing="1.63rem"
              isInvalid={!!errors['content']}
            >
              <FormLabel
                htmlFor={'content'}
                isRequired={true}
              >
                내용
              </FormLabel>
              <FormTextarea
                errors={errors}
                id="content"
                register={{ ...register('content', { required: true }) }}
                placeholder="이벤트에 대한 상세 내용을 입력해주세요."
              />
            </FormControl>
          </Flex>
        </BorderBox>
        <Flex>
          <Button
            ml={'auto'}
            size={'md'}
            mt={'2.62rem'}
            isLoading={isSubmitting}
            type="button"
          >
            미리보기
          </Button>
          <Button
            size={'md'}
            ml={'2.06rem'}
            mt={'2.62rem'}
            isLoading={isSubmitting}
            type="submit"
          >
            등록하기
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default CreateEventTemplate;
