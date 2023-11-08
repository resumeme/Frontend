import { Divider, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { HiLink } from 'react-icons/hi';
import { v4 as uuidv4 } from 'uuid';
import { Label } from '~/components/atoms/Label';
import { Project } from '~/types/project';

const ProjectDetails = ({ data }: { data: Project[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map(
        (
          {
            projectName,
            projectContent,
            projectUrl,
            productionYear,
            isTeam,
            teamMembers,
            skills,
          }: Project,
          i,
        ) => {
          return (
            <React.Fragment key={uuidv4()}>
              {i > 0 && (
                <Divider
                  key={i}
                  my={'3rem'}
                  borderColor={'gray.300'}
                />
              )}
              <Flex key={uuidv4()}>
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
                      {isTeam !== null && isTeam !== undefined && (
                        <Label
                          fontWeight={'semibold'}
                          bg={isTeam ? 'teal.500' : 'orange.500'}
                          py={0}
                        >
                          {isTeam ? '팀 프로젝트' : '개인 프로젝트'}
                        </Label>
                      )}
                    </Flex>
                    {isTeam !== null && isTeam !== undefined && (
                      <Text
                        fontWeight={'semibold'}
                        color={'gray.800'}
                      >
                        {isTeam ? teamMembers : '개인 프로젝트'}
                      </Text>
                    )}
                    {skills !== null && skills !== undefined && (
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
                    {projectContent !== null && projectContent !== undefined && (
                      <Text mt={5}>{projectContent}</Text>
                    )}
                    {projectUrl !== null && projectUrl !== undefined && (
                      <Flex
                        mt={5}
                        gap={3}
                        align={'center'}
                      >
                        <Icon as={HiLink} />
                        <Link
                          isExternal
                          fontSize={'sm'}
                          color={'primary.900'}
                        >
                          {projectUrl}
                        </Link>
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </React.Fragment>
          );
        },
      )}
    </>
  );
};

export default ProjectDetails;
