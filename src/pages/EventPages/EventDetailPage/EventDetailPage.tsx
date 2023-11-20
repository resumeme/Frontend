import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Spinner } from '~/components/atoms/Spinner';
import { MentorProfile } from '~/components/molecules/MentorProfile';
import { Modal } from '~/components/molecules/Modal';
import { EventDetail } from '~/components/organisms/EventDetail';
import ResumeSelect from '~/components/organisms/ResumeSelect/ResumeSelect';
import { useGetEventDetail } from '~/queries/event/details/useGetEventDetail';
import { useGetMentorDetail } from '~/queries/user/details/useGetMentorDetail';

const EventDetailPage = () => {
  //TODO: 이벤트 리스트가 완성되면 "1" 지우기
  const { data: mentor } = useGetMentorDetail({ mentorId: '1' });
  const { data: event } = useGetEventDetail({ eventId: '1' });

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <Suspense fallback={<Spinner />}>
          <ResumeSelect onCancel={onClose} />
        </Suspense>
      </Modal>
      <Flex
        px={'0.56rem'}
        gap={'2rem'}
      >
        <MentorProfile
          mentor={mentor}
          event={event}
          onApply={onOpen}
        />
        <EventDetail
          mentor={mentor}
          event={event}
        />
      </Flex>
    </>
  );
};

export default EventDetailPage;
