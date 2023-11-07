import MentorProfile from '~/components/molecules/MentorProfile/MentorProfile';
import { useGetMentorDetail } from '~/queries/user/details/useGetMentorDetail';

const DUMMY_DATA = {
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
  const { data: mentor } = useGetMentorDetail({ mentorId: '1' });

  return (
    <MentorProfile
      mentor={mentor}
      event={DUMMY_DATA.event}
    />
  );
};

export default EventDetailPage;
