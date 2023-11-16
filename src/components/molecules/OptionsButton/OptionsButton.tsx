import { Box, IconButton, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Menu } from '@chakra-ui/react';
import { RiMore2Fill } from 'react-icons/ri';

export type Option = {
  text: string;
  onClick: () => void;
};

type OptionsButtonProps = {
  options: Option[];
};
const OptionsButton = ({ options }: OptionsButtonProps) => {
  return (
    <Box>
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
    </Box>
  );
};

export default OptionsButton;
