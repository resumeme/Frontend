import { Box } from '@chakra-ui/react';
import { Profile } from '~/components/organisms/Profile';
import EventProfile from '~/components/organisms/Profile/EventProfile';
import useUser from '~/hooks/useUser';
import { useGetManagementEvents } from '~/queries/event/details/useGetManagementEvents';

const MyPage = () => {
  const { user } = useUser();
  const { data: events } = useGetManagementEvents({ role: user?.role, userId: Number(user?.id) });

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      {user && <Profile user={user} />}
      {user?.role === 'mentor' && events && events?.length > 0 && <EventProfile events={events} />}
    </Box>
  );
};

export default MyPage;
