import { Box, Flex } from '@chakra-ui/react';
import RemoteControlPannel from '~/components/organisms/RemoteControlPannel/RemoteControlPannel';
import { FeedbackResumeTemplate } from '~/components/templates/FeedbackResumeTemplate';

const FeedbackResumePage = () => {
  /* FIXME
    Mock up data => Real data로 API 연결할 것
  */

  const data = {
    basic: {
      title: '이력서 제목이 이렇게 보여집니다.',
      position: '백엔드',
      skills: ['스프링', '자바'],
      introduce: '안녕하세요',
      originResumeId: 2,
      ownerInfo: {
        id: 1,
        name: '김백둥',
        phoneNumber: '01022223722',
      },
    },

    links: [
      {
        componentId: 1,
        originComponentId: 2,
        createdDate: '2023-11-20T05:16:31.908837957',
        linkType: 'GITHUB',
        url: 'https://github.com',
        reflectFeedback: false,
      },
    ],

    career: [
      {
        componentId: 1,
        originComponentId: 2,
        createdDate: '2023-11-20T05:16:31.83630025',
        companyName: 'company name',
        position: 'BACK',
        skills: ['java', 'spring'],
        duties: [
          {
            title: 'description',
            startDate: '2023-11-20',
            endDate: '2024-11-20',
            description: 'description',
          },
        ],
        careerStartDate: '2023-11-20',
        endDate: '2024-11-20',
        careerContent: 'content',
        currentlyEmployed: false,
        reflectFeedback: false,
      },
    ],
    training: [
      {
        componentId: 1,
        originComponentId: 2,
        createdDate: '2023-11-20T05:16:31.949325821',
        organization: '데브대',
        major: '컴퓨터공학과',
        degree: '학사 학위',
        admissionDate: '2018-03-01',
        graduationDate: '2022-02-28',
        gpa: 4.0,
        maxGpa: 4.5,
        explanation: '성적 우수',
        reflectFeedback: false,
      },
    ],
    project: [
      {
        componentId: 1,
        originComponentId: 2,
        createdDate: '2023-11-20T05:16:31.926874222',
        projectName: '프로젝트',
        productionYear: 2023,
        teamMembers: 'member1, member2, member3',
        skills: ['java', 'Spring'],
        projectContent: 'content',
        projectUrl: 'https://example.com',
        team: true,
        reflectFeedback: false,
      },
    ],
    activity: [
      {
        componentId: 1,
        originComponentId: 2,
        createdDate: '2023-11-20T05:16:31.811129838',
        activityName: '활동1',
        startDate: '2023-11-20',
        endDate: '2023-11-25',
        inProgress: false,
        link: 'https://example.com',
        description: '활동 설명',
        reflectFeedback: false,
      },
    ],
    award: [
      {
        componentId: 1,
        originComponentId: 2,
        createdDate: '2023-11-20T05:16:31.866367506',
        certificationTitle: '인증서',
        acquisitionDate: '2023-10-01',
        issuingAuthority: '발급기관',
        link: 'https://example.com',
        description: '설명',
        reflectFeedback: false,
      },
    ],
    language: [
      {
        componentId: 1,
        originComponentId: 2,
        createdDate: '2023-11-20T05:16:31.889109409',
        language: 'English',
        examName: 'TOEIC',
        scoreOrGrade: '900',
        reflectFeedback: false,
      },
    ],
  };

  return (
    <Flex w={'full'}>
      <Box w={'900px'}>
        <FeedbackResumeTemplate {...data} />
      </Box>
      <RemoteControlPannel />
    </Flex>
  );
};

export default FeedbackResumePage;
