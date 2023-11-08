import { CheckboxGroup, CheckboxGroupProps, Flex, FormErrorMessage, Stack } from '@chakra-ui/react';
import { Controller, Control, FieldValues, Path, FieldError } from 'react-hook-form';
import CheckboxStyled from './CheckboxStyled';

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

const role = [
  { label: '프론트엔드', value: 'FRONT' },
  { label: '서버/백엔드', value: 'BACK' },
  { label: '모바일', value: 'MOBILE' },
  { label: '시스템/데브옵스', value: 'DEVOPS' },
];

const domain = [
  { label: '광고', value: 'advertisement' },
  { label: 'e커머스', value: 'e-commerce' },
  { label: '금융/핀테크', value: 'fintech' },
  { label: '커뮤니티/SNS', value: 'sns' },
  { label: '게임', value: 'game' },
  { label: '솔루션/유틸리티', value: 'solution' },
  { label: '포털/콘텐츠/메신저', value: 'portal' },
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
      {error && <FormErrorMessage alignSelf={'start'}>{error.message as string}</FormErrorMessage>}
    </Flex>
  );
};

export default LabelCheckboxGroup;
