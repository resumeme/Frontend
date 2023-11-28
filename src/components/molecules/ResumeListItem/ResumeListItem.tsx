import { Box, Flex, Text } from '@chakra-ui/react';
import { Label } from '~/components/atoms/Label';
import { ResumeListItem } from '~/types/resume/resumeListItem';

type ResumeListItemProps = {
  data: ResumeListItem;
};

const ResumeListItem = ({ data: { title, modifiedAt, position } }: ResumeListItemProps) => {
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
          {position && (
            <Label
              bg={'gray.300'}
              color={'gray.700'}
            >
              {position}
            </Label>
          )}
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
