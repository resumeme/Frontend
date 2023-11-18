import { Box, Heading } from '@chakra-ui/react';

import { SubmitHandler, useForm } from 'react-hook-form';
import CommonInput from './CommonInput';
import CONSTANTS from '~/constants';
import { SignUpCommon, SignUpMentee } from '~/types/signUp';

const EditMenteeProfileTemplate = () => {

  const defaultValues = { nickname: 'slr' } as SignUpCommon & SignUpMentee;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpCommon & SignUpMentee>({ defaultValues });

  const onSubmit: SubmitHandler<SignUpCommon & SignUpMentee> = () => {};

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading
          fontSize={'1.75rem'}
          color={'gray.800'}
          fontWeight={700}
        >
          프로필 수정
        </Heading>
        <Heading
          mt={'2.5rem'}
          fontSize={'1.25rem'}
          color={'gray.700'}
          fontWeight={700}
        >
          기본 정보
        </Heading>
        <CommonInput
          nickNameRegister={{
            ...register('nickname', {
              required: '닉네임을 입력해주세요.',
              minLength: { value: 2, message: '2자 이상이어야 합니다.' },
              maxLength: { value: 10, message: '10자 이하여야 합니다.' },
            }),
          }}
          nickNameError={errors.nickname}
          phoneNumberRegister={{
            ...register('phoneNumber', {
              required: '연락처를 입력해주세요.',
              pattern: {
                value: CONSTANTS.PHONE_NUMBER_REGEX,
                message: '010으로 시작하는 11자리의 번호를 입력해주세요.',
              },
            }),
          }}
          phoneNumberError={errors.phoneNumber}
        />
      </form>
    </Box>
  );
};

export default EditMenteeProfileTemplate;
