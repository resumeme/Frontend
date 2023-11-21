import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Tooltip, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { FeedbackInput } from '~/components/molecules/FeedbackInput';

type FeedbackBlockProps = {
  blockId?: string | undefined;
};

const LABEL_TEXT = '첨삭하기';

const FeedbackBlock = ({ blockId }: FeedbackBlockProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState<string | undefined>('');

  const handleChange = (newValue: string | undefined) => {
    if (newValue) {
      setValue(newValue);
    }
  };

  const handleSave = () => {
    if (blockId) {
      alert(`저장될 componentId: ${blockId} / ${value}`);
    } else {
      alert(`저장 되는 척 : ${value}`);
    }
    onClose(); // onSuccess일때만. 아닐 경우 오류만 띄운다.
    /* TODO POST API 연동
      - value를 가지고 저장함
      - 연동에 성공할 경우!
        - 첨삭 코멘트 렌더링 하는 곳의 쿼리 데이터 변경하기 (최신화)
        - value reset하기
        - isOpen false로 변경하기 (에디터 안보이게하기) - onClose()
    */
  };

  return (
    <Box>
      {isOpen ? (
        <FeedbackInput
          value={value}
          onChange={handleChange}
          onCancelClick={onClose}
          onSaveClick={handleSave}
        />
      ) : (
        <Box
          as="button"
          role="group"
          position="absolute"
          bottom={0}
          right={0}
          display={'none'}
          _groupHover={{
            display: 'block',
          }}
        >
          <Tooltip
            label={LABEL_TEXT}
            hasArrow
            placement="top"
          >
            <PlusSquareIcon
              color={'red'}
              boxSize={6}
              _groupHover={{
                color: 'primary.900',
              }}
              onClick={onOpen}
            />
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default FeedbackBlock;
