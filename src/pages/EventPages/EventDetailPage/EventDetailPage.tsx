import { Flex } from '@chakra-ui/react';
import { MentorProfile } from '~/components/molecules/MentorProfile';
import { EventDetail } from '~/components/organisms/EventDetail';
import { useGetEventDetail } from '~/queries/event/details/useGetEventDetail';
import { useGetMentorDetail } from '~/queries/user/details/useGetMentorDetail';

const EventDetailPage = () => {
  //Todo: 이벤트 리스트가 완성되면 "1" 지우기
  const { data: mentor } = useGetMentorDetail({ mentorId: '1' });
  const { data: event } = useGetEventDetail({ eventId: '1' });

  return (
    <Flex
      px={'0.56rem'}
      gap={'2rem'}
    >
      <MentorProfile
        mentor={mentor}
        event={event}
      />
      <EventDetail
        mentor={mentor}
        event={event}
      />
    </Flex>
  );
};

export default EventDetailPage;
