import { Box, Flex } from '@chakra-ui/react';
import {
  ReferenceLinkBox,
  renderIcon,
  LINK_ICON_TYPES,
} from '~/components/molecules/ReferenceLinkBox';
import { ReadReferenceLink } from '~/types/referenceLink';

export type LinkItemProps = Pick<ReadReferenceLink, 'componentId' | 'url' | 'linkType'> & {
  onRemove: (componentId: number) => void;
};

const LinkItem = ({ componentId, url, linkType = 'OTHER', onRemove }: LinkItemProps) => {
  const handleRemove = () => {
    if (componentId) {
      onRemove(componentId);
    }
  };

  return (
    <Flex
      gap={1}
      align={'center'}
      role="group"
    >
      <ReferenceLinkBox
        url={url}
        linkType={linkType}
      />
      <Box
        as="button"
        ml={1}
        p={0}
        onClick={handleRemove}
        fontSize="xs"
        display="none"
        role="group"
        fill="red"
        _groupHover={{
          display: 'block',
        }}
      >
        {renderIcon(LINK_ICON_TYPES.REMOVE, 'lg', {
          color: 'red.500',
        })}
      </Box>
    </Flex>
  );
};

export default LinkItem;
