import { Flex, Icon, Input, Spacer, Text } from '@chakra-ui/react';
import { MdOutlineArticle } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { EditDeleteOptionsButton } from '~/components/molecules/OptionsButton';
import { appPaths } from '~/config/paths';
import { useDeleteResume } from '~/queries/resume/delete/useDeleteResume';
import { MyResume } from '~/types/resume/resumeListItem';
import { formatDate } from '~/utils/formatDate';

type ResumeItemProps = {
  resume: MyResume;
};

const ResumeItem = ({ resume: { id, modifiedAt, title } }: ResumeItemProps) => {
  const navigate = useNavigate();

  const { mutate: deleteResume } = useDeleteResume();

  const HandleEdit = () => {
    navigate(appPaths.resumeEdit(id));
  };

  const HandleDelete = () => {
    deleteResume({ resumeId: String(id) });
  };

  return (
    <>
      <Flex>
        {modifiedAt && (
          <Text
            color={'gray.500'}
            as={'span'}
            fontSize={'0.75rem'}
          >{`${formatDate(modifiedAt)} 수정`}</Text>
        )}
        <Spacer />
        <EditDeleteOptionsButton
          onDelete={HandleDelete}
          onEdit={HandleEdit}
        />
      </Flex>
      <Link to={appPaths.resumeDetail(id)}>
        <Text
          noOfLines={1}
          mt={'1.5rem'}
          fontSize={'1.5rem'}
          fontWeight={600}
          color={'gray.800'}
        >
          {title}
        </Text>
      </Link>
      <Flex
        mt={'1.75rem'}
        borderRadius={'0.3125rem'}
        p={'0.75rem 1rem'}
        bg={'gray.200'}
        alignItems={'center'}
        w={'full'}
        gap={'0.69rem'}
      >
        <Icon
          as={MdOutlineArticle}
          color={'gray.500'}
          w={'1.25rem'}
        />
        <Input
          isTruncated
          flexShrink={1}
          h={'min-content'}
          p={0}
          m={0}
          border={0}
          placeholder="이력서에 대한 간단한 메모를 남겨보세요. ex) 12월 25일 제출 전까지 피드백 받기"
        />
      </Flex>
    </>
  );
};

export default ResumeItem;
