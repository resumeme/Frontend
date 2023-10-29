import type { Meta, StoryObj } from '@storybook/react';
import BorderBox from './BorderBox';

const meta = {
  title: 'Resumeme/Components/BorderBox',
  component: BorderBox,
  tags: ['autodocs'],
} satisfies Meta<typeof BorderBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '컨테이너 박스',
  },
};

export const HasShadow: Story = {
  args: {
    children: '컨테이너 박스',
    hasShadow: true,
  },
};
