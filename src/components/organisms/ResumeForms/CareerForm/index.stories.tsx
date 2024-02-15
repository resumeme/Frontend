import type { Meta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CareerForm } from '.';

const meta = {
  title: 'Resumeme/Components/Organisms/CareerForm',
  component: CareerForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
} satisfies Meta<typeof CareerForm>;

export default meta;

export const Default = () => {
  return <CareerForm onCancel={() => {}} />;
};
