import type { Meta } from '@storybook/react';
import MemoBox from './MemoBox';

const meta: Meta = {
  title: 'Resumeme/ComponentsMolecules/MemoBox',
  component: MemoBox,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return <MemoBox onOpen={() => {}} />;
};
