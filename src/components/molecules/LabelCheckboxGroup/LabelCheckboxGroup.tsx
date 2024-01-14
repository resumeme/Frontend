import { CheckboxGroup, CheckboxGroupProps, Flex, FormErrorMessage } from '@chakra-ui/react';
import { Controller, Control, FieldValues, Path, FieldError } from 'react-hook-form';
import CheckboxStyled from './CheckboxStyled';
import CONSTANTS from '~/constants';

export type LabelCheckboxGroupProps<T extends FieldValues> = CheckboxGroupProps & {
  options?: Record<string, string>;
  variant?: 'role' | 'domain' | 'default';
  spacing?: string;
  name: Path<T>;
  required?: boolean;
  control: Control<T>;
  error?: Partial<FieldError>;
  errorMessage?: string;
};

const LabelCheckboxGroup = <T extends FieldValues>({
  options,
  variant = 'default',
  spacing = '12px',
  name,
  control,
  error,
  required = true,
  errorMessage = '선택해주세요.',
  ...props
}: LabelCheckboxGroupProps<T>) => {
  let selectedOptions = { ...options };

  if (variant != 'default') {
    selectedOptions = variant === 'domain' ? { ...CONSTANTS.FIELD } : { ...CONSTANTS.POSITION };
  }

  return (
    <Flex direction={'column'}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CheckboxGroup
            {...props}
            onChange={onChange}
            value={value}
          >
            <Flex
              gap={spacing}
              direction="row"
              flexWrap="wrap"
            >
              {selectedOptions &&
                Object.keys(selectedOptions).map((key) => (
                  <CheckboxStyled
                    key={key}
                    value={key}
                  >
                    {selectedOptions[key]}
                  </CheckboxStyled>
                ))}
            </Flex>
          </CheckboxGroup>
        )}
        rules={{ required: required ? errorMessage : false }}
      />
      {error && <FormErrorMessage alignSelf={'start'}>{error.message}</FormErrorMessage>}
    </Flex>
  );
};

export default LabelCheckboxGroup;
