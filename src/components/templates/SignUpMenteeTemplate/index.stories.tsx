import type { Meta } from '@storybook/react';
import { SignUpMenteeTemplate } from '.';

const meta = {
  title: 'Resumeme/Components/SignUpMenteeTemplate ',
  component: SignUpMenteeTemplate,
  tags: ['autodocs'],
} satisfies Meta<typeof SignUpMenteeTemplate>;

export default meta;

export const Default = () => {
  return <SignUpMenteeTemplate onNext={() => {}} />;
};
