import type { Meta } from '@storybook/react';
import Footer from './Footer';

const meta = {
  title: 'Resumeme/components/Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

export const Default = () => {
  return <Footer />;
};
