import { Box, Flex, Text, Icon } from '@chakra-ui/react';
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
  onChange: (value: string | undefined) => void;
  onSaveClick?: (value: string) => void;
  label?: string;
  saveLabel?: string;
  editorProps?: MDEditorProps;
};

const FeedbackInput = ({
  value,
  onChange,
  onSaveClick,
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
    onChange(newValue);
  };

  const handleClick = () => {
    onSaveClick?.(value || '');
  };

  return (
    <Flex
      direction="column"
      bg="gray.100"
      border="1px solid"
      borderColor={isFocus ? 'primary.700' : 'gray.300'}
      rounded="2xl"
      py={3}
      px={4}
      gap={2}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
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
      <Flex justify="flex-end">
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
