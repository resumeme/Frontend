import { CheckboxGroup, CheckboxGroupProps, Flex, FormErrorMessage, Stack } from '@chakra-ui/react';
import { Controller, Control, FieldValues, Path, FieldError } from 'react-hook-form';
import CheckboxStyled from './CheckboxStyled';
import { Fields } from '~/types/fields';
import { Position } from '~/types/position';

export type LabelCheckboxGroupProps<T extends FieldValues> = CheckboxGroupProps & {
  options?: Array<{ label: string; value: string }>;
  variant?: 'role' | 'domain' | 'default';
  spacing?: string;
  name: Path<T>;
  required?: boolean;
  control: Control<T>;
  error?: Partial<FieldError>;
  errorMessage?: string;
};

const role: { label: string; value: Position }[] = [
  { label: '프론트엔드', value: 'FRONT' },
  { label: '백엔드', value: 'BACK' },
  { label: '안드로이드/iOS', value: 'MOBILE' },
  { label: '데브옵스', value: 'DEVOPS' },
  { label: '인공지능/머신러닝', value: 'ML_AI' },
];

const domain: { label: string; value: Fields }[] = [
  { label: '광고', value: 'AD' },
  { label: '미디어', value: 'MEDIA' },
  { label: '커뮤니티/SNS', value: 'SNS' },
  { label: 'e커머스', value: 'COMMERCE' },
  { label: '솔루션/유틸리티', value: 'SOLUTION' },
  { label: '게임', value: 'GAME' },
  { label: '금융/핀테크', value: 'FINANCE' },
  { label: '제조', value: 'MANUFACTURE' },
];

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
  let selectedOptions = options;

  if (variant != 'default') {
    selectedOptions = variant === 'domain' ? domain : role;
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
            <Stack
              spacing={spacing}
              direction="row"
              flexWrap="wrap"
            >
              {selectedOptions &&
                selectedOptions.map((option) => (
                  <CheckboxStyled
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </CheckboxStyled>
                ))}
            </Stack>
          </CheckboxGroup>
        )}
        rules={{ required: required ? errorMessage : false }}
      />
      {error && <FormErrorMessage alignSelf={'start'}>{error.message}</FormErrorMessage>}
    </Flex>
  );
};

export default LabelCheckboxGroup;
