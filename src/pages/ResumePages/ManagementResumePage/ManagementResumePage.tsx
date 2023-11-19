import { Box } from '@chakra-ui/react';
import { ResumeManagementTemplate } from '../../../components/templates/ResumeManagementTemplate';
import { Position } from '~/types/position';
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

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      <ResumeManagementTemplate resumes={resumes} />
    </Box>
  );
};

export default ManagementResumePage;
