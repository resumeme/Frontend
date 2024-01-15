import type { Meta, StoryObj } from '@storybook/react';
import BorderBox from './BorderBox';

const meta = {
  title: 'Resumeme/Components/Atoms/BorderBox',
  component: BorderBox,
  tags: ['autodocs'],
} satisfies Meta<typeof BorderBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본 보더박스',
  },
};

export const HasShadow: Story = {
  args: {
    children: '그림자가 있는 보더박스',
    hasShadow: true,
  },
};

export const Custom: Story = {
  args: {
    children: '커스텀 보더박스',
    borderRadius: 'md',
    width: '500px',
    height: '60px',
    px: '3',
    py: '3',
    bg: 'primary.300',
    color: 'gray.800',
    fontWeight: 'bold',
  },
};
