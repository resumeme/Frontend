import type { Meta } from '@storybook/react';
import TitleInput from './TitleInput';

const meta = {
  title: 'Resumeme/Components/Atoms/TitleInput',
  component: TitleInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TitleInput>;

export default meta;

export const Default = {};
