import type { Meta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ResumeCategoryCareer from './ResumeCategoryCareer';

const meta = {
  title: 'Resumeme/Components/ResumeCategoryCareer',
  component: ResumeCategoryCareer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
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
} satisfies Meta<typeof ResumeCategoryCareer>;

export default meta;

export const Default = () => {
  return <ResumeCategoryCareer />;
};
