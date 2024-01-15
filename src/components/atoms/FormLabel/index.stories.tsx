import type { Meta, StoryObj } from '@storybook/react';
import FormLabel from './FormLabel';

const meta = {
  title: 'Resumeme/Components/Atoms/FormLabel',
  component: FormLabel,
  tags: ['autodocs'],
} satisfies Meta<typeof FormLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormLabel: Story = {
  args: {
    children: '레이블 입니다.',
  },
};
export const FitContentFormLabel: Story = {
  args: {
    children: '레이블 입니다.',
    w: 'fit-content',
  },
};

export const RequiredLabel: Story = {
  args: {
    children: '레이블 입니다. - 필수 요소 입니다.',
    isRequired: true,
  },
};

export const RequiredFitLabel: Story = {
  args: {
    children: '레이블 입니다. - 필수 요소 입니다.',
    isRequired: true,
    w: 'fit-content',
  },
};
