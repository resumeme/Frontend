import { Box } from '@chakra-ui/react';
import { Profile } from '~/components/organisms/Profile';
import EventProfile from '~/components/organisms/Profile/EventProfile';
import { ResumeManagementTemplate } from '~/components/templates/ResumeManagementTemplate';
import useUser from '~/hooks/useUser';
import { Position } from '~/types/position';

const MyPage = () => {
  const { user } = useUser();
  // const { data: events } = useGetEvents();

  const events = {
    info: {
      title: '제목',
      content: '내용',
      maximumCount: 3,
      currentApplicantCount: 2,
      positions: ['BACK'] as Position[],
      timeInfo: {
        openDateTime: '2023-11-14T05:30:07.358518606',
        closeDateTime: '2023-11-14T06:30:07.358530106',
        endDate: '2023-11-14T07:30:07.358542107',
      },
    },
    resumes: [
      {
        resumeId: 1,
        menteeName: '백둥둥',
        resumeTitle: 'title',
        progressStatus: 'APPLY',
        modifiedAt: '2023.06.23',
      },
      {
        resumeId: 4,
        menteeName: '백둥둥2',
        resumeTitle: 'title',
        progressStatus: 'APPLY',
      },
    ],
  };

  const DUMY_DATA = [
    {
      resumeInfo: {
        id: 1,
        title: 'title1',
        modifiedAt: '2023.06.23',
      },
      events: [
        {
          eventInfo: {
            eventId: 1,
            title: '제목',
            endDate: '2023-11-15T09:36:59.665972804',
            status: 'OPEN',
            positions: ['BACK', 'FRONT'] as Position[],
          },
          mentorInfo: {
            mentorId: 1,
            nickname: '주승멘토',
            imageUrl: 'profile.png',
          },
        },
        {
          eventInfo: {
            eventId: 2,
            title: '제목',
            endDate: '2023-11-15T09:36:59.665972804',
            status: 'OPEN',
            positions: ['DEVOPS'] as Position[],
          },
          mentorInfo: {
            mentorId: 2,
            nickname: '기안멘토',
            imageUrl: 'profile.png',
          },
        },
      ],
    },
    {
      resumeInfo: {
        id: 1,
        title: 'title1',
      },
      events: [],
    },
  ];

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      {user && <Profile user={user} />}
      {user?.role === 'mentor' ? (
        <EventProfile events={[events]} />
      ) : (
        <ResumeManagementTemplate resumes={DUMY_DATA} />
      )}
    </Box>
  );
};

export default MyPage;
