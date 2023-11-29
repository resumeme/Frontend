import { Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';
import { HiLink } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { deleteResumeCategoryBlock } from '~/api/resume/delete/deleteResumeCategoryBlock';
import { Label } from '~/components/atoms/Label';
import { EditDeleteOptionsButton } from '~/components/molecules/OptionsButton';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticDeleteCategory } from '~/queries/resume/useOptimisticDeleteCategory';
import { Project, ReadProject } from '~/types/project';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';

const ProjectDetails = ({
  data: {
    componentId,
    projectName,
    productionYear,
    teamMembers,
    skills,
    projectContent,
    projectUrl,
    team,
  },
  onEdit,
  isCurrentUser,
}: DetailsComponentProps<ReadProject>) => {
  const { resumeId = '' } = useParams();
  const blockId = componentId;
  const { mutate: deleteMutate } = useOptimisticDeleteCategory<Project, ReadProject>({
    mutationFn: deleteResumeCategoryBlock,
    TARGET_QUERY_KEY: categoryKeys.project(resumeId),
  });

  return (
    <Flex>
      <Flex flex={1}>
        <Flex direction={'column'}>
          <Flex
            justify={'start'}
            gap={2}
          >
            <Label
              bg={'gray.300'}
              color={'gray.700'}
              h={'fit-content'}
              py={0}
              fontWeight={'medium'}
            >
              {productionYear}
            </Label>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        mt={'1%'}
        flex={2}
        direction={'column'}
      >
        <Flex
          direction={'column'}
          width={'full'}
          gap={2}
        >
          <Flex
            gap={4}
            align={'flex-end'}
          >
            <Heading
              fontSize={'xl'}
              fontWeight={'bold'}
              color={'gray.800'}
            >
              {projectName}
            </Heading>
            {team !== null && team !== undefined && (
              <Label
                fontWeight={'semibold'}
                bg={team ? 'teal.500' : 'orange.500'}
                py={0}
              >
                {team ? '팀 프로젝트' : '개인 프로젝트'}
              </Label>
            )}
          </Flex>
          {team && (
            <Text
              fontWeight={'semibold'}
              color={'gray.800'}
            >
              {teamMembers}
            </Text>
          )}
          {skills?.every((skill) => skill !== '') && (
            <Flex
              pt={2}
              gap={2}
              flexWrap={'wrap'}
            >
              {skills?.map((skill, i) => (
                <Label
                  key={i}
                  width={'fit-content'}
                  bg={'gray.500'}
                  fontSize={'xs'}
                  py={0}
                  color={'gray.100'}
                  fontWeight={'medium'}
                >
                  {skill}
                </Label>
              ))}
            </Flex>
          )}
          {projectContent && <Text mt={5}>{projectContent}</Text>}
          {projectUrl && (
            <Flex
              mt={5}
              gap={3}
              align={'center'}
            >
              <Icon as={HiLink} />
              <Link
                isExternal
                href={projectUrl}
                fontSize={'sm'}
                color={'primary.900'}
              >
                {projectUrl}
              </Link>
            </Flex>
          )}
        </Flex>
      </Flex>
      {isCurrentUser && (
        <EditDeleteOptionsButton
          onEdit={onEdit}
          onDelete={() => deleteMutate({ resumeId, blockId })}
        />
      )}
    </Flex>
  );
};

export default ProjectDetails;
