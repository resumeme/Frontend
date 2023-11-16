import { Flex, Text, Heading, Link, Icon } from '@chakra-ui/react';
import { HiLink } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { deleteResumeCategoryBlock } from '~/api/resume/delete/deleteResumeCategoryBlock';
import { Label } from '~/components/atoms/Label';
import { EditDeleteOptionsButton } from '~/components/molecules/OptionsButton';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticUpdateCategory } from '~/queries/resume/useOptimisticUpdateCategory';
import { Activity } from '~/types/activity';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';

const ActivityDetails = ({
  data: { id, activityName, startDate, endDate, inProgress, link, description },
  onEdit,
  isCurrentUser,
}: DetailsComponentProps<Activity>) => {
  const { id: resumeId = '' } = useParams();
  const blockId = id as string;
  const { mutate: deleteLanguageMutate } = useOptimisticUpdateCategory<Activity>({
    mutationFn: deleteResumeCategoryBlock,
    TARGET_QUERY_KEY: categoryKeys.award(blockId),
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
              {startDate}
            </Label>
            <Text display={'inline-block'}>-</Text>
            <Label
              bg={'gray.300'}
              color={'gray.700'}
              py={0}
              fontWeight={'medium'}
            >
              {inProgress ? '진행중' : endDate}
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
            {activityName}
          </Heading>
          <Flex
            direction={'column'}
            gap={2}
          >
            {description && <Text mt={5}>{description}</Text>}
            {link && (
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
                  {link}
                </Link>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
      {isCurrentUser && (
        <EditDeleteOptionsButton
          onEdit={onEdit}
          onDelete={() => deleteLanguageMutate({ resumeId, blockId })}
        />
      )}
    </Flex>
  );
};

export default ActivityDetails;
