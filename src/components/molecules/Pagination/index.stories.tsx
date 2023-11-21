import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Pagination from './Pagination';

const meta = {
  title: 'Resumeme/Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<{
  total: number;
  size: number;
}>;

export const Default: Story = (args: { total: number; size: number }) => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      {...args}
      page={page}
      setPage={setPage}
    />
  );
};

Default.args = {
  total: 100,
  size: 10,
};
