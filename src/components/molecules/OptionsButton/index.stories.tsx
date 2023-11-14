import { Meta } from '@storybook/react';
import { OptionsButton, EditDeleteOptionsButton } from '.';

const meta = {
  title: 'Resumeme/Components/OptionsButton',
  tags: ['autodocs'],
  component: OptionsButton,
} satisfies Meta<typeof OptionsButton>;

export default meta;

export const EditDelete = () => {
  return (
    <EditDeleteOptionsButton
      onDelete={() => alert('deleted')}
      onEdit={() => alert('edited')}
    />
  );
};
