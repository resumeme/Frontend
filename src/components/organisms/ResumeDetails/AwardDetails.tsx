import { Flex, Text, Divider, Heading, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { HiLink } from 'react-icons/hi';
import { v4 as uuidv4 } from 'uuid';
import { Label } from '~/components/atoms/Label';
import { Award } from '~/types/award';

const AwardDetails = ({ data }: { data: Award[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map(
        (
          { certificationTitle, acquisitionDate, issuingAuthority, link, description }: Award,
          index,
        ) => {
          return (
            <React.Fragment key={uuidv4()}>
              {index > 0 && (
                <Divider
                  key={index}
                  my={'3rem'}
                  borderColor={'gray.300'}
                />
              )}
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
              </Flex>
            </React.Fragment>
          );
        },
      )}
    </>
  );
};

export default AwardDetails;
