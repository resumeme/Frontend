import { Flex, Text, Heading, Icon, Link, useDisclosure } from '@chakra-ui/react';
import { HiLink } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { deleteResumeCategoryBlock } from '~/api/resume/delete/deleteResumeCategoryBlock';
import { Label } from '~/components/atoms/Label';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { EditDeleteOptionsButton } from '~/components/molecules/OptionsButton';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticDeleteCategory } from '~/queries/resume/useOptimisticDeleteCategory';
import { Award } from '~/types/award';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';

const AwardDetails = ({
  data: { id, certificationTitle, acquisitionDate, issuingAuthority, link, description },
  onEdit,
  isCurrentUser,
}: DetailsComponentProps<Award>) => {
  const { id: resumeId = '' } = useParams();
  const blockId = id as string;
  const { mutate: deleteLanguageMutate } = useOptimisticDeleteCategory<Award>({
    mutationFn: deleteResumeCategoryBlock,
    TARGET_QUERY_KEY: categoryKeys.award(resumeId),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Flex flex={1}>
        {acquisitionDate && (
          <Label
            bg={'gray.300'}
            color={'gray.700'}
            h={'fit-content'}
            py={0}
            fontWeight={'medium'}
          >
            {acquisitionDate}
          </Label>
        )}
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
              {certificationTitle}
            </Heading>
            {issuingAuthority && <Text>{issuingAuthority}</Text>}
          </Flex>
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
                href={link}
                fontSize={'sm'}
                color={'primary.900'}
              >
                {link}
              </Link>
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
            proceed={() => deleteLanguageMutate({ resumeId, blockId })}
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

export default AwardDetails;
