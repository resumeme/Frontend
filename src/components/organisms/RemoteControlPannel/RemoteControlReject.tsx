import { useDisclosure, Text, Box } from '@chakra-ui/react';
import RejectionModalContent from './RejectionModalContent';
import { Modal } from '~/components/molecules/Modal';

type RemoteControlRejectProps = {
  eventId: string;
  menteeId: number;
};

const RemoteControlReject = ({ eventId, menteeId }: RemoteControlRejectProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt={3}>
      <Modal
        w={'25rem'}
        isOpen={isOpen}
        onClose={onClose}
      >
        <RejectionModalContent
          onClose={onClose}
          menteeId={menteeId}
          eventId={eventId}
        />
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
