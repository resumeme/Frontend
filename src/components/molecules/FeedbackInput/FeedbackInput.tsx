import { Box, Flex, Text, Icon, Divider } from '@chakra-ui/react';
import MDEditor from '@uiw/react-md-editor';
import { MDEditorProps } from '@uiw/react-md-editor';
import { useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import rehypeSanitize from 'rehype-sanitize';
import { Button } from '~/components/atoms/Button';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

type FeedbackInputProps = {
  value: string | undefined;
  onChange: (value: string) => void;
  onSaveClick?: (value: string) => void;
  onCancelClick?: () => void;
  label?: string;
  saveLabel?: string;
  editorProps?: MDEditorProps;
};

const FeedbackInput = ({
  value,
  onChange,
  onSaveClick,
  onCancelClick,
  label = '첨삭하기',
  saveLabel = '저장',
  ...editorProps
}: FeedbackInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleChange = (newValue: string | undefined) => {
    if (newValue) {
      onChange(newValue);
    }
  };

  const handleClick = () => {
    onSaveClick?.(value || '');
  };

  return (
    <Flex
      position="relative"
      direction="column"
      bg="gray.100"
      mt={5}
      gap={2}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Divider
        border={0}
        h={0.1}
        my={4}
        bg={'gray.300'}
      />
      <Flex
        align="center"
        gap={2}
      >
        <Icon
          as={HiPencilAlt}
          color={isFocus ? 'primary.900' : 'gray.800'}
          fontSize={'lg'}
        />
        <Text
          fontSize="sm"
          fontWeight="bold"
          color="gray.800"
        >
          {label}
        </Text>
      </Flex>
      <Box
        data-color-mode="light"
        height={'full'}
        width={'full'}
      >
        <MDEditor
          value={value}
          onChange={handleChange}
          preview="edit"
          previewOptions={{
            rehypePlugins: [rehypeSanitize],
          }}
          {...editorProps}
        />
      </Box>
      <Flex
        justify="flex-end"
        gap={2}
      >
        <Button
          variant={'cancel'}
          size="xs"
          onClick={onCancelClick}
        >
          취소
        </Button>
        <Button
          size="xs"
          onClick={handleClick}
        >
          {saveLabel}
        </Button>
      </Flex>
    </Flex>
  );
};

export default FeedbackInput;
