import { Box } from '@chakra-ui/react';
import { Profile } from '~/components/organisms/Profile';
import EventProfile from '~/components/organisms/Profile/EventProfile';
import { ResumeManagementTemplate } from '~/components/templates/ResumeManagementTemplate';
import useUser from '~/hooks/useUser';
import { useGetManagementEvents } from '~/queries/event/details/useGetManagementEvents';
import { Position } from '~/types/position';

const MyPage = () => {
  const { user } = useUser();
  const { data: events } = useGetManagementEvents({ role: user?.role, userId: user?.id || 0 });

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
        events && <EventProfile events={events} />
      ) : (
        <ResumeManagementTemplate resumes={DUMY_DATA} />
      )}
    </Box>
  );
};

export default MyPage;
