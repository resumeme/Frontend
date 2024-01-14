import type { Meta } from '@storybook/react';
import EventContent from './EventContent';

const meta = {
  title: 'Resumeme/components/EventContent',
  component: EventContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EventContent>;

export default meta;

export const Default = () => {
  const content = '이벤트 내용';

  return <EventContent content={content} />;
};
