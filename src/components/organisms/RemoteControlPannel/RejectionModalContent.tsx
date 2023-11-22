import { Box, Flex, Text, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/atoms/Button';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import usePatchFeedbackReject from '~/queries/event/usePatchFeedbackReject';
import { EventReject } from '~/types/resume/eventReject';

type RejectionModalContentProps = {
  eventId: string;
  menteeId: number;
  onClose?: () => void;
};

const RejectionModalContent = ({ onClose, eventId, menteeId }: RejectionModalContentProps) => {
  const { mutate } = usePatchFeedbackReject();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventReject>();

  const onSubmit = (value: EventReject) => {
    mutate({ eventId, menteeId, body: value });

    if (onClose) {
      onClose();
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction={'column'}
          gap={5}
        >
          <Text
            fontSize={'lg'}
            fontWeight={'bold'}
            color={'gray.800'}
          >
            해당 이력서의 첨삭을 반려하시겠어요?
          </Text>
          <FormControl isInvalid={Boolean(errors.rejectMessage)}>
            <FormTextarea
              id="rejectMessage"
              h={'8rem'}
              placeholder={'(선택사항) 사유를 100자 이내로 입력해주세요.'}
              register={{
                ...register('rejectMessage', {
                  // required: "반려 사유는 필수 값입니다.",
                  maxLength: {
                    value: 100,
                    message: '최대 100자 이내로만 작성해주세요.',
                  },
                }),
              }}
            />
            <FormErrorMessage>
              {errors?.rejectMessage && errors.rejectMessage.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit">반려하기</Button>
        </Flex>
      </form>
    </Box>
  );
};

export default RejectionModalContent;
