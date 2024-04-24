import type { Meta } from '@storybook/react';
import TestSignInButton from './TestSignInButton';

const meta = {
  title: 'Resumeme/Components/Molecules/TestSignInButton',
  component: TestSignInButton,
  tags: ['autodocs'],
} satisfies Meta<typeof TestSignInButton>;

export default meta;

export const MenteeSignInButton = () => {
  return (
    <TestSignInButton
      logo="mentee"
      onClick={() => {}}
    />
  );
};

export const MentorSignInButton = () => {
  return (
    <TestSignInButton
      logo="mentor"
      onClick={() => {}}
    />
  );
};
