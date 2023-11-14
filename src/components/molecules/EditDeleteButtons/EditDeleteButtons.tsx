import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { HStack, IconButton } from '@chakra-ui/react';

const EditDeleteButtons = () => {
  return (
    <HStack>
      <IconButton
        icon={<EditIcon />}
        color={'primary.900'}
        w={'auto'}
        aria-label="edit button"
      />
      <IconButton
        icon={<DeleteIcon />}
        color={'primary.900'}
        w={'auto'}
        aria-label="delete button"
      />
    </HStack>
  );
};

export default EditDeleteButtons;
