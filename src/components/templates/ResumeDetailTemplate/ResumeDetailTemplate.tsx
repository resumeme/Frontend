import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { data as mockData } from './ResumeDetail.const';
import { BorderBox } from '../../atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import { ReferenceLinkBox } from '~/components/molecules/ReferenceLinkBox';
import {
  ActivityDetails,
  AwardDetails,
  CareerDetails,
  LanguageDetails,
  ProjectDetails,
  TrainingDetails,
} from '~/components/organisms/ResumeDetails';
import {
  useGetResumeCareer,
  useGetResumeTraining,
  useGetResumeLanguage,
  useGetResumeProject,
  useGetResumeActivities,
  useGetResumeAward,
} from '~/queries/resume/details';
import { useGetResumeReferenceLinks } from '~/queries/resume/details/useGetResumeReferenceLinks';

const ResumeDetailTemplate = () => {
  const { id: resumeId } = useParams() as { id: string };
  const { data: careersData } = useGetResumeCareer({ resumeId });
  const { data: trainingsData } = useGetResumeTraining({ resumeId });
  const { data: languageData } = useGetResumeLanguage({ resumeId });
  const { data: projectData } = useGetResumeProject({ resumeId });
  const { data: activitiesData } = useGetResumeActivities({
    resumeId,
  });
  const { data: awardData } = useGetResumeAward({ resumeId });
  const { data: referenceLinksData } = useGetResumeReferenceLinks({ resumeId});

  console.log('reflinks:', referenceLinksData)

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
          {mockData.info.resume.resumeTitle}
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
                  {mockData.info.userInfo.name}
                </Text>
                <Label
                  width={'fit-content'}
                  fontSize={'sm'}
                  bg="green.500"
                  color={'gray.100'}
                  px={5}
                >
                  {mockData.info.basicInfo.position}
                </Label>
                <Flex
                  gap={4}
                  align={'center'}
                >
                  <PhoneIcon />
                  <Text>{mockData.info.userInfo.phoneNumber}</Text>
                </Flex>
              </Flex>
              <Flex
                direction={'column'}
                align={'start'}
                gap={2}
                width={'100%'}
              >
                {/* FIXME type 관련 에러가 ReferenceLinkBox에서 발생! */}
                {referenceLinksData?.map((link, index) => (
                  <ReferenceLinkBox
                    key={index}
                    type={link.linkType}
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
                  {mockData.info.basicInfo.skills?.map((skill, i) => (
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
              <Text>{mockData.info.basicInfo.introduce}</Text>
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
              gap={'4rem'}
            >
              {careersData && careersData.length > 0 && (
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
                    px={7}
                    py={10}
                  >
                    <CareerDetails data={careersData} />
                  </BorderBox>
                </Box>
              )}
              {projectData && projectData.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    프로젝트
                  </Text>
                  <BorderBox
                    w={'100%'}
                    px={7}
                    py={10}
                  >
                    <ProjectDetails data={projectData} />
                  </BorderBox>
                </Box>
              )}
              {trainingsData && trainingsData.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    교육
                  </Text>
                  <BorderBox
                    w={'100%'}
                    p={7}
                    gap={10}
                  >
                    <TrainingDetails data={trainingsData} />
                  </BorderBox>
                </Box>,
              )}
              {awardData && awardData.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    수상 및 자격
                  </Text>
                  <BorderBox
                    w={'100%'}
                    p={7}
                    gap={10}
                  >
                    <AwardDetails data={awardData} />
                  </BorderBox>
                </Box>
              )}
              {activitiesData && activitiesData.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    활동
                  </Text>
                  <BorderBox
                    w={'100%'}
                    px={7}
                    py={10}
                  >
                    <ActivityDetails data={activitiesData} />
                  </BorderBox>
                </Box>
              )}
              {languageData && languageData.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    외국어
                  </Text>
                  <BorderBox
                    w={'100%'}
                    px={7}
                    py={10}
                  >
                    <LanguageDetails data={languageData} />
                  </BorderBox>
                </Box>
              )}
            </Flex>
          </Flex>
        </Flex>
      </BorderBox>
    </Flex>
  );
};

export default ResumeDetailTemplate;
