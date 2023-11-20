import { Divider, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { deleteResumeCategoryBlock } from '~/api/resume/delete/deleteResumeCategoryBlock';
import { Label } from '~/components/atoms/Label';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { EditDeleteOptionsButton } from '~/components/molecules/OptionsButton';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticDeleteCategory } from '~/queries/resume/useOptimisticDeleteCategory';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';
import { Training } from '~/types/training';

const TraningDetails = ({
  data: {
    componentId,
    organization,
    major,
    degree,
    admissionDate,
    graduationDate,
    gpa,
    maxGpa,
    explanation,
  },
  onEdit,
  isCurrentUser,
}: DetailsComponentProps<Training>) => {
  const { id: resumeId } = useParams() as { id: string };
  const blockId = componentId as string;
  const { mutate: deleteTrainingMutate } = useOptimisticDeleteCategory<Training>({
    mutationFn: deleteResumeCategoryBlock,
    TARGET_QUERY_KEY: categoryKeys.training(resumeId),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

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
              {admissionDate}
            </Label>
            <Text display={'inline-block'}>-</Text>
            <Label
              bg={'gray.300'}
              color={'gray.700'}
              py={0}
              fontWeight={'medium'}
            >
              {graduationDate ?? '진행중'}
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
          gap={5}
        >
          <Heading
            fontSize={'xl'}
            fontWeight={'bold'}
            color={'gray.800'}
          >
            {organization}
          </Heading>
          <Flex
            gap={2}
            direction={'column'}
          >
            <Flex
              gap={5}
              align={'center'}
            >
              <Text
                fontWeight={'medium'}
                color={'gray.800'}
              >
                {major}
              </Text>
              <Divider
                orientation="vertical"
                borderColor={'gray.400'}
                h={'1rem'}
              />
              <Text
                fontWeight={'medium'}
                color={'gray.800'}
              >
                {degree}
              </Text>
            </Flex>
            {gpa && maxGpa && (
              <Flex
                gap={5}
                align={'center'}
              >
                <Text
                  fontSize={'md'}
                  color={'gray.800'}
                  fontWeight={'semibold'}
                >
                  평가
                </Text>
                <Text as={'span'}>
                  {gpa} / {maxGpa}
                </Text>
              </Flex>
            )}
          </Flex>
          {explanation && (
            <Flex
              flexWrap={'wrap'}
              wordBreak={'break-word'}
              mt={2}
            >
              <Text>{explanation}</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
      {isCurrentUser && (
        <>
          <ConfirmModal
            isOpen={isOpen}
            onClose={onClose}
            message="정말로 삭제하시겠습니까?"
            proceed={() => deleteTrainingMutate({ resumeId, blockId })}
          />
          <EditDeleteOptionsButton
            onEdit={onEdit}
            onDelete={() => onOpen()}
          />
        </>
      )}
    </Flex>
  );
};

export default TraningDetails;
