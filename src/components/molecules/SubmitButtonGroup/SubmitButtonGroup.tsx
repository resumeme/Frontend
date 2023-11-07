import { HStack, useDisclosure } from '@chakra-ui/react';
import { Button } from '~/components/atoms/Button';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';

type SubmitButtonGroupProps = {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirm: boolean;
};

const SubmitButtonGroup = ({ setIsShow, showConfirm }: SubmitButtonGroupProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleCancelClick = async () => {
    if (showConfirm) onOpen();
    else setIsShow(false);
  };
  return (
    <>
      <ConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        message="작성하던 내용이 있습니다. 작성을 그만하시겠습니까?"
        proceed={(result) => result && setIsShow(false)}
      />
      <HStack>
        <Button
          size={'sm'}
          type="submit"
        >
          저장
        </Button>
        <Button
          size={'sm'}
          variant={'cancel'}
          onClick={handleCancelClick}
        >
          취소
        </Button>
      </HStack>
    </>
  );
};

export default SubmitButtonGroup;
