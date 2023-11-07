import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { useRef } from 'react';

type ConfirmModalProps = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  proceed: (arg: boolean) => void;
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
        <AlertDialogContent>
          <AlertDialogBody>{message}</AlertDialogBody>

          <AlertDialogFooter>
            <ChakraButton
              ref={cancelRef}
              onClick={onClose}
            >
              취소
            </ChakraButton>
            <ChakraButton
              onClick={() => proceed(true)}
              ml={3}
            >
              확인
            </ChakraButton>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ConfirmModal;
