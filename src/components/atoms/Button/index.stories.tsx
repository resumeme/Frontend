import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: {
      type: 'string',
    },
    size: {
      type: 'string',
    },
    children: {
      type: 'string',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    type: 'default',
    size: 'lg',
    children: 'Button',
  },
};

export const CancelButton: Story = {
  args: {
    type: 'cancel',
    size: 'lg',
    children: 'Button',
  },
};

export const Seconds = () => {
  return (
    <Button
      size="lg"
      type="cancel"
    >
      등록하기
    </Button>
  );
};
