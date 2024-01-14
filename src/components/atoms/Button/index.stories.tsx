import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Resumeme/Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'cancel'],
      control: { type: 'radio' },
    },
    size: {
      options: ['lg', 'md', 'sm', 'xs', 'full'],
      control: { type: 'radio' },
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Button',
  },
};

export const CancelButton: Story = {
  args: {
    variant: 'cancel',
    size: 'lg',
    children: 'Button',
  },
};
