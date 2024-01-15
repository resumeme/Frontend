import { Meta } from '@storybook/react';
import { ResumeListItem } from '.';

const meta = {
  title: 'Resumeme/Components/Molecules/ResumeListItem',
  tags: ['autodocs'],
  component: ResumeListItem,
} satisfies Meta<typeof ResumeListItem>;

export default meta;

export const Default = () => {
  return (
    <ResumeListItem
      data={{
        id: 1,
        title: 'title1',
        modifiedAt: '2023-11-17',
        position: '프론트엔드',
        memo: '메모임!',
      }}
    />
  );
};
