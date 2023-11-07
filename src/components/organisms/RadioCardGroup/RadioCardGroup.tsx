import { HStack, useRadioGroup } from '@chakra-ui/react';
import RadioCard from './RadioCard';

type RadioCardGroupProps = {
  options: string[];
  formName: string;
  defaultValue: string;
  onChange: () => void;
};

const RadioCardGroup = ({ options, formName, defaultValue, onChange }: RadioCardGroupProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: formName,
    defaultValue,
    onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radioProps = getRadioProps({ value });
        return (
          <RadioCard
            key={value}
            {...radioProps}
          >
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default RadioCardGroup;
