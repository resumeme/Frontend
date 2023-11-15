import OptionsButton from './OptionsButton';
import { Option } from './OptionsButton';

const EditDeleteOptionsButton = ({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) => {
  const options: Option[] = [
    { text: '수정하기', onClick: onEdit },
    { text: '삭제하기', onClick: onDelete },
  ];
  return <OptionsButton options={options} />;
};

export default EditDeleteOptionsButton;
