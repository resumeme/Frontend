import { Box, Flex, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { DUMMY_DATA } from '~/api/resume/details/getSnapshotResume';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FeedbackResumeDetails } from '~/components/organisms/FeedbackResumeDetails';
import {
  ActivityDetails,
  AwardDetails,
  CareerDetails,
  LanguageDetails,
  ProjectDetails,
  TrainingDetails,
} from '~/components/organisms/ResumeDetails';
import { useGetResumeFeedbacks } from '~/queries/resume/feedback/useGetResumeFeedbacks';

const FeedbackCompleteTemplate = () => {
  const { resumeId = '', eventId = '' } = useParams();
  const { data: commentsData } = useGetResumeFeedbacks({ resumeId, eventId });

  const details = DUMMY_DATA;

  const data = {
    career: details?.careers,
    training: details?.trainings,
    project: details?.projects,
    activity: details?.activities,
    award: details?.certifications,
    language: details?.['foreign-languages'],
  };
  return (
    <Flex
      direction={'column'}
      width={'960px'}
      gap={6}
    >
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
                  <FeedbackResumeDetails
                    arrayData={data.career}
                    DetailsComponent={CareerDetails}
                    commentsData={commentsData}
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
                  <FeedbackResumeDetails
                    arrayData={data.project}
                    DetailsComponent={ProjectDetails}
                    commentsData={commentsData}
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
                  <FeedbackResumeDetails
                    arrayData={data.training}
                    DetailsComponent={TrainingDetails}
                    commentsData={commentsData}
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
                  <FeedbackResumeDetails
                    arrayData={data.award}
                    DetailsComponent={AwardDetails}
                    commentsData={commentsData}
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
                  <FeedbackResumeDetails
                    arrayData={data.language}
                    DetailsComponent={LanguageDetails}
                    commentsData={commentsData}
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
                  <FeedbackResumeDetails
                    arrayData={data.activity}
                    DetailsComponent={ActivityDetails}
                    commentsData={commentsData}
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

export default FeedbackCompleteTemplate;
