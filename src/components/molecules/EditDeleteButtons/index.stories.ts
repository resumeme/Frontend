import { Meta, StoryObj } from '@storybook/react';
import { EditDeleteButtons } from '.';

const meta = {
  title: 'Resumeme/Components/EditDeleteButtons',
  tags: ['autodocs'],
  component: EditDeleteButtons,
} satisfies Meta<typeof EditDeleteButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
