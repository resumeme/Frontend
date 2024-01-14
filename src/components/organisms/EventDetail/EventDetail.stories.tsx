import type { Meta } from '@storybook/react';
import EventDetail from './EventDetail';
import { ReadEvent } from '~/types/event/event';
import { ReadMentor } from '~/types/mentor';

const meta = {
  title: 'Resumeme/components/EventDetail',
  component: EventDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EventDetail>;

export default meta;

export const Default = () => {
  const mentor: ReadMentor = {
    careerContent: '안녕하세요',
    careerYear: 11,
    experiencedPositions: ['FRONT'],
    imageUrl: '',
    introduce: '안녕하세요',
    nickname: '멘토',
    role: 'mentor',
  };

  const event: ReadEvent = {
    content: '내용',
    currentApplicantCount: 2,
    id: 2,
    maximumCount: 2,
    mentorId: 1,
    positions: ['BACK'],
    status: 'CLOSE',
    timeInfo: {
      openDateTime: '2023-10-11T17:27:13.040Z',
      closeDateTime: '2023-10-31T17:27:13.040Z',
      endDate: '2023-12-01',
    },
    title: '제목',
  };

  return (
    <EventDetail
      isEditable={true}
      mentor={mentor}
      event={event}
    />
  );
};
