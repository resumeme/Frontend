import { Flex, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Project } from '~/types/project';

const ProjectDetails = ({ data }: { data: Project[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map((Project: Project) => {
        return (
          <BorderBox
            key={uuidv4()}
            w={'100%'}
          >
            <Flex direction={'column'}>
              <Text as={'span'}>{Project.projectName}</Text>
              <Text as={'span'}>{Project.productionYear}</Text>
              <Text as={'span'}>{Project.projectContent}</Text>
              <Text as={'span'}>{Project.projectUrl}</Text>
              <Text as={'span'}>{Project.skills}</Text>
              <Text as={'span'}>{Project.teamMembers}</Text>
            </Flex>
          </BorderBox>
        );
      })}
    </>
  );
};

export default ProjectDetails;
