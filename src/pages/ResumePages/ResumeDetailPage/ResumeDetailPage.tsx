import { useEffect } from 'react';
import { ResumeDetailTemplate } from '~/components/templates/ResumeDetailTemplate';

const ResumeDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ResumeDetailTemplate />;
};

export default ResumeDetailPage;
