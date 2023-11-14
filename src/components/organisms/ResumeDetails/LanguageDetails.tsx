import { Flex, Text, Divider, Heading } from '@chakra-ui/react';
import { Label } from '~/components/atoms/Label';
import { EditDeleteOptionsButton } from '~/components/molecules/OptionsButton';
import { Language } from '~/types/language';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';

/* TODO  
  기본으로 언어 카테고리 제시하기 (영어, 일본어, 중국어, 기타(입력받기))
  같은 카테고리의 언어일 경우 블록 내부의 같은 영역에 보이게 하기
  언어 카테고리별 색상 테마를 상수로 적용해서 각 라벨의 색상 지정해주기?
*/

const LanguageDetails = ({
  data: { language, examName, scoreOrGrade },
  onEdit,
}: DetailsComponentProps<Language>) => {
  /**FIXME - 작성자와 현재 사용자 일치 여부 useUser 사용하여 판단하기 */
  const isCurrentUser = true;
  return (
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
      {isCurrentUser && (
        <EditDeleteOptionsButton
          onEdit={onEdit}
          onDelete={() => {}}
        />
      )}
    </Flex>
  );
};

export default LanguageDetails;
