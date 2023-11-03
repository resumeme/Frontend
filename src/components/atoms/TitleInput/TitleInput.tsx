import { Input, InputProps } from '@chakra-ui/react';

type TitleInputProps = InputProps;

const TitleInput = ({ children, ...props }: TitleInputProps) => {
  return (
    <Input
      width={'100%'}
      height={'60px'}
      border={'none'}
      color={'gray.800'}
      borderBottom={'1px'}
      borderRadius={'none'}
      borderColor={'gray.300'}
      placeholder="이력서 제목"
      _placeholder={{ color: 'gray.400', fontWeight: 'light' }}
      fontSize={'32px'}
      px={2}
      {...props}
    >
      {children}
    </Input>
  );
};

export default TitleInput;
