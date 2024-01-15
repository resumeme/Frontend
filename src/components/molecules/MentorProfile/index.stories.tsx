import type { Meta } from '@storybook/react';
import { MentorProfile } from '.';
import { EventStatus } from '~/types/eventStatus';
import { Position } from '~/types/position';

const meta = {
  title: 'Resumeme/Components/Molecules/MentorProfile',
  component: MentorProfile,
  tags: ['autodocs'],
} satisfies Meta<typeof MentorProfile>;

export default meta;

export const Default = () => {
  const DUMMY_DATA = {
    mentor: {
      imageUrl: 'image.png',
      nickname: 'nickname',
      role: 'ROLE_PENDING',
      experiencedPositions: ['FRONT', 'BACK'] as Position[],
      careerContent: '안녕하세요 멘토가 되고싶어요.',
      careerYear: 3,
      introduce:
        '안녕하시렵니까? 큰돌입니다. 10년차 프론트앤드 개발자! 안녕하시렵니까? 큰돌입니다. 10년차 프론트앤드 개발자!안녕하시렵니까? 큰돌입니다. 10년차 프론트앤드 개발자!안녕하시렵니까? 큰돌입니다. 10년차 프론트앤드 개발자!안녕하시렵니까? 큰돌입니다. 10년차 프론트앤드 개발자!안녕하시렵니까? 큰돌입니다. 10년차 프론트앤드 개발자!안녕하시렵니까? 큰돌입니다. 10년차 프론트앤드 개발자!',
    },
    event: {
      id: 1,
      mentorId: 1,
      title: '제목',
      content: '내용',
      maximumCount: 3,
      currentApplicantCount: 2,
      status: 'OPEN' as EventStatus,
      positions: ['BACK'] as Position[],
      timeInfo: {
        openDateTime: '2023-11-19T19:35:20.791461302',
        closeDateTime: '2023-11-19T20:35:20.791471101',
        endDate: '2023-11-19T21:35:20.791482462',
      },
    },
  };
  return (
    <MentorProfile
      mentor={DUMMY_DATA.mentor}
      event={DUMMY_DATA.event}
      onApply={() => {}}
    />
  );
};
