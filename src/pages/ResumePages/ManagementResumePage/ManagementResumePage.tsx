import { Box } from '@chakra-ui/react';
import { ResumeManagementTemplate } from '../../../components/templates/ResumeManagementTemplate';
import FeedbackManagementTemplate from '~/components/templates/FeedbackManagementTemplate/FeedbackManagementTemplate';
import { Position } from '~/types/position';
import { ResumeStatus } from '~/types/resume/status';
// import { useGetManagementResumes } from '~/queries/resume/details/useGetManagementResumes';

const ManagementResumePage = () => {
  // const { data: resumes } = useGetManagementResumes();

  const resumes = [
    {
      id: 1,
      title: 'title1',
      modifiedAt: '2023-11-18T15:22:57.223387127',
      position: ['FRONT'] as Position[],
    },
    {
      id: 2,
      title: 'title2',
      modifiedAt: '2023-11-18T15:22:57.223405031',
      position: ['BACK'] as Position[],
    },
  ];

  const feedbackResumes = [
    {
      resumeId: 1,
      status: 'REOPEN' as ResumeStatus,
      title: '제목',
      mentorName: '김주승',
      startDate: '2023-11-18T15:23:01.249679309',
      endDate: '2023-11-18T16:23:01.249681292',
    },
    {
      resumeId: 1,
      status: 'OPEN' as ResumeStatus,
      title: '제목',
      mentorName: '김주승',
      startDate: '2023-11-18T15:23:01.249679309',
      endDate: '2023-11-18T16:23:01.249681292',
    },
    {
      resumeId: 1,
      status: 'CLOSE' as ResumeStatus,
      title: '제목',
      mentorName: '김주승',
      startDate: '2023-11-18T15:23:01.249679309',
      endDate: '2023-11-18T16:23:01.249681292',
    },
  ];

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      <ResumeManagementTemplate resumes={resumes} />
      <FeedbackManagementTemplate resumes={feedbackResumes} />
    </Box>
  );
};

export default ManagementResumePage;
