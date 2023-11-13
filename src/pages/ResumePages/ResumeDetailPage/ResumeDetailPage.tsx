import { useParams } from 'react-router-dom';
import { ResumeDetailTemplate } from '~/components/templates/ResumeDetailTemplate';
import {
  useGetResumeActivities,
  useGetResumeAward,
  useGetResumeCareer,
  useGetResumeLanguage,
  useGetResumeProject,
  useGetResumeTraining,
} from '~/queries/resume/details';

const ResumeDetailPage = () => {
  const { id: resumeId } = useParams() as { id: string };

  const data = {
    career: useGetResumeCareer({ resumeId }),
    training: useGetResumeTraining({ resumeId }),
    language: useGetResumeLanguage({ resumeId }),
    project: useGetResumeProject({ resumeId }),
    activity: useGetResumeActivities({ resumeId }),
    award: useGetResumeAward({ resumeId }),
  };

  return <ResumeDetailTemplate data={data} />;
};

export default ResumeDetailPage;
