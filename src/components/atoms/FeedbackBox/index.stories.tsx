import type { Meta } from '@storybook/react';
import FeedbackBox from './FeedbackBox';
import { ResumeCategoryDetails } from '~/components/organisms/ResumeCategoryDetails';
import { CareerDetails } from '~/components/organisms/ResumeDetails';
import Career from '~/types/career';

const meta = {
  title: 'Resumeme/Components/FeedbackBox',
  component: FeedbackBox,
  tags: ['autodocs'],
} satisfies Meta<typeof FeedbackBox>;

export default meta;

export const DefaultFeedbackBox = () => {
  const data: Career[] = [
    {
      companyName: '아무개 주식회사',
      position: '프론트엔드 개발자',
      skills: ['TypeScript', 'React.js'],
      duties: [],
      currentlyEmployed: true,
      careerStartDate: '2020-09-09',
      endDate: undefined,
      careerContent: '개같이 일했습니다. 멍멍.',
    },
  ];

  return (
    <FeedbackBox>
      <ResumeCategoryDetails
        arrayData={data}
        DetailsComponent={CareerDetails}
      />
    </FeedbackBox>
  );
};
