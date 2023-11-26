import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { BorderBox } from '../../atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import EditDeleteOptionsButton from '~/components/molecules/OptionsButton/EditDeleteOptionsButton';
import { ReferenceLinkBox } from '~/components/molecules/ReferenceLinkBox';
import { ResumeCategoryDetails } from '~/components/organisms/ResumeCategoryDetails';
import {
  ActivityDetails,
  AwardDetails,
  CareerDetails,
  LanguageDetails,
  ProjectDetails,
  TrainingDetails,
} from '~/components/organisms/ResumeDetails';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { useDeleteResume } from '~/queries/resume/delete/useDeleteResume';
import { useGetResumeBasic } from '~/queries/resume/details/useGetResumeBasic';
import { useGetResumeDetails } from '~/queries/resume/details/useGetResumeDetails';
import { ReadReferenceLink } from '~/types/referenceLink';
import { formatPhoneNumber } from '~/utils/formatPhoneNumber';

const ResumeDetailTemplate = () => {
  const { resumeId = '' } = useParams();

  const { data: details } = useGetResumeDetails({ resumeId });
  const { data: basicInfo } = useGetResumeBasic({ resumeId });
  const { mutate: deleteResumeMutate } = useDeleteResume();

  const navigate = useNavigate();

  const resumeAuthorId = basicInfo.ownerInfo?.id;
  const { user } = useUser();
  const isCurrentUser = resumeAuthorId === user?.id;

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
    /* 전체 레이아웃 */
    <Flex
      direction={'column'}
      width={'960px'}
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
        {isCurrentUser && (
          <EditDeleteOptionsButton
            onEdit={() => navigate(appPaths.resumeEdit(parseInt(resumeId)))}
            onDelete={() =>
              deleteResumeMutate(
                { resumeId },
                {
                  onSuccess: () => navigate(appPaths.managementResume()),
                },
              )
            }
          />
        )}
      </Flex>
      <BorderBox
        id="resume-detail"
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
                  {data.links?.map((link: ReadReferenceLink) => (
                    <ReferenceLinkBox
                      key={link.componentId}
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
                    {data.basic.skills.map((skill: string, index: number) => (
                      <Label
                        key={index}
                        bg={'gray.300'}
                        color={'gray.700'}
                        fontWeight={'medium'}
                      >
                        {skill}
                      </Label>
                    ))}
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
                  <ResumeCategoryDetails
                    arrayData={data.career}
                    DetailsComponent={CareerDetails}
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
                  <ResumeCategoryDetails
                    arrayData={data.project}
                    DetailsComponent={ProjectDetails}
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
                  <ResumeCategoryDetails
                    arrayData={data.training}
                    DetailsComponent={TrainingDetails}
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
                  <ResumeCategoryDetails
                    arrayData={data.award}
                    DetailsComponent={AwardDetails}
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
                  <ResumeCategoryDetails
                    arrayData={data.language}
                    DetailsComponent={LanguageDetails}
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
                  <ResumeCategoryDetails
                    arrayData={data.activity}
                    DetailsComponent={ActivityDetails}
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

export default ResumeDetailTemplate;
