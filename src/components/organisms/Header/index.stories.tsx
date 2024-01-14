import type { Meta } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'Resumeme/Components/Organisms/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

export const Default = () => {
  return <Header />;
};
