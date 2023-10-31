import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/atoms/Button';
import { FormInput } from '~/components/molecules/FormInput';
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
            <FormInput
              key={key}
              isRequired={'required' in FORM_TEXT_INPUT_SCHEMA[key].errorTypes}
              direction="row"
              id={key}
              placeholder={FORM_TEXT_INPUT_SCHEMA[key].placeholder}
              label={FORM_TEXT_INPUT_SCHEMA[key].label}
              register={{
                ...register(key, { ...FORM_TEXT_INPUT_SCHEMA[key].errorTypes }),
              }}
              errors={errors}
              type={FORM_TEXT_INPUT_SCHEMA[key].type}
            />
          ))}
          <FormControl>
            <FormLabel
              fontWeight={600}
              lineHeight={'normal'}
              fontSize={'1.125rem'}
              w={'6.9375rem'}
              minW={'6.9375rem'}
              htmlFor={'eventContent'}
              mx={0}
              mt={'0.5rem'}
              color={'gray.700'}
              p={0}
            >
              직무
              <Box
                as="span"
                color="primary.900"
              >
                {' '}
                *
              </Box>
            </FormLabel>
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
          </FormControl>
          <Flex justifyContent={'space-between'}>
            {Object.keys(FORM_EVENT_DATE_INPUT_SCHEMA).map((key) => (
              <FormInput
                key={key}
                isRequired={'required' in FORM_EVENT_DATE_INPUT_SCHEMA[key].errorTypes}
                direction="row"
                id={key}
                placeholder={FORM_EVENT_DATE_INPUT_SCHEMA[key].placeholder}
                label={FORM_EVENT_DATE_INPUT_SCHEMA[key].label}
                register={{
                  ...register(key, { ...FORM_EVENT_DATE_INPUT_SCHEMA[key].errorTypes }),
                }}
                errors={errors}
                type={FORM_EVENT_DATE_INPUT_SCHEMA[key].type}
                control={control}
              />
            ))}
          </Flex>
          <FormInput
            isRequired={'required' in FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes}
            direction="row"
            id={'endEventDate'}
            placeholder={FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].placeholder}
            label={FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label}
            register={{
              ...register('endEventDate', {
                ...FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes,
              }),
            }}
            errors={errors}
            type={FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].type}
            control={control}
          />

          <FormControl>
            <Flex>
              <FormLabel
                fontWeight={600}
                lineHeight={'normal'}
                fontSize={'1.125rem'}
                w={'6.9375rem'}
                minW={'6.9375rem'}
                htmlFor={'eventContent'}
                mx={0}
                mt={'0.5rem'}
                color={'gray.700'}
                p={0}
              >
                {FORM_TEXT_AREA_INPUT_SCHEMA['eventContent'].label}
                <Box
                  as="span"
                  color="primary.900"
                >
                  {' '}
                  *
                </Box>
              </FormLabel>
              <Textarea
                id="eventContent"
                placeholder={FORM_TEXT_AREA_INPUT_SCHEMA['eventContent'].placeholder}
              />
            </Flex>
          </FormControl>
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
