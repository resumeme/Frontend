import type { Meta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SignUpCommonTemplate } from '.';

const meta = {
  title: 'Resumeme/Components/SignUpCommonTemplate ',
  component: SignUpCommonTemplate,
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
} satisfies Meta<typeof SignUpCommonTemplate>;

export default meta;

export const Default = () => {
  return <SignUpCommonTemplate onNext={() => {}} />;
};
