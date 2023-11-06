import type { Meta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TrainingForm from './TrainingForm';

const meta = {
  title: 'Resumeme/Components/TrainingForm',
  component: TrainingForm,
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
} satisfies Meta<typeof TrainingForm>;

export default meta;

export const Default = () => {
  return <TrainingForm />;
};
