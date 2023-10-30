import { Meta, StoryObj } from '@storybook/react';
import { CategoryAddHeader } from '.';

const meta = {
  title: 'Resumeme/Components/CategoryAddHeader',
  tags: ['autodocs'],
  component: CategoryAddHeader,
  argTypes: {
    categoryTitle: { control: 'text' },
  },
} satisfies Meta<typeof CategoryAddHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categoryTitle: '카테고리 제목',
  },
};
