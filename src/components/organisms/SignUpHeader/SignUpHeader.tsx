import { Divider, Flex, Text } from '@chakra-ui/react';

type SignUpHeaderProps = {
  mainMessage: string;
  subMessage: string;
};

const SignUpHeader = ({ mainMessage, subMessage }: SignUpHeaderProps) => {
  return (
    <>
      <Flex
        gap={'0.5rem'}
        direction={'column'}
        alignSelf={'start'}
        pl={'2rem'}
      >
        <Text
          color={'gray.900'}
          fontSize={'1.25rem'}
          fontWeight={'semibold'}
        >
          {mainMessage}
        </Text>
        <Text>{subMessage}</Text>
      </Flex>
      <Divider
        borderColor={'gray.300'}
        my={'2rem'}
      />
    </>
  );
};

export default SignUpHeader;
