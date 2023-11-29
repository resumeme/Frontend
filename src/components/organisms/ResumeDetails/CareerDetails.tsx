import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { deleteResumeCategoryBlock } from '~/api/resume/delete/deleteResumeCategoryBlock';
import { Label } from '~/components/atoms/Label';
import { EditDeleteOptionsButton } from '~/components/molecules/OptionsButton';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticDeleteCategory } from '~/queries/resume/useOptimisticDeleteCategory';
import { Career, ReadCareer } from '~/types/career';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';

const CareerDetails = ({
  data: {
    componentId,
    companyName,
    position,
    skills,
    duties,
    careerStartDate,
    endDate,
    careerContent,
    currentlyEmployed,
  },
  onEdit,
  isCurrentUser,
}: DetailsComponentProps<ReadCareer>) => {
  const { resumeId = '' } = useParams();
  const blockId = componentId;
  const { mutate: deleteMutate } = useOptimisticDeleteCategory<Career, ReadCareer>({
    mutationFn: deleteResumeCategoryBlock,
    TARGET_QUERY_KEY: categoryKeys.career(resumeId),
  });

  return (
    <Flex>
      <Flex flex={1}>
        <Flex direction={'column'}>
          <Flex
            justify={'start'}
            align={'center'}
            gap={2}
          >
            <Label
              bg={'gray.300'}
              color={'gray.700'}
              h={'fit-content'}
              py={0}
              fontWeight={'medium'}
            >
              {careerStartDate}
            </Label>
            <Text display={'inline-block'}>-</Text>
            <Label
              bg={'gray.300'}
              color={'gray.700'}
              py={0}
              fontWeight={'medium'}
            >
              {currentlyEmployed ? '재직중' : endDate}
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
          <Heading
            fontSize={'xl'}
            fontWeight={'bold'}
            color={'gray.800'}
          >
            {companyName}
          </Heading>
          <Text
            fontWeight={'semibold'}
            color={'gray.800'}
          >
            {position}
          </Text>
          <Flex
            direction={'column'}
            pl={1}
            gap={2}
          >
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
            {careerContent && <Text mt={5}>{careerContent}</Text>}
          </Flex>
        </Flex>
        {duties?.map((duty) => (
          <Box key={uuidv4()}>
            <Flex
              direction={'column'}
              mt={10}
            >
              <Text fontWeight={'bold'}>{duty.title}</Text>
            </Flex>
            <Flex>
              <Flex
                direction={'column'}
                gap={3}
              >
                <Text
                  fontSize={'xs'}
                  fontWeight={'regular'}
                  color={'gray.500'}
                >
                  {duty.startDate} - {duty.endDate}
                </Text>
                <Text>{duty.description}</Text>
              </Flex>
            </Flex>
          </Box>
        ))}
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

export default CareerDetails;
