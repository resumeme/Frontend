import { Flex, Heading } from '@chakra-ui/react';
import ImageCard from './ImageCard';
import UserDetail from './UserDetail';
import { BorderBox } from '~/components/atoms/BorderBox';
import { User } from '~/types/user';

type ProfileProps = {
  user: User;
};

const Profile = ({
  user: {
    realName,
    imageUrl,
    interestedFields,
    interestedPositions,
    nickname,
    phoneNumber,
    experiencedPositions,
    careerContent,
    introduce,
    role,
  },
}: ProfileProps) => {
  return (
    <>
      <Flex
        fontSize={'1.75rem'}
        color={'gray.800'}
      >
        <Heading fontWeight={700}>{realName}</Heading>
        <Heading fontWeight={500}>님 안녕하세요.</Heading>
      </Flex>
      <Heading
        mt={'1.25rem'}
        fontSize={'1.25rem'}
        color={'gray.700'}
        fontWeight={700}
      >
        프로필
      </Heading>
      <BorderBox
        mt={'1.25rem'}
        p={'3rem 4.38rem'}
      >
        <Flex gap={'2.56rem'}>
          <ImageCard imageUrl={imageUrl} />
          <UserDetail
            careerContent={careerContent}
            experiencedPositions={experiencedPositions}
            interestedFields={interestedFields}
            interestedPositions={interestedPositions}
            introduce={introduce}
            nickname={nickname}
            phoneNumber={phoneNumber}
            role={role}
          />
        </Flex>
      </BorderBox>
    </>
  );
};

export default Profile;
