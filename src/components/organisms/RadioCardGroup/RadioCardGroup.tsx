import { Box, BoxProps, Flex, FormErrorMessage, useRadioGroup } from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import RadioCard from './RadioCard';

export type RadioOption<T extends string = string> = {
  value: T;
  children: React.ReactNode;
};

type RadioCardGroupProps<T extends string> = {
  options: RadioOption<T>[];
  formName: string;
  defaultValue: string;
  register: UseFormRegisterReturn;
  error?: Partial<FieldError>;
  direction?: 'row' | 'column';
} & BoxProps;

const RadioCardGroup = ({
  options,
  formName,
  defaultValue,
  register,
  error,
  direction = 'row',
  ...cardBoxProps
}: RadioCardGroupProps<string>) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: formName,
    defaultValue,
  });

  const group = getRootProps();

  return (
    <Flex direction={'column'}>
      <Flex
        direction={direction}
        w={'full'}
        gap={'0.5rem'}
        {...group}
      >
        {options.map(({ value, children }: RadioOption<string>) => {
          const radioProps = getRadioProps({ value });
          return (
            <Box
              key={value}
              flexBasis={`${100 / options.length}%`}
              h={'full'}
              {...register}
            >
              <RadioCard
                {...radioProps}
                borderBoxStyle={cardBoxProps}
              >
                {children}
              </RadioCard>
            </Box>
          );
        })}
      </Flex>
      {error && <FormErrorMessage>{error.message as string}</FormErrorMessage>}
    </Flex>
  );
};

export default RadioCardGroup;
