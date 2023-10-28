import type { Meta, StoryObj } from '@storybook/react';

import ModalWithButton from './ModalWithButton';

const meta = {
  title: 'Resumeme/components/Modal',
  component: ModalWithButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ModalWithButton>;

export default meta;
type Story = StoryObj<typeof ModalWithButton>;

export const Modal: Story = {
  args: {
    title: '모달 제목 (optional)',
    hasCloseButton: false,
    hasFooter: false,
    children: '모달 내용',
  },
};

export const ModalWithoutTitle: Story = {
  args: {
    hasCloseButton: false,
    hasFooter: false,
    children: '모달 내용',
  },
};

export const ModalWithCloseButtonAndFooter: Story = {
  args: {
    title: '모달 제목 (optional)',
    hasCloseButton: true,
    hasFooter: true,
    children: '모달 내용',
  },
};
