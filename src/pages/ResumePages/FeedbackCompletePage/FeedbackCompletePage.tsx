import { useParams } from 'react-router-dom';
import { useGetResumeFeedbacks } from '~/queries/resume/feedback/useGetResumeFeedbacks';

const FeedbackCompletePage = () => {
  const { resumeId = '', eventId = '' } = useParams();
  const { data } = useGetResumeFeedbacks({ resumeId, eventId });
  console.log('data', data);
  return <></>;
};

export default FeedbackCompletePage;
