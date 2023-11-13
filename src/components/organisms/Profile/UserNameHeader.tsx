import { Flex, Heading } from '@chakra-ui/react';

type UserNameHeaderProps = {
  realName: string;
};

const UserNameHeader = ({ realName }: UserNameHeaderProps) => {
  return (
    <Flex>
      <Heading
        fontSize={'1.75rem'}
        color={'gray.800'}
        fontWeight={700}
      >
        {realName}
      </Heading>
      <Heading
        fontSize={'1.75rem'}
        color={'gray.800'}
        fontWeight={500}
      >
        님 안녕하세요.
      </Heading>
    </Flex>
  );
};

export default UserNameHeader;
