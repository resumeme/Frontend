import { Flex, Text, Divider, Heading } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Label } from '~/components/atoms/Label';
import { Language } from '~/types/language';

/* TODO  
  기본으로 언어 카테고리 제시하기 (영어, 일본어, 중국어, 기타(입력받기))
  같은 카테고리의 언어일 경우 블록 내부의 같은 영역에 보이게 하기
  언어 카테고리별 색상 테마를 상수로 적용해서 각 라벨의 색상 지정해주기?
*/

const LanguageDetails = ({ data }: { data: Language[] }) => {
  if (!data) {
    return;
  }

  return (
    <>
      {data?.map(({ language, examName, scoreOrGrade }: Language, index) => {
        return (
          <React.Fragment key={uuidv4()}>
            {index > 0 && (
              <Divider
                key={index}
                my={'2rem'}
                borderColor={'gray.300'}
              />
            )}
            <Flex>
              <Flex flex={1}>
                <Label
                  bg={'gray.300'}
                  color={'gray.700'}
                  h={'fit-content'}
                  fontSize={'md'}
                  py={0}
                  fontWeight={'semibold'}
                >
                  {language}
                </Label>
              </Flex>
              <Flex
                mt={'1%'}
                flex={2}
                direction={'column'}
              >
                <Flex
                  width={'full'}
                  align={'flex-end'}
                  gap={5}
                >
                  <Heading
                    fontSize={'xl'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                  >
                    {examName}
                  </Heading>
                  <Divider
                    orientation="vertical"
                    borderColor={'gray.400'}
                    h={'full'}
                  />
                  <Text fontWeight={'regular'}>{scoreOrGrade}</Text>
                </Flex>
              </Flex>
            </Flex>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default LanguageDetails;
