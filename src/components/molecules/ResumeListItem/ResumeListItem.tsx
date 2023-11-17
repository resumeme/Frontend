import { Box, Flex, Text } from '@chakra-ui/react';
import { Label } from '~/components/atoms/Label';
import { ResumeListItem } from '~/types/resume/resumeListItem';

type ResumeListItemProps = {
  data: ResumeListItem;
};

const ResumeListItem = ({ data: { title, modifiedAt } }: ResumeListItemProps) => {
  return (
    <Box>
      <Flex direction={'column'}>
        <Flex justifyContent={'space-between'}>
          <Text
            color={'gray.500'}
            fontSize={'0.75rem'}
          >
            {new Date(modifiedAt).toLocaleString()}
          </Text>
          {/**FIXME - 이력서 희망 직무 api 데이터 추가되면 대체하기 */}
          <Label
            bg={'gray.300'}
            color={'gray.700'}
          >
            {'이력서 희망 직무'}
          </Label>
        </Flex>
        <Text
          fontSize={'1.125rem'}
          fontWeight={'600'}
        >
          {title}
        </Text>
        {/**TODO - 메모 컴포넌트 */}
      </Flex>
    </Box>
  );
};

export default ResumeListItem;
