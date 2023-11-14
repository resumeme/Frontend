import { Meta } from '@storybook/react';
import { OptionsButton } from '.';

const meta = {
  title: 'Resumeme/Components/OptionsButton',
  tags: ['autodocs'],
  component: OptionsButton,
} satisfies Meta<typeof OptionsButton>;

export default meta;

export const Default = () => {
  return (
    <OptionsButton
      onDelete={() => alert('deleted')}
      onEdit={() => alert('edited')}
    />
  );
};
