import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Label } from '~/components/atoms/Label';
import { Training } from '~/types/training';

const TraningDetails = ({ data }: { data: Training[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map(
        (
          {
            organization,
            major,
            degree,
            admissionDate,
            graduationDate,
            gpa,
            maxGpa,
            explanation,
          }: Training,
          i,
        ) => {
          return (
            <React.Fragment key={uuidv4()}>
              {i > 0 && (
                <Divider
                  key={i}
                  my={'3rem'}
                  borderColor={'gray.300'}
                />
              )}
              <Flex>
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
                        {admissionDate}
                      </Label>
                      <Text display={'inline-block'}>-</Text>
                      <Label
                        bg={'gray.300'}
                        color={'gray.700'}
                        py={0}
                        fontWeight={'medium'}
                      >
                        {graduationDate ?? '진행중'}
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
                    gap={5}
                  >
                    <Heading
                      fontSize={'xl'}
                      fontWeight={'bold'}
                      color={'gray.800'}
                    >
                      {organization}
                    </Heading>
                    <Flex
                      gap={2}
                      direction={'column'}
                    >
                      <Flex
                        gap={5}
                        align={'center'}
                      >
                        <Text
                          fontWeight={'medium'}
                          color={'gray.800'}
                        >
                          {major}
                        </Text>
                        <Divider
                          orientation="vertical"
                          borderColor={'gray.400'}
                          h={'1rem'}
                        />
                        <Text
                          fontWeight={'medium'}
                          color={'gray.800'}
                        >
                          {degree}
                        </Text>
                      </Flex>
                      {gpa && maxGpa && (
                        <Flex
                          gap={5}
                          align={'center'}
                        >
                          <Text
                            fontSize={'md'}
                            color={'gray.800'}
                            fontWeight={'semibold'}
                          >
                            평가
                          </Text>
                          <Text as={'span'}>
                            {gpa} / {maxGpa}
                          </Text>
                        </Flex>
                      )}
                    </Flex>
                    {explanation && (
                      <Flex
                        flexWrap={'wrap'}
                        wordBreak={'break-word'}
                        mt={2}
                      >
                        <Text>{explanation}</Text>
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

export default TraningDetails;
