import { Button, useDisclosure } from '@chakra-ui/react';
import Modal, { ModalProps } from '../../molecules/Modal/Modal';

const ModalWithButton = ({ size, title, hasCloseButton, hasFooter, children }: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>모달 오픈 버튼</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        hasCloseButton={hasCloseButton}
        hasFooter={hasFooter}
        title={title}
        size={size}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalWithButton;
