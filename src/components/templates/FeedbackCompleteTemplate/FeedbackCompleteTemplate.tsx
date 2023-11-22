import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FeedbackCategoryDetails } from '~/components/organisms/FeedbackCategoryDetails';
import {
  ActivityDetails,
  AwardDetails,
  CareerDetails,
  LanguageDetails,
  ProjectDetails,
  TrainingDetails,
} from '~/components/organisms/ResumeDetails';
import { useGetSnapshotResume } from '~/queries/resume/details/useGetSnapshotResume';
import { useGetResumeFeedbacks } from '~/queries/resume/feedback/useGetResumeFeedbacks';

const FeedbackCompleteTemplate = () => {
  const { resumeId = '', eventId = '' } = useParams();
  const {
    data: { commentResponses, overallReview },
  } = useGetResumeFeedbacks({ resumeId, eventId });

  const { data: details } = useGetSnapshotResume({ resumeId });

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
              {details.careers && details.careers.length > 0 && (
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
                    arrayData={details.careers}
                    DetailsComponent={CareerDetails}
                    commentsData={commentResponses}
                  />
                </Box>
              )}
              {details.projects && details.projects.length > 0 && (
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
                    arrayData={details.projects}
                    DetailsComponent={ProjectDetails}
                    commentsData={commentResponses}
                  />
                </Box>
              )}
              {details.trainings && details.trainings.length > 0 && (
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
                    arrayData={details.trainings}
                    DetailsComponent={TrainingDetails}
                    commentsData={commentResponses}
                  />
                </Box>
              )}
              {details.certifications && details.certifications.length > 0 && (
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
                    arrayData={details.certifications}
                    DetailsComponent={AwardDetails}
                    commentsData={commentResponses}
                  />
                </Box>
              )}
              {details.foreignLanguages && details.foreignLanguages.length > 0 && (
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
                    arrayData={details.foreignLanguages}
                    DetailsComponent={LanguageDetails}
                    commentsData={commentResponses}
                  />
                </Box>
              )}
              {details.activities && details.activities.length > 0 && (
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
                    arrayData={details.activities}
                    DetailsComponent={ActivityDetails}
                    commentsData={commentResponses}
                  />
                </Box>
              )}
            </Flex>
          </Flex>
        </Flex>
      </BorderBox>
      <BorderBox hasShadow>
        <Text
          fontWeight={'600'}
          fontSize={'xl'}
          p={'0.5rem'}
        >
          총평
        </Text>
        <Divider my={'1rem'} />
        <Text p={'0.5rem'}>{overallReview}</Text>
      </BorderBox>
    </Flex>
  );
};

export default FeedbackCompleteTemplate;
