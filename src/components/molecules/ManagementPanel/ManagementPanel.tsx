import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

type ManagementPanelProps = {
  icon?: React.ReactNode;
  name: string;
  title: string;
  date?: string;
  status: string;
};

const ManagementPanel = ({ icon, date, name, status, title }: ManagementPanelProps) => {
  return (
    <Flex gap={'0.75rem'}>
      <Box
        flexGrow={1}
        borderRadius={'0.3125rem'}
        fontSize={'0.875rem'}
        bg={'gray.200'}
        p={'0.63rem 0.87rem'}
      >
        <Flex
          gap={'0.88rem'}
          alignItems={'center'}
        >
          {icon}
          <Text
            w={'5rem'}
            borderRight={'1px'}
            borderColor={'gray.300'}
            color={'gray.900'}
            as="span"
          >
            {name}
          </Text>
          <Text
            color={'gray.700'}
            as="span"
          >
            {title}
          </Text>
          <Spacer />
          <Text
            color={'gray.500'}
            as="span"
          >
            {date}
          </Text>
        </Flex>
      </Box>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        w={'3.375rem'}
        borderRadius={'0.3125rem'}
        fontSize={'0.75rem'}
        bg={status === 'APPLY' ? 'primary.700' : 'gray.500'}
        h={'2.5rem'}
      >
        <Text
          as="span"
          color={'white'}
        >
          {status === 'APPLY' ? '진행 중' : '완료'}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ManagementPanel;
