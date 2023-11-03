import type { Meta, StoryObj } from '@storybook/react';
import TitleInput from './TitleInput';

const meta = {
  title: 'Resumeme/Components/TitleInput',
  component: TitleInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TitleInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
