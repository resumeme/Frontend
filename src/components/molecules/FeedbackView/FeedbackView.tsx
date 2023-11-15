import { Box, Flex, Text, Divider, Icon, Tooltip } from '@chakra-ui/react';
import MDEditor from '@uiw/react-md-editor';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { BorderBox } from '../../atoms/BorderBox';
import '@uiw/react-markdown-preview/markdown.css';

type FeedbackViewProps = {
  content?: string;
  lastEditDate?: string;
};

const LABELS = {
  EDIT: '수정하기',
  REMOVE: '삭제하기',
  HEADER: '첨삭',
};

const FeedbackView = ({
  content = `## 테스트
- **반갑습니다.**`,
  lastEditDate = '2023-11-15 수요일',
}: FeedbackViewProps) => {
  return (
    <BorderBox p={0}>
      <Flex
        justify={'space-between'}
        borderWidth="1px"
        borderTopRadius="1.06rem"
        borderColor={'transparent'}
        bg={'gray.200'}
        px={5}
        py={2}
      >
        <Flex align={'flex-end'}>
          <Text
            fontSize={'sm'}
            fontWeight={'semibold'}
          >
            {lastEditDate}에 작성된 피드백
          </Text>
        </Flex>
        <Flex
          gap={3}
          align={'end'}
        >
          <Box
            as="button"
            onClick={() => alert('수정버튼 눌림')}
          >
            <Tooltip
              label={LABELS.EDIT}
              placement="top"
              hasArrow
            >
              <span>
                <Icon
                  as={HiPencilAlt}
                  alignSelf={'flex-end'}
                />
              </span>
            </Tooltip>
          </Box>
          <Box
            as="button"
            onClick={() => alert('삭제버튼 눌림')}
          >
            <Tooltip
              label={LABELS.REMOVE}
              placement="top"
              hasArrow
            >
              <span>
                <Icon as={HiTrash} />
              </span>
            </Tooltip>
          </Box>
        </Flex>
      </Flex>

      <Divider />

      <Flex
        px={5}
        py={3}
        direction={'column'}
      >
        <Box
          height={'full'}
          width={'full'}
          data-color-mode="light"
          px={1}
        >
          <MDEditor.Markdown
            source={content}
            style={{ whiteSpace: 'pre-wrap' }}
          />
        </Box>
        <Flex justify={'flex-end'}>
          <Text
            fontSize={'xs'}
            fontWeight={'light'}
            color={'gray.500'}
          >
            {lastEditDate}
          </Text>
        </Flex>
      </Flex>
    </BorderBox>
  );
};

export default FeedbackView;
