import { Box, Flex, Icon, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { Menu } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { RiMore2Fill } from 'react-icons/ri';

export type Option = {
  text: string;
  onClick: () => void;
};

type OptionsButtonProps = {
  options: Option[];
  icon?: IconType;
  label?: string;
};
const OptionsButton = ({ label, icon = RiMore2Fill, options }: OptionsButtonProps) => {
  return (
    <Box role="group">
      <Menu>
        <MenuButton
          display={'flex'}
          justifyContent={'center'}
          w={'fit-content'}
        >
          <Flex
            gap={'0.5em'}
            align={'center'}
          >
            {label && (
              <Text
                fontSize={'sm'}
                fontWeight={'bold'}
                color={'gray.700'}
                _groupHover={{
                  textDecoration: 'underline',
                }}
              >
                {label}
                <Text
                  as="span"
                  fontWeight={'normal'}
                  fontSize={'xs'}
                >
                  님
                </Text>
              </Text>
            )}
            <Icon
              as={icon}
              aria-label="more button"
              w={'auto'}
            />
          </Flex>
        </MenuButton>
        <MenuList minW={'7rem'}>
          {options.map(({ text, onClick }, index) => {
            return (
              <MenuItem
                justifyContent={'center'}
                key={text + index}
                onClick={onClick}
                _hover={{ bg: 'gray.200' }}
                fontSize={'sm'}
                color={'gray.700'}
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
