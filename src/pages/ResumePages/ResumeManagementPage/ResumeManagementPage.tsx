import { Box } from '@chakra-ui/react';
import { ResumeManagementTemplate } from '../../../components/templates/ResumeManagementTemplate';
import { Position } from '~/types/position';

const ResumeManagementPage = () => {
  const DUMY_DATA = [
    {
      resumeInfo: {
        id: 1,
        title: 'title1',
      },
      events: [
        {
          eventInfo: {
            eventId: 1,
            title: '제목',
            endDate: '2023-11-15T09:36:59.665972804',
            status: 'OPEN',
            positions: ['BACK', 'FRONT'] as Position[],
          },
          mentorInfo: {
            mentorId: 1,
            nickname: '주승멘토',
            imageUrl: 'profile.png',
          },
        },
        {
          eventInfo: {
            eventId: 2,
            title: '제목',
            endDate: '2023-11-15T09:36:59.665972804',
            status: 'OPEN',
            positions: ['DEVOPS'] as Position[],
          },
          mentorInfo: {
            mentorId: 2,
            nickname: '기안멘토',
            imageUrl: 'profile.png',
          },
        },
      ],
    },
    {
      resumeInfo: {
        id: 1,
        title: 'title1',
      },
      events: [],
    },
  ];

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      <ResumeManagementTemplate resumes={DUMY_DATA} />
    </Box>
  );
};

export default ResumeManagementPage;
