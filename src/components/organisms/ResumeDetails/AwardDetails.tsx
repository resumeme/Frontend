import { Flex, Text, Heading, Icon, Link } from '@chakra-ui/react';
import { HiLink } from 'react-icons/hi';
import { DetailsComponentProps } from '../ResumeCategoryDetails/ResumeCategoryDetails';
import { Label } from '~/components/atoms/Label';
import { OptionsButton } from '~/components/molecules/OptionsButton';
import { Award } from '~/types/award';

const AwardDetails = ({
  data: { certificationTitle, acquisitionDate, issuingAuthority, link, description },
}: DetailsComponentProps<Award>) => {
  /**FIXME - 작성자와 현재 사용자 일치 여부 useUser 사용하여 판단하기 */
  const isCurrentUser = true;
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
      {isCurrentUser && <OptionsButton />}
    </Flex>
  );
};

export default AwardDetails;
