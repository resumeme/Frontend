import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Pagination, { PaginationProps } from './Pagination';

const meta = {
  title: 'Resumeme/Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<PaginationProps>;

export const Default: Story = (args: { total: number; limit: number }) => {
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
  limit: 10,
};
