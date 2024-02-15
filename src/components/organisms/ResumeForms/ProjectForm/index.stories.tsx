import type { Meta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProjectForm } from '.';

const meta = {
  title: 'Resumeme/Components/Organisms/ProjectForm',
  component: ProjectForm,
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
} satisfies Meta<typeof ProjectForm>;

export default meta;

export const Default = () => {
  return <ProjectForm onCancel={() => {}} />;
};
