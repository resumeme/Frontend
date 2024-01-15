import type { Meta } from '@storybook/react';
import { useState } from 'react';
import FeedbackInput from './FeedbackInput';

const meta = {
  title: 'Resumeme/Components/Molecules/FeedbackInput',
  component: FeedbackInput,
  tags: ['autodocs'],
} satisfies Meta<typeof FeedbackInput>;

export default meta;

export const Default = () => {
  const [value, setValue] = useState<string | undefined>('');

  const handleChangeMarkdownValue = (newValue: string | undefined) => {
    setValue(newValue);
  };
  const handleFeedbackSave = (value: string) => {
    if (value) {
      alert(`Saved markdown value: ${value}`);
    }
  };

  return (
    <div>
      <FeedbackInput
        value={value}
        onChange={handleChangeMarkdownValue}
        onSaveClick={handleFeedbackSave}
      />
    </div>
  );
};
