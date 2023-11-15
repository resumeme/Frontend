import { Box } from '@chakra-ui/react';
import { Profile } from '~/components/organisms/Profile';
import EventProfile from '~/components/organisms/Profile/EventProfile';
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

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      {user && <Profile user={user} />}
      {user?.role === 'mentor' && <EventProfile events={[events]} />}
    </Box>
  );
};

export default MyPage;
