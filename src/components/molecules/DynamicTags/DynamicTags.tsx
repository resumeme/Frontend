import { CloseIcon } from '@chakra-ui/icons';
import { Flex, Tag } from '@chakra-ui/react';
import { FlexProps, TagProps } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

type DynamicTagsProps = {
  tagsArray: string[];
  handleItemDelete: (index: number) => void;
  flexProps?: FlexProps;
  tagProps?: TagProps;
};

const DynamicTags = ({ tagsArray, handleItemDelete, flexProps, tagProps }: DynamicTagsProps) => {
  return (
    <Flex
      gap={'0.5rem'}
      wrap={'wrap'}
      {...flexProps}
    >
      {tagsArray.map((tag, index) => {
        return (
          <Tag
            bg={'primary.100'}
            key={uuidv4()}
            display={'flex'}
            gap={3}
            {...tagProps}
          >
            {tag}
            <DeleteButton onClick={() => handleItemDelete(index)} />
          </Tag>
        );
      })}
    </Flex>
  );
};

const DeleteButton = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <button onClick={onClick}>
      <CloseIcon w={2.5} />
    </button>
  );
};

export default DynamicTags;
