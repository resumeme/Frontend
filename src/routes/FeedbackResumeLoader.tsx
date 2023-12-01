import { useToast } from '@chakra-ui/react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { useGetManagementEvents } from '~/queries/event/details/useGetManagementEvents';

const FeedbackResumeLoader = () => {
  const { user } = useUser();
  const { eventId = '', resumeId = '' } = useParams();
  const { data: events } = useGetManagementEvents({ role: user?.role, userId: Number(user?.id) });

  const toast = useToast();

  if (
    events &&
    events
      .find((event) => event.info.id === Number(eventId))
      ?.resumes.find((resume) => resume.resumeId === Number(resumeId))?.progressStatus !== 'APPLY'
  ) {
    toast.closeAll();
    toast({
      description: '이미 피드백과 총평을 완료했어요.',
      status: 'info',
    });
    return (
      <Navigate
        to={appPaths.myPage()}
        replace
      />
    );
  }

  return <Outlet />;
};

export { FeedbackResumeLoader };
