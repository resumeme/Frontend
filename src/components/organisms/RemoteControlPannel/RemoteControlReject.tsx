import { useDisclosure, Text, Box, BoxProps } from '@chakra-ui/react';
import RejectionModalContent from './RejectionModalContent';
import { Modal } from '~/components/molecules/Modal';

const RemoteControlReject = ({ ...props }: BoxProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box {...props}>
      <Modal
        w={'25rem'}
        isOpen={isOpen}
        onClose={onClose}
      >
        <RejectionModalContent onClose={onClose} />
      </Modal>
      <Text
        fontSize={'sm'}
        fontWeight={'normal'}
        color={'gray.500'}
        textDecoration={'underline'}
        textUnderlineOffset={'4px'}
        textDecorationColor={'gray.400'}
        cursor={'pointer'}
        _hover={{
          color: 'gray.800',
          textDecorationColor: 'gray.800',
        }}
        onClick={onOpen}
        textAlign={'center'}
      >
        이력서 첨삭 반려하기
      </Text>
    </Box>
  );
};

export default RemoteControlReject;
