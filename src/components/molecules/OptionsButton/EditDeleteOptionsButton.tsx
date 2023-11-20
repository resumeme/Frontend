import { useDisclosure } from '@chakra-ui/react';
import OptionsButton from './OptionsButton';
import { Option } from './OptionsButton';
import { ConfirmModal } from '../ConfirmModal';

const EditDeleteOptionsButton = ({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) => {
  const options: Option[] = [
    { text: '수정하기', onClick: onEdit },
    { text: '삭제하기', onClick: () => onOpen() },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        message="정말로 삭제하시겠습니까?"
        proceed={onDelete}
      />
      <OptionsButton options={options} />
    </>
  );
};

export default EditDeleteOptionsButton;
