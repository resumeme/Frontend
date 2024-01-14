import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';

type ImageCardProps = {
  imageUrl: string;
};

const ImageCard = ({ imageUrl }: ImageCardProps) => {
  const navigate = useNavigate();

  return (
    <Flex
      h={'12.87rem'}
      direction={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Avatar
        w={'7.75rem'}
        h={'7.75rem'}
        src={imageUrl}
      />
      <Button
        w={'7.75rem'}
        h={'2.25rem'}
        color={'gray.700'}
        bg={'gray.300'}
        onClick={() => navigate(`/user/edit-info`)}
      >
        프로필 수정
      </Button>
    </Flex>
  );
};

export default ImageCard;
