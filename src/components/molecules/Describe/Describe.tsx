import { ChakraProps, Highlight, Text } from '@chakra-ui/react';

type DescribeProps = ChakraProps & {
  describe: string;
};

const Describe = ({ describe, ...props }: DescribeProps) => {
  return (
    <Text fontSize="md">
      <Highlight
        query={describe}
        styles={{ px: '3', py: '1', rounded: 'full', bg: 'green.100', color: 'gray.700', ...props }}
      >
        {describe}
      </Highlight>
    </Text>
  );
};

export default Describe;
