import type { Meta } from '@storybook/react';
import { MentorProfile } from '.';
import { Position } from '~/types/position';

const meta = {
  title: 'Resumeme/Components/MentorProfile',
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
      info: {
        title: 'title_b21dc40438ed',
        content: 'dlfjgrp',
        maximumCount: 0,
        currentApplicantCount: 0,
        positions: ['FRONT'] as Position[],
        timeInfo: {
          openDateTime: '2023-11-07 17:48:51',
          closeDateTime: '2023-11-07 17:48:51',
          endDate: '2023-11-07 17:48:51',
        },
      },
      resumes: [
        {
          resumeId: 0,
          menteeName: 'menteeName_a5382713f0d2',
          resumeTitle: 'resumeTitle_3f57dbe0891f',
          progressStatus: 'progressStatus_ad4597f425d4',
        },
      ],
    },
  };
  return (
    <MentorProfile
      mentor={DUMMY_DATA.mentor}
      event={DUMMY_DATA.event}
    />
  );
};
