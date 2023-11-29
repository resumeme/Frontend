import { Meta, StoryObj } from '@storybook/react';
import { Describe } from '.';

const meta = {
  title: 'Resumeme/Components/Describe',
  tags: ['autodocs'],
  component: Describe,
} satisfies Meta<typeof Describe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    describe: '표시할 내용',
  },
};

export const BgColorInherit: Story = {
  args: {
    describe: '표시할 내용',
    bg: 'inherit',
  },
};
