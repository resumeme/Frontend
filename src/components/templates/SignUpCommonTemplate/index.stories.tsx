import type { Meta } from '@storybook/react';
import { SignUpCommonTemplate } from '.';

const meta = {
  title: 'Resumeme/Components/Templates/SignUpCommonTemplate ',
  component: SignUpCommonTemplate,
  tags: ['autodocs'],
} satisfies Meta<typeof SignUpCommonTemplate>;

export default meta;

export const Default = () => {
  return <SignUpCommonTemplate onNext={() => {}} />;
};
