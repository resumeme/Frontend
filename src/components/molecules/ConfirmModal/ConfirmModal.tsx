import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { Button } from '~/components/atoms/Button';

type ConfirmModalProps = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  proceed: () => void;
};

const ConfirmModal = ({ message, isOpen, onClose, proceed }: ConfirmModalProps) => {
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4}>
          <AlertDialogBody>{message}</AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={onClose}
              size={'xs'}
              variant={'cancel'}
            >
              취소
            </Button>
            <Button
              onClick={proceed}
              ml={3}
              size={'xs'}
            >
              확인
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ConfirmModal;
