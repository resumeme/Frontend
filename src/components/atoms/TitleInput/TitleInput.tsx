import { Input, InputProps, FormErrorMessage, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FieldError, FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

type TitleInputProps = InputProps & {
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError | FieldErrors;
  children?: ReactNode;
} & Omit<InputProps, 'type'>;

const TitleInput = ({ id, register, error, children, ...props }: TitleInputProps) => {
  const errorMessage = error && 'message' in error ? (error.message as string) : '';

  return (
    <Flex
      direction={'column'}
      flexGrow={1}
    >
      <Input
        id={id}
        width={'100%'}
        height={'60px'}
        border={'none'}
        color={'gray.800'}
        borderBottom={'1px'}
        borderRadius={'none'}
        borderColor={'gray.300'}
        placeholder="이력서 제목"
        _placeholder={{ color: 'gray.400', fontWeight: 'semibold' }}
        fontSize={'32px'}
        px={2}
        {...register}
        {...props}
      >
        {children}
      </Input>
      {error && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </Flex>
  );
};

export default TitleInput;
