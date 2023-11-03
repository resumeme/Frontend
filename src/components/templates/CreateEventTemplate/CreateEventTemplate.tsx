import { HStack, Flex, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FormTextarea } from './../../molecules/FormTextarea';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import FormTextInput from '~/components/molecules/FormTextInput/FormTextInput';
import { LabelCheckboxGroup } from '~/components/molecules/LabelCheckboxGroup';
import { TermInput } from '~/components/molecules/TermInput';

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
                control={control}
                includeTime={true}
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
                w={'47.6%'}
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
        <Flex
          justifyContent={'end'}
          mt={'2.62rem'}
          gap={'2.06rem'}
        >
          <Button
            size={'md'}
            isLoading={isSubmitting}
            type="button"
          >
            미리보기
          </Button>
          <Button
            size={'md'}
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
