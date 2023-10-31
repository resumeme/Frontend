import { Checkbox, CheckboxProps } from '@chakra-ui/react';

const primaryColor = 'primary.900';
const whiteColor = 'gray.100';

const defaultStyle = () => {
  return {
    h: '36px',
    px: '11px',
    w: 'fit-content',
    border: '1px',
    borderColor: 'gray.300',
    borderRadius: '0.75rem',
    color: 'gray.400',
    _checked: {
      bg: primaryColor,
      color: whiteColor,
      borderColor: primaryColor,
      _hover: {
        color: whiteColor,
      },
    },
    _hover: {
      borderColor: primaryColor,
      color: primaryColor,
    },
    "span[class*='checkbox__control']:not([data-disabled])": {
      display: 'none',
    },
    "span[class*='checkbox__label']:not([data-disabled])": {
      m: 0,
    },
  };
};

const CheckboxStyled = ({ children, spacing = '1rem', ...props }: CheckboxProps) => {
  const classes = defaultStyle();
  return (
    <Checkbox
      spacing={spacing}
      sx={classes}
      {...props}
    >
      {children}
    </Checkbox>
  );
};

export default CheckboxStyled;
