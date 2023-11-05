import { Flex, Tag } from '@chakra-ui/react';
import { FlexProps, TagProps } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

type DynamicTagsProps = {
  tagsArray: string[];
  flexProps?: FlexProps;
  tagProps?: TagProps;
};

const DynamicTags = ({ tagsArray, flexProps, tagProps }: DynamicTagsProps) => {
  return (
    <Flex
      gap={'0.5rem'}
      wrap={'wrap'}
      {...flexProps}
    >
      {tagsArray.map((tag) => {
        return (
          <Tag
            bg={'primary.100'}
            key={uuidv4()}
            {...tagProps}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

export default DynamicTags;
