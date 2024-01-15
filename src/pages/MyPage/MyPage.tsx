import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Spinner } from '~/components/atoms/Spinner';
import { Profile } from '~/components/organisms/Profile';
import EventProfile from '~/components/templates/EventProfileTemplate/EventProfileTemplate';
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
      <Suspense fallback={<Spinner />}>
        {user?.role === 'mentor' && events && events?.length > 0 && (
          <EventProfile events={events} />
        )}
      </Suspense>
    </Box>
  );
};

export default MyPage;
