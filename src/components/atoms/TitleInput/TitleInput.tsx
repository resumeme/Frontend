import { Input, InputProps, FormErrorMessage, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type TitleInputProps = {
  id?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  children?: ReactNode;
} & InputProps;

const TitleInput = ({ id, register, error, children, ...props }: TitleInputProps) => {
  return (
    <Flex
      direction={'column'}
      flexGrow={1}
      width={'full'}
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
        fontSize={'2rem'}
        px={2}
        {...register}
        {...props}
      >
        {children}
      </Input>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </Flex>
  );
};

export default TitleInput;
