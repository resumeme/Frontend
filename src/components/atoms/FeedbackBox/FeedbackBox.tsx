import { Box, IconButton, Tooltip } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { MdAddBox } from 'react-icons/md';
// import { v4 } from 'uuid';
import { FeedbackInput } from '~/components/molecules/FeedbackInput';

type FeedbackBoxProps = {
  children?: ReactNode;
};

const FeedbackBox = ({ children }: FeedbackBoxProps) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>('');

  const handleIconClick = () => {
    setIsEditorOpen(true);
  };

  const handleSave = () => {
    /* TODO 첨삭 코멘트 저장 api 연결하기
      - id 값 어떻게 받아서 주어야 할 지 고민할 것
      - 저장 후 첨삭 코멘트 뷰어 리페치할 것
      - 저장 후 첨삭 코멘트 인풋 value 초기화하기
    */
    alert(value);
    setValue('');
    setIsEditorOpen(false);
  };

  const handleChange = (newValue: string | undefined) => {
    setValue(newValue);
  };

  const handleCancel = () => {
    setIsEditorOpen(false);
  };

  const newFeedbackInput = () => {
    return (
      <FeedbackInput
        value={value}
        onChange={handleChange}
        onSaveClick={handleSave}
        onCancelClick={handleCancel}
      />
    );
  };

  return (
    <Box
      position={'relative'}
      role="group"
    >
      {children}
      <Box>
        <Tooltip
          aria-label="Add Feedback"
          label="첨삭하기"
          bg={'primary.900'}
          placement="auto"
          hasArrow
        >
          <IconButton
            icon={<MdAddBox />}
            fontSize={'4xl'}
            color={'primary.900'}
            aria-label="Add Feedback"
            size={'4xl'}
            onClick={handleIconClick}
            position="absolute"
            bottom="5"
            right="10"
            opacity={0}
            _groupHover={{
              display: isEditorOpen ? 'none' : 'block',
              opacity: isEditorOpen ? 0 : 1,
            }}
          />
        </Tooltip>
      </Box>
      {/* TODO
        첨삭 코멘트 뷰어 불러오기
        - 컴포넌트 id와 뷰어 id, 코멘트 id 등 어떻게 처리할지 고민할 것
      */}
      {isEditorOpen && <Box mt={5}>{newFeedbackInput()}</Box>}
    </Box>
  );
};

export default FeedbackBox;
