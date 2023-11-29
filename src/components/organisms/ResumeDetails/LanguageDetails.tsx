import { Flex, Text, Divider, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { deleteResumeCategoryBlock } from '~/api/resume/delete/deleteResumeCategoryBlock';
import { Label } from '~/components/atoms/Label';
import { EditDeleteOptionsButton } from '~/components/molecules/OptionsButton';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticDeleteCategory } from '~/queries/resume/useOptimisticDeleteCategory';
import { Language, ReadLanguage } from '~/types/language';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';

const LanguageDetails = ({
  data: { componentId, language, examName, scoreOrGrade },
  onEdit,
  isCurrentUser,
}: DetailsComponentProps<ReadLanguage>) => {
  const { resumeId = '' } = useParams();
  const blockId = componentId;
  const { mutate: deleteMutate } = useOptimisticDeleteCategory<Language>({
    mutationFn: deleteResumeCategoryBlock,
    TARGET_QUERY_KEY: categoryKeys.language(resumeId),
  });

  return (
    <Flex>
      <Flex flex={1}>
        <Label
          bg={'gray.300'}
          color={'gray.700'}
          h={'fit-content'}
          fontSize={'md'}
          py={0}
          fontWeight={'semibold'}
        >
          {language}
        </Label>
      </Flex>
      <Flex
        mt={'1%'}
        flex={2}
        direction={'column'}
      >
        <Flex
          width={'full'}
          align={'flex-end'}
          gap={5}
        >
          <Heading
            fontSize={'xl'}
            fontWeight={'bold'}
            color={'gray.800'}
          >
            {examName}
          </Heading>
          <Divider
            orientation="vertical"
            borderColor={'gray.400'}
            h={'full'}
          />
          <Text fontWeight={'regular'}>{scoreOrGrade}</Text>
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

export default LanguageDetails;
