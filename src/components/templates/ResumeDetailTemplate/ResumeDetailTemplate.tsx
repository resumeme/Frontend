import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BorderBox } from '../../atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import { ReferenceLinkBox } from '~/components/molecules/ReferenceLinkBox';
import { CareerDetails } from '~/components/organisms/ResumeDetails';

const DUMMY_DATA = {
  userInfo: {
    name: '신동호',
    phoneNumber: '010-0000-0000',
  },
  resume: {
    id: '1234',
    resumeTitle: '사용자를 생각하는 프론트엔드 개발자, 신동호입니다.',
  },
  basicInfo: {
    position: '프론트엔드 개발자',
    skills: ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'Python', 'Git', 'CSS', 'HTML5'],
    introduce:
      '안녕하세요. 사용자를 생각하는 프론트엔드 개발자 신동호입니다. 100글자를 채울 필요는 없지만, 일단 길게 써야 테스트할 수 있습니다.',
  },
  referenceLinks: [
    {
      linkType: 'github',
      url: 'https://github.com/khakhiD',
    },
    {
      linkType: 'blog',
      url: 'https://khakhidiggin-log.vercel.app',
    },
  ],
};

const CAREER_DUMMY_DATA = [
  {
    companyName: '아몬드빼빼로',
    position: '주니어 프론트엔드 개발자',
    isCurrentlyEmployed: true,
    skills: ['TypeScript', 'React.js', 'Git', 'Github', 'ChakraUI', 'react-hook-form', 'vite'],
    duties: [
      {
        title: '중요한 업무업무',
        description: '중요한 업무를 했다 와 힘들었따',
        startDate: '2000-00-00',
        endDate: '2000-00-01',
      },
      {
        title:
          '이력서 상세 페이지 UI 개발 근데 이게 엄청 길어지면 어떡꼐 해야데이엄? 더 길게 한다 더 길게',
        description: '중요한 업무를 했다 와 힘들었따',
        startDate: '2000-00-00',
        endDate: '2000-00-01',
      },
      {
        title: '주요 업무 (ex. 프로그래머스 데브코스 수강 페이지 신설)',
        description: '중요한 업무를 했다 와 힘들었따',
        startDate: '2000-00-00',
        endDate: '2000-00-01',
      },
    ],
    careerStartDate: '2000-00-00',
    endDate: '2000-00-01',
    careerContent: '어쩌구 저쩌구',
  },
  {
    companyName: '아몬드빼빼로',
    position: '주니어 프론트엔드 개발자',
    isCurrentlyEmployed: true,
    skills: ['TypeScript', 'React.js', 'Git', 'Github', 'ChakraUI', 'react-hook-form', 'vite'],
    duties: [
      {
        title: '중요한 업무업무',
        description: '중요한 업무를 했다 와 힘들었따',
        startDate: '2000-00-00',
        endDate: '2000-00-01',
      },
      {
        title: '이력서 상세 페이지 UI 개발 근데 이게 엄청 길어지면 어떡꼐 할려궁?',
        description: '중요한 업무를 했다 와 힘들었따',
        startDate: '2000-00-00',
        endDate: '2000-00-01',
      },
      {
        title: '주요 업무 (ex. 프로그래머스 데브코스 수강 페이지 신설)',
        description: '중요한 업무를 했다 와 힘들었따',
        startDate: '2000-00-00',
        endDate: '2000-00-01',
      },
    ],
    careerStartDate: '2000-00-00',
    endDate: '2000-00-01',
    careerContent: '어쩌구 저쩌구',
  },
];

const ResumeDetailTemplate = () => {
  return (
    /* 전체 레이아웃 */
    <Flex
      direction={'column'}
      width={'960px'}
      gap={6}
    >
      {/* NOTE ResumeTitle - 이력서 제목 */}
      <Box mx={'1rem'}>
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          color={'gray.800'}
        >
          {DUMMY_DATA.resume.resumeTitle}
        </Text>
      </Box>
      {/* NOTE UpperPart 시작 */}
      <BorderBox
        hasShadow
        border={'none'}
        bg={'gray.100'}
        height={'full'}
        mx={'1rem'}
        px={10}
        py={10}
      >
        <Flex
          direction={'column'}
          gap={12}
        >
          {/* NOTE UpperPart - 상단부 UI */}
          <Flex justify={'space-between'}>
            {/* NOTE UpperPart - 상단부 왼쪽 (이름, 직무, 참고링크) */}
            <Flex
              className="Head1"
              direction={'column'}
              flex={2}
            >
              <Flex
                direction={'column'}
                mb={10}
                gap={3}
              >
                <Text
                  fontSize={'4xl'}
                  fontWeight={'bold'}
                  color={'gray.900'}
                >
                  {DUMMY_DATA.userInfo.name}
                </Text>
                <Label
                  width={'fit-content'}
                  fontSize={'sm'}
                  bg="green.500"
                  color={'gray.100'}
                  px={5}
                >
                  {DUMMY_DATA.basicInfo.position}
                </Label>
                <Flex
                  gap={4}
                  align={'center'}
                >
                  <PhoneIcon />
                  <Text>{DUMMY_DATA.userInfo.phoneNumber}</Text>
                </Flex>
              </Flex>
              <Flex
                direction={'column'}
                align={'start'}
                gap={2}
                width={'100%'}
              >
                {/* FIXME type 관련 에러가 ReferenceLinkBox에서 발생! */}
                {DUMMY_DATA?.referenceLinks.map((link, i) => (
                  <ReferenceLinkBox
                    key={i}
                    type="github"
                    url={link.url}
                  />
                ))}
              </Flex>
            </Flex>
            {/* NOTE UpperPart - 상단부 오른쪽 (전화번호, 기술스택) */}
            <Flex
              className="Head2"
              direction={'column'}
              align={'flex-end'}
              gap={10}
              mt={'3%'}
              flex={1}
            >
              <Flex
                direction={'column'}
                align={'flex-end'}
                gap={3}
              >
                <Text
                  fontSize={'lg'}
                  fontWeight={'bold'}
                  color={'gray.800'}
                >
                  보유 기술
                </Text>
                <Flex
                  gap={2}
                  pl={1}
                  justify={'flex-end'}
                  flexWrap={'wrap'}
                >
                  {DUMMY_DATA.basicInfo.skills?.map((skill, i) => (
                    <Label
                      key={i}
                      bg={'gray.300'}
                      color={'gray.700'}
                      fontWeight={'medium'}
                    >
                      {skill}
                    </Label>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex justify={'center'}>
            <BorderBox
              width={'100%'}
              textAlign={'center'}
              whiteSpace={'break-spaces'}
              wordBreak={'keep-all'}
              fontSize={'sm'}
              fontWeight={'medium'}
            >
              <Text>{DUMMY_DATA.basicInfo.introduce}</Text>
            </BorderBox>
          </Flex>
          {/* NOTE LowerPart - 하단부 UI */}
          <Flex
            direction={'column'}
            gap={10}
          >
            {/* NOTE LowerPart - 하단부 - 업무경험 UI */}
            <Flex
              direction={'column'}
              gap={1}
            >
              <Box>
                <Text
                  fontSize={'2xl'}
                  fontWeight={'bold'}
                  color={'gray.800'}
                  mb={5}
                >
                  업무경험
                </Text>
                <BorderBox
                  w={'100%'}
                  p={7}
                  gap={10}
                >
                  <CareerDetails data={CAREER_DUMMY_DATA} />
                </BorderBox>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </BorderBox>
    </Flex>
  );
};

export default ResumeDetailTemplate;
