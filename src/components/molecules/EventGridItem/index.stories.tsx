import { Meta } from '@storybook/react';
import { EventGridItem } from '.';

const meta = {
  title: 'Resumeme/Components/EventGridItem',
  tags: ['autodocs'],
  component: EventGridItem,
  argTypes: {
    categoryTitle: { control: 'text' },
  },
} satisfies Meta<typeof EventGridItem>;

export default meta;

export const Default = () => {
  return <EventGridItem />;
};
