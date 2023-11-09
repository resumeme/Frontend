import { Flex, Text, Heading, Divider, Link, Icon } from '@chakra-ui/react';
import React from 'react';
import { HiLink } from 'react-icons/hi';
import { v4 as uuidv4 } from 'uuid';
import { Label } from '~/components/atoms/Label';
import { Activity } from '~/types/activity';

const ActivityDetails = ({ data }: { data: Activity[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map(
        ({ activityName, startDate, endDate, inProgress, link, description }: Activity, index) => {
          return (
            <React.Fragment key={uuidv4()}>
              {index > 0 && (
                <Divider
                  key={index}
                  my={'3rem'}
                  borderColor={'gray.300'}
                />
              )}
              <Flex key={uuidv4()}>
                <Flex flex={1}>
                  <Flex direction={'column'}>
                    <Flex
                      justify={'start'}
                      align={'center'}
                      gap={2}
                    >
                      <Label
                        bg={'gray.300'}
                        color={'gray.700'}
                        h={'fit-content'}
                        py={0}
                        fontWeight={'medium'}
                      >
                        {startDate}
                      </Label>
                      <Text display={'inline-block'}>-</Text>
                      <Label
                        bg={'gray.300'}
                        color={'gray.700'}
                        py={0}
                        fontWeight={'medium'}
                      >
                        {inProgress ? '진행중' : endDate}
                      </Label>
                    </Flex>
                  </Flex>
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
                    <Heading
                      fontSize={'xl'}
                      fontWeight={'bold'}
                      color={'gray.800'}
                    >
                      {activityName}
                    </Heading>
                    <Flex
                      direction={'column'}
                      gap={2}
                    >
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
              </Flex>
            </React.Fragment>
          );
        },
      )}
    </>
  );
};

export default ActivityDetails;
