import { Flex, useDisclosure } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
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
import { eventKeys } from '~/queries/event/eventKeys.const';
import usePostEventApply from '~/queries/event/usePostEventApply';
import { useGetMentorDetail } from '~/queries/user/details/useGetMentorDetail';
import { userKeys } from '~/queries/user/userKeys';

const EventDetailPage = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  const { eventId = '' } = useParams();

  const { data: event } = useGetEventDetail({ eventId });
  const { data: mentor } = useGetMentorDetail({ mentorId: String(event.mentorId) });
  const { mutate: postEventApplyMutate } = usePostEventApply();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <Suspense fallback={<Spinner />}>
          <ResumeSelect
            onCancel={onClose}
            onSubmit={({ resumeId }) => {
              postEventApplyMutate(
                { resumeId: parseInt(resumeId), eventId },
                {
                  onSettled: () => {
                    onClose();
                    queryClient.refetchQueries({ queryKey: eventKeys.getEventDetail(eventId) });
                    queryClient.refetchQueries({ queryKey: userKeys.isAppliedEvent(eventId) });
                  },
                },
              );
            }}
          />
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
