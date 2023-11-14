import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

const meta = {
  title: 'Resumeme/Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xl', 'lg', 'md', 'sm', 'full'],
      control: { type: 'radio' },
    },
    thickness: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'lg',
    thickness: '4px',
  },
};
