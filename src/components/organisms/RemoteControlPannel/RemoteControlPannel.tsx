import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import RemoteControlReject from './RemoteControlReject';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { RemoteControl } from '~/components/atoms/RemoteControl';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { appPaths } from '~/config/paths';
import usePatchFeedbackComplete from '~/queries/event/usePatchFeedbackComplete';
import { useGetResumeBasic } from '~/queries/resume/details/useGetResumeBasic';
import { FeedbackComplete } from '~/types/resume/feedbackComplete';

const RemoteControlPannel = () => {
  const { eventId = '', resumeId = '' } = useParams();
  const { data } = useGetResumeBasic({ resumeId });
  const menteeId = data?.ownerInfo?.id as number;
  const { mutate: patchCompleteMutate } = usePatchFeedbackComplete();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackComplete>();

  const onSubmit = (value: FeedbackComplete) => {
    if (eventId !== '' && resumeId !== '') {
      value.resumeId = Number(resumeId);

      patchCompleteMutate(
        { eventId, body: value },
        {
          onSuccess: () =>
            navigate(appPaths.feedbackComplete(Number(resumeId), Number(eventId)), {
              replace: true,
            }),
        },
      );
    } else {
      alert('eventId와 resumeId를 찾을 수 없습니다.');
    }
  };

  return (
    <RemoteControl>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={Boolean(errors.completeMessage)}
          direction="column"
          spacing="0.2rem"
          mb={'1rem'}
        >
          <FormLabel fontSize={'md'}>총평 작성</FormLabel>
          <FormTextarea
            h={'6rem'}
            fontSize={'sm'}
            placeholder="총평을 입력해주세요."
            id="completeMessage"
            register={{
              ...register('completeMessage', {
                required: '짧게라도 총평을 남겨주세요!',
              }),
            }}
            error={errors?.completeMessage}
          />
        </FormControl>
        <Button
          h={'1.8rem'}
          fontSize={'sm'}
          type="submit"
        >
          피드백 완료하기
        </Button>
      </form>
      <RemoteControlReject
        menteeId={menteeId}
        eventId={eventId}
      />
    </RemoteControl>
  );
};

export default RemoteControlPannel;
