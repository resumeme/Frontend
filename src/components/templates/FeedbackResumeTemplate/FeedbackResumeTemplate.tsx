import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { BorderBox } from '../../atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import { ReferenceLinkBox } from '~/components/molecules/ReferenceLinkBox';
import { FeedbackCategoryDetails } from '~/components/organisms/FeedbackCategoryDetails';
import {
  ActivityDetails,
  AwardDetails,
  CareerDetails,
  LanguageDetails,
  ProjectDetails,
  TrainingDetails,
} from '~/components/organisms/ResumeDetails';
import useUser from '~/hooks/useUser';
import { useGetResumeBasic } from '~/queries/resume/details/useGetResumeBasic';
import { useGetResumeDetails } from '~/queries/resume/details/useGetResumeDetails';
import { useGetResumeFeedbacks } from '~/queries/resume/feedback/useGetResumeFeedbacks';
import { ReferenceLink } from '~/types/referenceLink';
import { formatPhoneNumber } from '~/utils/formatPhoneNumber';

const FeedbackResumeTemplate = () => {
  const { resumeId = '', eventId = '' } = useParams();
  const { data: details } = useGetResumeDetails({ resumeId });
  const { data: basicInfo } = useGetResumeBasic({ resumeId });
  const {
    data: { commentResponses },
  } = useGetResumeFeedbacks({ resumeId, eventId });

  const { user: mentorData } = useUser();

  const data = {
    basic: basicInfo,
    links: details?.links,
    career: details?.careers,
    training: details?.trainings,
    project: details?.projects,
    activity: details?.activities,
    award: details?.certifications,
    language: details?.['foreignLanguages'],
  };

  return (
    <Flex
      direction={'column'}
      width={'full'}
      gap={6}
    >
      <Flex
        mx={'1rem'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          color={'gray.800'}
        >
          {data.basic?.title}
        </Text>
        <Tooltip
          hasArrow
          placement="left"
          fontSize={'xs'}
          label="작업이 끝나면 화면 우측에서 피드백 완료 버튼을 눌러주세요.
          피드백이 완료되기 전에는 피드백 신청자에게 피드백 내용이 보여지지 않습니다."
        >
          <Box>
            <Label bg={'highlight.900'}>완료되지 않음</Label>
          </Box>
        </Tooltip>
      </Flex>
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
          <Flex justify={'space-between'}>
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
                  {data.basic?.ownerInfo?.name}
                </Text>
                {data.basic?.position && (
                  <Label
                    width={'fit-content'}
                    fontSize={'sm'}
                    bg="green.500"
                    color={'gray.100'}
                    px={5}
                  >
                    {data.basic.position}
                  </Label>
                )}
                {data.basic?.ownerInfo && data.basic.ownerInfo.phoneNumber && (
                  <Flex
                    gap={4}
                    align={'center'}
                  >
                    <PhoneIcon />
                    <Text>{formatPhoneNumber(data.basic?.ownerInfo.phoneNumber)}</Text>
                  </Flex>
                )}
              </Flex>
              {data.links && data.links?.length > 0 && (
                <Flex
                  direction={'column'}
                  align={'start'}
                  gap={2}
                  width={'100%'}
                >
                  {data.links?.map((link: ReferenceLink, index: number) => (
                    <ReferenceLinkBox
                      key={index}
                      linkType={link.linkType}
                      url={link.url}
                    />
                  ))}
                </Flex>
              )}
            </Flex>
            <Flex
              className="Head2"
              direction={'column'}
              align={'flex-end'}
              gap={10}
              mt={'3%'}
              flex={1}
            >
              {data.basic?.skills && data.basic.skills.length > 0 && (
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
                    {data.basic.skills.map(
                      (skill: string, index: number) =>
                        skill !== '' && (
                          <Label
                            key={index}
                            bg={'gray.300'}
                            color={'gray.700'}
                            fontWeight={'medium'}
                          >
                            {skill}
                          </Label>
                        ),
                    )}
                  </Flex>
                </Flex>
              )}
            </Flex>
          </Flex>
          <Flex justify={'center'}>
            {data.basic?.introduce && (
              <BorderBox
                width={'100%'}
                textAlign={'center'}
                whiteSpace={'break-spaces'}
                wordBreak={'keep-all'}
                fontSize={'sm'}
                fontWeight={'medium'}
              >
                <Text>{data.basic?.introduce}</Text>
              </BorderBox>
            )}
          </Flex>
          <Flex
            direction={'column'}
            gap={10}
          >
            <Flex
              direction={'column'}
              gap={'4rem'}
            >
              {data.career && data.career.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    업무경험
                  </Text>
                  <FeedbackCategoryDetails
                    arrayData={data.career}
                    commentsData={commentResponses}
                    DetailsComponent={CareerDetails}
                    isAuthorizedMentor
                    isFeedbackPage
                    mentorData={mentorData!}
                  />
                </Box>
              )}
              {data.project && data.project.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    프로젝트
                  </Text>
                  <FeedbackCategoryDetails
                    commentsData={commentResponses}
                    arrayData={data.project}
                    DetailsComponent={ProjectDetails}
                    isAuthorizedMentor
                    isFeedbackPage
                    mentorData={mentorData!}
                  />
                </Box>
              )}
              {data.training && data.training.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    교육
                  </Text>
                  <FeedbackCategoryDetails
                    arrayData={data.training}
                    commentsData={commentResponses}
                    DetailsComponent={TrainingDetails}
                    isAuthorizedMentor
                    isFeedbackPage
                    mentorData={mentorData!}
                  />
                </Box>
              )}
              {data.award && data.award.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    수상 및 자격증
                  </Text>
                  <FeedbackCategoryDetails
                    arrayData={data.award}
                    commentsData={commentResponses}
                    DetailsComponent={AwardDetails}
                    isAuthorizedMentor
                    isFeedbackPage
                    mentorData={mentorData!}
                  />
                </Box>
              )}
              {data.language && data.language.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    외국어
                  </Text>
                  <FeedbackCategoryDetails
                    arrayData={data.language}
                    commentsData={commentResponses}
                    DetailsComponent={LanguageDetails}
                    isAuthorizedMentor
                    isFeedbackPage
                    mentorData={mentorData!}
                  />
                </Box>
              )}
              {data.activity && data.activity.length > 0 && (
                <Box>
                  <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                    mb={5}
                  >
                    활동
                  </Text>
                  <FeedbackCategoryDetails
                    arrayData={data.activity}
                    commentsData={commentResponses}
                    DetailsComponent={ActivityDetails}
                    isAuthorizedMentor
                    isFeedbackPage
                    mentorData={mentorData!}
                  />
                </Box>
              )}
            </Flex>
          </Flex>
        </Flex>
      </BorderBox>
    </Flex>
  );
};

export default FeedbackResumeTemplate;
