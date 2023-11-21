import { Box, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { ResumeManagementTemplate } from '../../../components/templates/ResumeManagementTemplate';
import { ResumeNavigator } from '~/components/organisms/ResumeNavigator';
import FeedbackManagementTemplate from '~/components/templates/FeedbackManagementTemplate/FeedbackManagementTemplate';
import useUser from '~/hooks/useUser';
import { useGetFeedbackResumes } from '~/queries/resume/useGetFeedbackResumes';
import { useGetMyResumes } from '~/queries/resume/useGetMyResumes';

export type Step = 'MY_RESUME' | 'FEEDBACK';

const ManagementResumePage = () => {
  const { user } = useUser();

  const [step, setStep] = useState<Step>('MY_RESUME');

  const { data: myResumes } = useGetMyResumes();
  const { data: feedbackResumes } = useGetFeedbackResumes({ menteeId: user?.id || 0 });

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      <Heading
        fontSize={'1.75rem'}
        color={'gray.800'}
        fontWeight={700}
        mb={'1.25rem'}
      >
        이력서 관리
      </Heading>
      <ResumeNavigator
        pageStep={step}
        onStep={(step) => setStep(step)}
      />
      {step === 'MY_RESUME' && <ResumeManagementTemplate resumes={myResumes} />}
      {step === 'FEEDBACK' && <FeedbackManagementTemplate resumes={feedbackResumes} />}
    </Box>
  );
};

export default ManagementResumePage;
