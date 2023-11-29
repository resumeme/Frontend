import { ChakraProps, Highlight, Text } from '@chakra-ui/react';

type HighlightedDescribeProps = ChakraProps & {
  describe: string;
};

const HighlightedDescribe = ({ describe, ...props }: HighlightedDescribeProps) => {
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

export default HighlightedDescribe;
