import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalBodyProps,
} from '@chakra-ui/react';

export type ModalProps = ModalBodyProps & {
  isOpen: boolean;
  onClose: () => void;
  hasCloseButton?: boolean;
  hasFooter?: boolean;
  title?: string;
  children?: React.ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  hasCloseButton = true,
  hasFooter = false,
  title,
  children,
  ...modalBodyProps
}: ModalProps) => {
  return (
    <>
      <ChakraModal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="3xl"
      >
        <ModalOverlay bg={'rgba(229, 232, 235, 0.80)'} />
        <ModalContent
          borderRadius={'1.5rem'}
          p={'1.5rem'}
        >
          {title && <ModalHeader paddingTop={0}>{title}</ModalHeader>}
          {hasCloseButton && <ModalCloseButton p={'1.5rem'} />}
          <ModalBody {...modalBodyProps}>{children}</ModalBody>
          {hasFooter && (
            <ModalFooter
              paddingBottom={0}
              px={0}
            >
              {/*FIXME - 공통 버튼 컴포넌트로 대체하기 */}
              <Button
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          )}
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
