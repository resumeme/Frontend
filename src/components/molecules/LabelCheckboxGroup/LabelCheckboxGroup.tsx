import { CheckboxGroup, CheckboxGroupProps, Stack } from '@chakra-ui/react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import CheckboxStyled from './CheckboxStyled';

export type LabelCheckboxGroupProps<T extends FieldValues> = CheckboxGroupProps & {
  options?: Array<{ label: string; value: string }>;
  variant?: 'role' | 'domain' | 'default';
  spacing?: string;
  name: Path<T>;
  required?: boolean;
  control: Control<T>;
};

const role = [
  { label: '프론트엔드', value: 'frontend' },
  { label: '서버/백엔드', value: 'backend' },
  { label: '모바일', value: 'mobile' },
  { label: '시스템/데브옵스', value: 'devops' },
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
  required = true,
  ...props
}: LabelCheckboxGroupProps<T>) => {
  let selectedOptions = options;

  if (variant != 'default') {
    selectedOptions = variant === 'domain' ? domain : role;
  }

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CheckboxGroup
            {...props}
            {...field}
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
        rules={{ required }}
      />
    </>
  );
};

export default LabelCheckboxGroup;
