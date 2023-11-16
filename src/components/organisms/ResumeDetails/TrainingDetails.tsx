import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { DetailsComponentProps } from '../ResumeCategoryDetails/ResumeCategoryDetails';
import { Label } from '~/components/atoms/Label';
import { EditDeleteOptionsButton } from '~/components/molecules/OptionsButton';
import { Training } from '~/types/training';

const TraningDetails = ({
  data: { organization, major, degree, admissionDate, graduationDate, gpa, maxGpa, explanation },
}: DetailsComponentProps<Training>) => {
  /**FIXME - 작성자와 현재 사용자 일치 여부 useUser 사용하여 판단하기 */
  const isCurrentUser = true;
  return (
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
      {isCurrentUser && (
        <EditDeleteOptionsButton
          onEdit={() => {}}
          onDelete={() => {}}
        />
      )}
    </Flex>
  );
};

export default TraningDetails;
