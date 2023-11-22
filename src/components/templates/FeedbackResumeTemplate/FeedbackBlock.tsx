import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Tooltip, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FeedbackInput } from '~/components/molecules/FeedbackInput';
import usePostFeedbackComment from '~/queries/event/usePostFeedbackComment';

type FeedbackBlockProps = {
  blockId: number;
};

const LABEL_TEXT = '첨삭하기';

const FeedbackBlock = ({ blockId }: FeedbackBlockProps) => {
  const { eventId = '', resumeId = '' } = useParams();
  const { mutate } = usePostFeedbackComment(resumeId, eventId);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState<string>('');

  const handleChange = (newValue: string) => {
    if (newValue) {
      setValue(newValue);
    }
  };

  const handleSave = () => {
    const body = {
      componentId: blockId,
      content: value,
    };

    mutate(
      { eventId, resumeId, body },
      {
        onSuccess: () => {
          onClose();
          setValue('');
        },
      },
    );
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
