import type { Meta } from '@storybook/react';
import { SignUpMentorTemplate } from '.';

const meta = {
  title: 'Resumeme/Components/SignUpMentorTemplate ',
  component: SignUpMentorTemplate,
  tags: ['autodocs'],
} satisfies Meta<typeof SignUpMentorTemplate>;

export default meta;

export const Default = () => {
  return <SignUpMentorTemplate onNext={() => {}} />;
};
