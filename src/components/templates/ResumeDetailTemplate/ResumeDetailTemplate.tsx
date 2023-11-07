import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import { BorderBox } from '../../atoms/BorderBox';

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

const ResumeDetailTemplate = () => {
  return (
    <Flex
      direction={'column'}
      width={'960px'}
      gap={6}
    >
      <Box mx={'1rem'}>
        <Text>이력서 제목</Text>
      </Box>
      <BorderBox
        hasShadow
        border={'none'}
        bg={'gray.100'}
        height={'full'}
        mx={'1rem'}
      >
        {/* 상단부 */}
        <Flex justify={'space-between'}>
          {/* 상단부 - 이름, 직무, 보유 기술스택 */}
          <Flex
            className="Head1"
            direction={'column'}
          >
            <Text>이름</Text>
            <Tag>프론트엔드</Tag>
            <Flex direction={'column'}>
              <Text>기술 스택</Text>
              <Box>
                <Tag>자바스크립트</Tag>
                <Tag>자바스크립트</Tag>
              </Box>
            </Flex>
          </Flex>
          {/* 상단부 - 전화번호, 참고링크, 자기소개 */}
          <Flex className="Head2">
            <Flex>
              <PhoneIcon />
              <Text>010-0000-0000</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction={'column'}>
          {/* 카테고리 블록 */}
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
      </BorderBox>
    </Flex>
  );
};

export default ResumeDetailTemplate;
