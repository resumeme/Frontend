import {
  Divider,
  Flex,
  FormErrorMessage,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import FormDateInput from '~/components/molecules/FormDateInpur/FormDateInput';
import { LabelCheckboxGroup } from '~/components/molecules/LabelCheckboxGroup';
import { FormInputSchema } from '~/types/formInput';

const CreateEventPage = () => {
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

  const FORM_TEXT_INPUT_SCHEMA: FormInputSchema = {
    eventTitle: {
      errorTypes: {
        required: true,
      },
      label: '이벤트 제목',
      placeholder: '이벤트 제목을 입력해주세요.',
    },
    headCount: {
      label: '인원 수',
      placeholder: '신청 받을 인원 수(2~10)를 입력해주세요.',
      errorTypes: {
        required: true,
        max: { message: '10명 이하로 입력해 주세요.', value: 10 },
        min: { message: '2명 이상 입력해 주세요.', value: 2 },
      },
    },
  };

  const FORM_EVENT_DATE_INPUT_SCHEMA: FormInputSchema = {
    openEventDate: {
      type: 'datetime-local',
      label: '신청 기간',
      placeholder: '',
      errorTypes: {
        required: true,
      },
    },
    closeEventDate: {
      type: 'datetime-local',
      label: '',
      placeholder: '',
      errorTypes: {
        required: true,
      },
    },
  };

  const FORM_RESUME_DATE_INPUT_SCHEMA: FormInputSchema = {
    endEventDate: {
      type: 'date',
      label: '첨삭 종료일',
      placeholder: '',
      errorTypes: {
        required: true,
      },
    },
  };

  const FORM_TEXT_AREA_INPUT_SCHEMA: FormInputSchema = {
    eventContent: {
      errorTypes: {
        required: true,
      },
      label: '내용',
      placeholder: '이벤트에 대한 상세 내용을 입력해주세요.',
    },
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
        <Flex
          mt={'2.81rem'}
          gap={'1.25rem'}
          direction={'column'}
        >
          {Object.keys(FORM_TEXT_INPUT_SCHEMA).map((key) => (
            <BorderBox key={key}>
              <FormControl
                spacing="1.63rem"
                isInvalid={!!errors[key]}
              >
                <FormLabel
                  alignSelf={'center'}
                  htmlFor={key}
                  isRequired={'required' in FORM_TEXT_INPUT_SCHEMA[key].errorTypes}
                >
                  {FORM_TEXT_INPUT_SCHEMA[key].label}
                </FormLabel>
                <Flex
                  direction={'column'}
                  w={'100%'}
                >
                  <Input
                    w={'43.5rem'}
                    id={key}
                    placeholder={FORM_TEXT_INPUT_SCHEMA[key].placeholder}
                    {...register(key, { ...FORM_TEXT_INPUT_SCHEMA[key].errorTypes })}
                  />
                  {errors[key]?.message && (
                    <FormErrorMessage>{errors[key]?.message as string}</FormErrorMessage>
                  )}
                </Flex>
              </FormControl>
            </BorderBox>
          ))}
          <BorderBox>
            <FormControl
              spacing="1.63rem"
              isInvalid={!!errors['jobs']}
            >
              <FormLabel
                htmlFor="jobs"
                isRequired
              >
                직무
              </FormLabel>
              <LabelCheckboxGroup
                required={false}
                variant="role"
                control={control}
                name="jobs"
              />
            </FormControl>
          </BorderBox>

          <BorderBox>
            <HStack spacing="2.17rem">
              <FormControl
                w={'fit-content'}
                spacing="1.63rem"
                isInvalid={!!errors['openEventDate']}
                key={'openEventDate'}
              >
                {FORM_EVENT_DATE_INPUT_SCHEMA['openEventDate'].label && (
                  <FormLabel
                    alignSelf={'center'}
                    htmlFor={'openEventDate'}
                    isRequired={
                      'required' in FORM_EVENT_DATE_INPUT_SCHEMA['openEventDate'].errorTypes
                    }
                  >
                    {FORM_EVENT_DATE_INPUT_SCHEMA['openEventDate'].label}
                  </FormLabel>
                )}
                <VStack justifyContent={'space-between'}>
                  <FormDateInput
                    w={'13rem'}
                    type="datetime-local"
                    control={control}
                    dateRegister={{
                      ...register('openEventDate', {
                        ...FORM_EVENT_DATE_INPUT_SCHEMA['openEventDate'].errorTypes,
                      }),
                    }}
                    timeRegister={{
                      ...register(`${'openEventDate'}Time`, {
                        ...FORM_EVENT_DATE_INPUT_SCHEMA['openEventDate'].errorTypes,
                      }),
                    }}
                    id={'openEventDate'}
                  />
                </VStack>
              </FormControl>
              <Divider
                w={'1.75rem'}
                h={'0.0625rem'}
                border={'1px'}
                borderColor={'gray.400'}
                bgColor={'gray.400'}
              />
              <FormControl
                w={'fit-content'}
                spacing="1.63rem"
                isInvalid={!!errors['closeEventDate']}
                key={'closeEventDate'}
              >
                <VStack justifyContent={'space-between'}>
                  <FormDateInput
                    w={'13rem'}
                    type="datetime-local"
                    control={control}
                    dateRegister={{
                      ...register('closeEventDate', {
                        ...FORM_EVENT_DATE_INPUT_SCHEMA['closeEventDate'].errorTypes,
                      }),
                    }}
                    timeRegister={{
                      ...register(`${'closeEventDate'}Time`, {
                        ...FORM_EVENT_DATE_INPUT_SCHEMA['closeEventDate'].errorTypes,
                      }),
                    }}
                    id={'closeEventDate'}
                  />
                </VStack>
              </FormControl>
            </HStack>
          </BorderBox>
          <BorderBox>
            <FormControl
              spacing="1.63rem"
              isInvalid={!!errors['endEventDate']}
              key={'endEventDate'}
            >
              {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label && (
                <FormLabel
                  alignSelf={'center'}
                  htmlFor={'endEventDate'}
                  isRequired={
                    'required' in FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes
                  }
                >
                  {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label}
                </FormLabel>
              )}
              <Flex direction={'column'}>
                <FormDateInput
                  w={'13rem'}
                  control={control}
                  dateRegister={{
                    ...register('endEventDate', {
                      ...FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes,
                    }),
                  }}
                  id={'endEventDate'}
                />
              </Flex>
            </FormControl>
          </BorderBox>
          <BorderBox>
            <FormControl
              spacing="1.63rem"
              isInvalid={!!errors['eventContent']}
            >
              <FormLabel
                htmlFor="eventContent"
                isRequired
              >
                {FORM_TEXT_AREA_INPUT_SCHEMA['eventContent'].label}
              </FormLabel>
              <Textarea
                w={'43.5rem'}
                h={'26.75rem'}
                id="eventContent"
                placeholder={FORM_TEXT_AREA_INPUT_SCHEMA['eventContent'].placeholder}
              />
            </FormControl>
          </BorderBox>
        </Flex>
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

export default CreateEventPage;
