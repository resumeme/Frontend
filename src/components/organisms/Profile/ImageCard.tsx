import { Flex } from '@chakra-ui/react';
import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';

type ImageCardProps = {
  imageUrl: string;
  editButton?: boolean;
};

const ImageCard = ({ imageUrl, editButton = true }: ImageCardProps) => {
  return (
    <Flex
      minH={'12.87rem'}
      direction={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Avatar
        w={'7.75rem'}
        h={'7.75rem'}
        src={imageUrl}
      />
      {editButton && (
        <Button
          w={'7.75rem'}
          h={'2.25rem'}
          color={'gray.700'}
          bg={'gray.300'}
        >
          프로필 수정
        </Button>
      )}
    </Flex>
  );
};

export default ImageCard;
