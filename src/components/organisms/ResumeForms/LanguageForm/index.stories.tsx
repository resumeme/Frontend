import type { Meta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageForm } from '.';

const meta = {
  title: 'Resumeme/Components/Organisms/LanguageForm',
  component: LanguageForm,
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
} satisfies Meta<typeof LanguageForm>;

export default meta;

export const Default = () => {
  return <LanguageForm onCancel={() => {}} />;
};
