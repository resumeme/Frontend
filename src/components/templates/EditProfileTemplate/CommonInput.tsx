import { Flex } from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { FORM_STYLE } from './EditMentorProfileTemplate';
import { Avatar } from '~/components/atoms/Avatar';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextInput } from '~/components/molecules/FormTextInput';

type CommonInputProps = {
  nickNameRegister: UseFormRegisterReturn;
  nickNameError?: FieldError;
  phoneNumberRegister: UseFormRegisterReturn;
  phoneNumberError?: FieldError;
};

const CommonInput = ({
  nickNameRegister,
  phoneNumberRegister,
  nickNameError,
  phoneNumberError,
}: CommonInputProps) => {
  return (
    <BorderBox
      mt={'1.25rem'}
      p={'3rem 4.38rem'}
    >
      <Flex
        w={'100%'}
        gap={'2.56rem'}
        alignItems={'center'}
      >
        <Avatar size="lg" />
        <Flex
          flex={1}
          direction={'column'}
        >
          <FormControl
            isInvalid={!!nickNameError}
            {...FORM_STYLE.control}
          >
            <FormLabel
              isRequired
              {...FORM_STYLE.label}
            >
              닉네임
            </FormLabel>
            <FormTextInput
              mt={'0.25rem'}
              placeholder="닉네임은 2자 이상 10자 이하여야 합니다."
              id={'nickname'}
              register={nickNameRegister}
              error={nickNameError}
            />
          </FormControl>

          <FormControl
            mt={'1.81rem'}
            isInvalid={!!phoneNumberError}
            {...FORM_STYLE.control}
          >
            <FormLabel
              isRequired
              {...FORM_STYLE.label}
            >
              연락처
            </FormLabel>
            <FormTextInput
              mt={'0.25rem'}
              placeholder="'-' 기호 없이 입력해주세요."
              id={'phoneNumber'}
              register={phoneNumberRegister}
              error={phoneNumberError}
            />
          </FormControl>
        </Flex>
      </Flex>
    </BorderBox>
  );
};

export default CommonInput;
