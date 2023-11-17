import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalContentProps,
} from '@chakra-ui/react';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  hasCloseButton?: boolean;
  hasFooter?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  title?: string;
  children?: React.ReactNode;
} & ModalContentProps;

const Modal = ({
  isOpen,
  onClose,
  hasCloseButton = true,
  hasFooter = false,
  size = 'xl',
  title,
  children,
  ...modalContentProps
}: ModalProps) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={size}
    >
      <ModalOverlay bg={'rgba(229, 232, 235, 0.80)'} />
      <ModalContent
        borderRadius={'1.5rem'}
        p={'1.5rem'}
        {...modalContentProps}
      >
        {title && <ModalHeader paddingTop={0}>{title}</ModalHeader>}
        {hasCloseButton && <ModalCloseButton p={'1.5rem'} />}
        <ModalBody p={0}>{children}</ModalBody>
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
  );
};

export default Modal;
