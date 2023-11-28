import { Flex, useDisclosure } from '@chakra-ui/react';
import { Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '~/components/atoms/Spinner';
import { MentorProfile } from '~/components/molecules/MentorProfile';
import { Modal } from '~/components/molecules/Modal';
import { EventDetail } from '~/components/organisms/EventDetail';
import ResumeSelect from '~/components/organisms/ResumeSelect/ResumeSelect';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { useGetEventDetail } from '~/queries/event/details/useGetEventDetail';
import { useGetMentorDetail } from '~/queries/user/details/useGetMentorDetail';

const EventDetailPage = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  const { eventId = '' } = useParams();

  const { data: event } = useGetEventDetail({ eventId });
  const { data: mentor } = useGetMentorDetail({ mentorId: String(event.mentorId) });

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
          onApply={() => {
            user ? onOpen() : navigate(appPaths.signIn());
          }}
        />
        <EventDetail
          isEditable={user?.id === event.mentorId && event.status === 'READY'}
          mentor={mentor}
          event={event}
        />
      </Flex>
    </>
  );
};

export default EventDetailPage;
