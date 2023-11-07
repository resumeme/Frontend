import { Flex } from '@chakra-ui/react';
import MentorProfile from '~/components/molecules/MentorProfile/MentorProfile';
import EventDetail from '~/components/organisms/EventDetail/EventDetail';
import { useGetMentorDetail } from '~/queries/user/details/useGetMentorDetail';
import { Position } from '~/types/position';

const DUMMY_DATA = {
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

const EventDetailPage = () => {
  const { data: mentor } = useGetMentorDetail({ mentorId: '1' });

  return (
    <Flex gap={'2rem'}>
      <MentorProfile
        mentor={mentor}
        event={DUMMY_DATA.event}
      />
      <EventDetail
        mentor={mentor}
        event={DUMMY_DATA.event}
      />
    </Flex>
  );
};

export default EventDetailPage;
