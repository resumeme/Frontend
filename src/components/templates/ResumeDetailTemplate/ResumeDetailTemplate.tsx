import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BorderBox } from '../../atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import { ReferenceLinkBox } from '~/components/molecules/ReferenceLinkBox';

/* NOTE
  전체 콘텐츠의 가로 길이 960px
  보더박스의 가로 길이 960px => 쉐도우 때문에 조금 줄여야 할 듯?
  보더박스 내부 콘텐츠의 가로 길이 872 (mx=44px)
 */

/* TODO
  1. 상단부
  - 이름 텍스트
  - 희망직무 태그
  - 기술스택 레이블, 태그
  - 전화번호?????
  - 참고 링크 박스
  - 자기소개

  2. 업무경험
  - 업무 경험 개별
    - 주요 업무
  3. 프로젝트
  - 프로젝트 개별 반복
  4. 교육
  - 교육 개별 반복
  5. 수상 및 경력
  6. 외국어
  7. 활동
  8. 추가 커스텀 블록


  추가 기능?
  - 표시 순서를 바꿀 수 있게 할 수 있는가?
    - 상태가 필요하고, 서버 데이터도 순서를 바꿔 보여줄 수 있는 플래그가 필요함
*/

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
          <Box
            width={'100%'}
            m={'auto'}
            borderBottom={'1px'}
            borderBottomColor={'gray.300'}
          />
          {/* NOTE LowerPart - 하단부 UI */}
          <Flex direction={'column'}>
            {/* NOTE LowerPart - 하단부 - 업무경험 UI */}
            <Box>
              <Box>
                <Text>업무경험</Text>
              </Box>
              <BorderBox p={10}>
                <Flex>
                  <Box width={'25%'}>기간 및 날짜 데이터</Box>
                  <Box>데이터 내용 (세부 구조 구체화)</Box>
                </Flex>
              </BorderBox>
            </Box>
          </Flex>
        </Flex>
      </BorderBox>
    </Flex>
  );
};

export default ResumeDetailTemplate;
