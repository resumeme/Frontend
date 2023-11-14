import { IconButton, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Menu } from '@chakra-ui/react';
import { RiMore2Fill } from 'react-icons/ri';

type Option = {
  text: string;
  onClick: () => void;
};

type OptionsButtonProps = {
  onEdit?: () => void;
  onDelete?: () => void;
  otherOptions?: Option[];
};
const OptionsButton = ({ onEdit, onDelete, otherOptions }: OptionsButtonProps) => {
  const options = [];
  if (otherOptions) {
    options.push(...otherOptions);
  }
  if (onEdit) {
    options.push({ text: '수정하기', onClick: onEdit });
  }
  if (onDelete) {
    options.push({ text: '삭제하기', onClick: onDelete });
  }
  return (
    <Menu>
      <MenuButton
        display={'flex'}
        justifyContent={'center'}
      >
        <IconButton
          icon={<RiMore2Fill />}
          aria-label="more button"
          w={'auto'}
        />
      </MenuButton>
      <MenuList minW={'7rem'}>
        {options.map(({ text, onClick }, index) => {
          return (
            <MenuItem
              key={text + index}
              onClick={onClick}
              _hover={{ bg: 'gray.200' }}
            >
              {text}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default OptionsButton;
