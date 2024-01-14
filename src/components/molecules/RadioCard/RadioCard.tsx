import { Box, useRadio } from '@chakra-ui/react';
import { BorderBox } from '~/components/atoms/BorderBox';
import { BorderBoxProps } from '~/components/atoms/BorderBox/BorderBox';

type RadioCardProps = {
  children: React.ReactNode;
  borderBoxStyle?: BorderBoxProps;
};

const RadioCard = ({ children, borderBoxStyle, ...props }: RadioCardProps) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const inputProps = getInputProps();
  const radioProps = getRadioProps();

  return (
    <Box as={'label'}>
      <input
        {...inputProps}
        style={{ display: 'none' }}
      />
      <BorderBox
        h={'full'}
        _checked={{
          borderColor: 'primary.900',
          color: 'primary.900',
          border: '2px',
        }}
        cursor={'pointer'}
        {...radioProps}
        {...borderBoxStyle}
      >
        {children}
      </BorderBox>
    </Box>
  );
};

export default RadioCard;
