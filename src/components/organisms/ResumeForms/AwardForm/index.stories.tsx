import type { Meta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AwardForm } from '.';

const meta = {
  title: 'Resumeme/Components/Organisms/AwardForm',
  component: AwardForm,
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
} satisfies Meta<typeof AwardForm>;

export default meta;

export const Default = () => {
  return <AwardForm onCancel={() => {}} />;
};
