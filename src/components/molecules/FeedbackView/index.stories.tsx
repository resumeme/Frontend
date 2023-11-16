import type { Meta } from '@storybook/react';
import FeedbackView from './FeedbackView';

const meta = {
  title: 'Resumeme/Components/FeedbackView',
  component: FeedbackView,
  tags: ['autodocs'],
} satisfies Meta<typeof FeedbackView>;

export default meta;

export const Default = () => {
  return (
    <div>
      <FeedbackView />
    </div>
  );
};
