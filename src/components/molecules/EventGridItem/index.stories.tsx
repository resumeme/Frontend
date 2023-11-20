import { Meta } from '@storybook/react';
import { EventGridItem } from '.';
import { EventListItem } from '~/types/event/eventList';
import { Position } from '~/types/position';

const meta = {
  title: 'Resumeme/Components/EventGridItem',
  tags: ['autodocs'],
  component: EventGridItem,
} satisfies Meta<typeof EventGridItem>;

export default meta;

export const Default = () => {
  return <EventGridItem event={DUMMY} />;
};

const DUMMY: EventListItem = {
  mentorInfo: {
    mentorId: 1,
    nickname: '큰돌',
    imageUrl: 'https://i.pinimg.com/736x/4a/d7/8f/4ad78f5e3407a9912fd0862be6a68a5b.jpg',
  },
  info: {
    id: 1,
    title:
      '프론트엔드, 백엔드 이력서 첨삭해드립니다. 이게 길어지면요. 어떻게 되냐면요. 이렇게 됩니다.',
    content: '내용',
    maximumCount: 3,
    currentApplicantCount: 0,
    positions: ['FRONT', 'BACK'] as Position[],
    timeInfo: {
      openDateTime: '2023-10-11T17:27:13.040Z',
      closeDateTime: '2023-10-31T17:27:13.040Z',
      endDate: '2023-12-01',
    },
    status: 'OPEN',
  },
};
