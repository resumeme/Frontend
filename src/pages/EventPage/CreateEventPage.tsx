import {
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import FormDateInput from '~/components/molecules/FormDateInpur/FormDateInput';
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
      placeholder: '신청 받을 인원 수를 입력해주세요.',
      errorTypes: {
        required: true,
        maxLength: { message: '99명 이하로 입력해 주세요.', value: 2 },
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
              <FormControl isInvalid={!!errors[key]}>
                <HStack spacing={0}>
                  <FormLabel
                    htmlFor={key}
                    isRequired={'required' in FORM_TEXT_INPUT_SCHEMA[key].errorTypes}
                  >
                    {FORM_TEXT_INPUT_SCHEMA[key].label}
                  </FormLabel>
                  <VStack w={'100%'}>
                    <Input
                      id={key}
                      placeholder={FORM_TEXT_INPUT_SCHEMA[key].placeholder}
                      {...register(key, { ...FORM_TEXT_INPUT_SCHEMA[key].errorTypes })}
                    />
                    {errors[key]?.message && (
                      <FormErrorMessage>{errors[key]?.message as string}</FormErrorMessage>
                    )}
                  </VStack>
                </HStack>
              </FormControl>
            </BorderBox>
          ))}
          <BorderBox>
            <FormControl isInvalid={!!errors['jobs']}>
              <HStack>
                <FormLabel isRequired>직무</FormLabel>
                <Controller
                  name="jobs"
                  control={control}
                  render={({ field }) => (
                    <CheckboxGroup {...field}>
                      <Checkbox value="web">웹 풀스택</Checkbox>
                      <Checkbox value="frontend">프론트엔드</Checkbox>
                      <Checkbox value="backend">백엔드</Checkbox>
                      <Checkbox value="devops">데브옵스</Checkbox>
                    </CheckboxGroup>
                  )}
                />
              </HStack>
            </FormControl>
          </BorderBox>

          <BorderBox>
            <Flex>
              {Object.keys(FORM_EVENT_DATE_INPUT_SCHEMA).map((key) => (
                <FormControl
                  isInvalid={!!errors[key]}
                  key={key}
                >
                  <HStack spacing={0}>
                    {FORM_EVENT_DATE_INPUT_SCHEMA[key].label && (
                      <FormLabel
                        htmlFor={key}
                        isRequired={'required' in FORM_EVENT_DATE_INPUT_SCHEMA[key].errorTypes}
                      >
                        {FORM_EVENT_DATE_INPUT_SCHEMA[key].label}
                      </FormLabel>
                    )}
                    <Flex
                      direction={'column'}
                      justifyContent={'space-between'}
                    >
                      <FormDateInput
                        w={'16rem'}
                        type="datetime-local"
                        control={control}
                        dateRegister={{
                          ...register(key, { ...FORM_EVENT_DATE_INPUT_SCHEMA[key].errorTypes }),
                        }}
                        timeRegister={{
                          ...register(`${key}Time`, {
                            ...FORM_EVENT_DATE_INPUT_SCHEMA[key].errorTypes,
                          }),
                        }}
                        id={key}
                      />
                    </Flex>
                  </HStack>
                </FormControl>
              ))}
            </Flex>
          </BorderBox>
          <BorderBox>
            <FormControl
              isInvalid={!!errors['endEventDate']}
              key={'endEventDate'}
            >
              <HStack spacing={0}>
                {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label && (
                  <FormLabel
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
                    w={'16rem'}
                    control={control}
                    dateRegister={{
                      ...register('endEventDate', {
                        ...FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes,
                      }),
                    }}
                    id={'endEventDate'}
                  />
                </Flex>
              </HStack>
            </FormControl>
          </BorderBox>
          <BorderBox>
            <FormControl>
              <Flex>
                <FormLabel
                  htmlFor="eventContent"
                  isRequired
                >
                  {FORM_TEXT_AREA_INPUT_SCHEMA['eventContent'].label}
                </FormLabel>
                <Textarea
                  id="eventContent"
                  placeholder={FORM_TEXT_AREA_INPUT_SCHEMA['eventContent'].placeholder}
                />
              </Flex>
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
