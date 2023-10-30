import { CheckboxGroup, CheckboxGroupProps, Stack } from '@chakra-ui/react';
import CheckboxStyled from './CheckboxStyled';

type LabelCheckboxGroupProps = CheckboxGroupProps & {
  options?: Array<{ label: string; value: string }>;
  vairant?: 'role' | 'domain' | 'default';
  spacing?: string;
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

const LabelCheckboxGroup = ({
  options,
  variant = 'default',
  spacing = '12px',
  onChange,
}: LabelCheckboxGroupProps) => {
  let selectedOptions = options;

  if (variant != 'default') {
    selectedOptions = variant === 'domain' ? domain : role;
  }

  return (
    <>
      <CheckboxGroup onChange={onChange}>
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
    </>
  );
};

export default LabelCheckboxGroup;
