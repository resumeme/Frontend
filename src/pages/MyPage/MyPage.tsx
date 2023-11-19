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

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      {user && <Profile user={user} />}
      {user?.role === 'mentor' && events && <EventProfile events={events} />}
    </Box>
  );
};

export default MyPage;
