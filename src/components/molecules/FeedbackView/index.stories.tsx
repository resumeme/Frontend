import type { Meta } from '@storybook/react';
import FeedbackView from './FeedbackView';
import { ReadMentor } from '~/types/mentor';

const meta = {
  title: 'Resumeme/Components/Molecules/FeedbackView',
  component: FeedbackView,
  tags: ['autodocs'],
} satisfies Meta<typeof FeedbackView>;

export default meta;

const DUMMY_DATA = {
  imageUrl: 'https://i.pinimg.com/564x/b9/6a/9f/b96a9f10dd4365c867ff8d8972864a01.jpg',
  nickname: '내가멘토다',
} as ReadMentor;
export const Default = () => {
  return (
    <div>
      <FeedbackView mentorData={DUMMY_DATA} />
    </div>
  );
};
