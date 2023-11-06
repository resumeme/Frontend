import MentorProfile from '~/components/molecules/MentorProfile/MentorProfile';
import { Position } from '~/types/position';

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
      title: 'title',
      content: 'content',
      maximumAttendee: 3,
    },
    time: {
      openDateTime: '2023-10-23T12:00:00',
      closeDateTime: '2023-10-24T12:00:00',
      endDate: '2023-10-30T23:00:00',
    },
    positions: ['FRONT', 'BACK'],
    resumes: [
      {
        resumeId: 1,
        menteeName: '백둥둥',
        resumeTitle: 'title',
        progressStatus: 'APPLY',
      },
      {
        resumeId: 4,
        menteeName: '백둥둥2',
        resumeTitle: 'title',
        progressStatus: 'APPLY',
      },
    ],
    applicantCount: 3,
  },
};

const EventDetailPage = () => {
  return (
    <MentorProfile
      mentor={DUMMY_DATA.mentor}
      event={DUMMY_DATA.event}
    />
  );
};

export default EventDetailPage;
