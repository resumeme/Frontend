import { Box, Button, HStack } from '@chakra-ui/react';
import { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormInput } from '.';
import { FormInputSchema } from '~/types/formInput';

const meta: Meta<typeof FormInput> = {
  title: 'Components/molecules/FormInput',
  component: FormInput,
};

export default meta;

export const Vertical = () => {
  const {
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

  const formInputSchema: FormInputSchema = {
    name: {
      errorTypes: {
        required: { message: '이름을 입력해 주세요.', value: true },
        maxLength: { message: '10글자 이하로 입력해 주세요.', value: 10 },
      },
      label: '이름',
      placeholder: '본명을 입력해주세요.',
    },
    nickName: {
      label: '닉네임',
      placeholder: '닉네임을 입력해주세요',
      errorTypes: {
        required: { message: '닉네임을 입력해 주세요.', value: true },
        maxLength: { message: '10글자 이하로 입력해 주세요.', value: 10 },
        minLength: { message: '2글자 이상 입력해 주세요.', value: 2 },
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(formInputSchema).map((key) => (
        <FormInput
          isRequired={'required' in formInputSchema[key].errorTypes}
          key={key}
          id={key}
          placeholder={formInputSchema[key].placeholder}
          label={formInputSchema[key].label}
          register={{ ...register(key, { ...formInputSchema[key].errorTypes }) }}
          errors={errors}
        />
      ))}
      <Button
        mt={4}
        bgColor="primary.900"
        isLoading={isSubmitting}
        type="submit"
      >
        등록하기
      </Button>
    </form>
  );
};
export const Horizontal = () => {
  const {
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

  const formInputSchema: FormInputSchema = {
    name: {
      errorTypes: {
        required: { message: '이름을 입력해 주세요.', value: true },
        maxLength: { message: '10글자 이하로 입력해 주세요.', value: 10 },
      },
      label: '이름',
      placeholder: '본명을 입력해주세요.',
    },
    nickName: {
      label: '닉네임',
      placeholder: '닉네임을 입력해주세요',
      errorTypes: {
        required: { message: '닉네임을 입력해 주세요.', value: true },
        maxLength: { message: '10글자 이하로 입력해 주세요.', value: 10 },
        minLength: { message: '2글자 이상 입력해 주세요.', value: 2 },
      },
    },
  };

  return (
    <Box w={'100%'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(formInputSchema).map((key) => (
          <FormInput
            isRequired={'required' in formInputSchema[key].errorTypes}
            direction="row"
            key={key}
            id={key}
            placeholder={formInputSchema[key].placeholder}
            label={formInputSchema[key].label}
            register={{ ...register(key, { ...formInputSchema[key].errorTypes }) }}
            errors={errors}
          />
        ))}

        <Button
          mt={4}
          bgColor="primary.900"
          isLoading={isSubmitting}
          type="submit"
        >
          등록하기
        </Button>
      </form>
    </Box>
  );
};

export const DateInput = () => {
  const {
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

  const formInputSchema: FormInputSchema = {
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

  return (
    <Box w={'100%'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack>
          {Object.keys(formInputSchema).map((key) => (
            <FormInput
              isRequired={'required' in formInputSchema[key].errorTypes}
              direction="row"
              key={key}
              id={key}
              placeholder={formInputSchema[key].placeholder}
              label={formInputSchema[key].label}
              register={{ ...register(key, { ...formInputSchema[key].errorTypes }) }}
              errors={errors}
              type={formInputSchema[key].type}
            />
          ))}
        </HStack>
        <Button
          mt={4}
          bgColor="primary.900"
          isLoading={isSubmitting}
          type="submit"
        >
          등록하기
        </Button>
      </form>
    </Box>
  );
};
