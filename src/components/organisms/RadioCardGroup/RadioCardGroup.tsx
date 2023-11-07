import { Box, BoxProps, FormErrorMessage, HStack, useRadioGroup } from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import RadioCard from './RadioCard';

export type RadioOption<T extends string> = {
  value: T;
  children: React.ReactNode;
};

type RadioCardGroupProps<T extends string> = {
  options: RadioOption<T>[];
  formName: string;
  defaultValue: string;
  register: UseFormRegisterReturn;
  error?: Partial<FieldError>;
} & BoxProps;

const RadioCardGroup = ({
  options,
  formName,
  defaultValue,
  register,
  error,
  ...boxProps
}: RadioCardGroupProps<string>) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: formName,
    defaultValue,
  });

  const group = getRootProps();

  return (
    <HStack
      {...group}
      {...boxProps}
    >
      {options.map(({ value, children }: RadioOption<string>) => {
        const radioProps = getRadioProps({ value });
        return (
          <Box
            key={value}
            w={`${100 / options.length}%`}
            h={'full'}
          >
            <RadioCard
              {...radioProps}
              {...register}
            >
              {children}
            </RadioCard>
            {error && <FormErrorMessage>{error.message as string}</FormErrorMessage>}
          </Box>
        );
      })}
    </HStack>
  );
};

export default RadioCardGroup;
