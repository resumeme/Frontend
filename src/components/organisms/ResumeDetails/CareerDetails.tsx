import { Box, Text, Flex, Divider, Heading } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Label } from '~/components/atoms/Label';
import Career from '~/types/career';

const CareerDetails = ({ data }: { data: Career[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map(
        (
          {
            companyName,
            position,
            skills,
            duties,
            careerStartDate,
            isCurrentlyEmployed,
            endDate,
            careerContent,
          }: Career,
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
                        {careerStartDate}
                      </Label>
                      <Text display={'inline-block'}>-</Text>
                      <Label
                        bg={'gray.300'}
                        color={'gray.700'}
                        py={0}
                        fontWeight={'medium'}
                      >
                        {isCurrentlyEmployed ? '재직중' : endDate}
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
                      {companyName}
                    </Heading>
                    <Text
                      fontWeight={'semibold'}
                      color={'gray.800'}
                    >
                      {position}
                    </Text>
                    <Flex
                      direction={'column'}
                      pl={1}
                      gap={2}
                    >
                      <Flex
                        pt={2}
                        gap={2}
                        flexWrap={'wrap'}
                      >
                        {skills?.map((skill, i) => (
                          <Label
                            key={i}
                            width={'fit-content'}
                            bg={'gray.500'}
                            fontSize={'xs'}
                            py={0}
                            color={'gray.100'}
                            fontWeight={'medium'}
                          >
                            {skill}
                          </Label>
                        ))}
                      </Flex>
                      <Text mt={5}>{careerContent}</Text>
                    </Flex>
                  </Flex>
                  {duties?.map((duty) => (
                    <Box key={uuidv4()}>
                      <Flex
                        direction={'column'}
                        mt={10}
                      >
                        <Text fontWeight={'bold'}>{duty.title}</Text>
                      </Flex>
                      <Flex>
                        <Flex
                          direction={'column'}
                          gap={3}
                        >
                          <Text
                            fontSize={'xs'}
                            fontWeight={'regular'}
                            color={'gray.500'}
                          >
                            {duty.startDate} - {duty.endDate}
                          </Text>
                          <Text>{duty.description}</Text>
                        </Flex>
                      </Flex>
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </React.Fragment>
          );
        },
      )}
    </>
  );
};

export default CareerDetails;
