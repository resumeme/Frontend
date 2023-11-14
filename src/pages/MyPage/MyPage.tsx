import { Box } from '@chakra-ui/react';
import { Profile } from '~/components/organisms/Profile';
import EventProfile from '~/components/organisms/Profile/EventProfile';
import useUser from '~/hooks/useUser';

const MyPage = () => {
  const { user } = useUser();

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      {user && <Profile user={user} />}
      <EventProfile />
    </Box>
  );
};

export default MyPage;
