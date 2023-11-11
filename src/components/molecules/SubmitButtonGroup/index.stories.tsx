import type { Meta } from '@storybook/react';
import SubmitButtonGroup from './SubmitButtonGroup';

const meta = {
  title: 'Resumeme/Components/SubmitButtonGroup',
  component: SubmitButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof SubmitButtonGroup>;

export default meta;

export const Default = () => {
  return <SubmitButtonGroup onCancel={() => {}} />;
};
