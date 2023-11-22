import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import RemoteControlReject from './RemoteControlReject';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { RemoteControl } from '~/components/atoms/RemoteControl';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { useGetResumeBasic } from '~/queries/resume/details/useGetResumeBasic';

/**TODO - api 명세가 나오면 타입 별도로 정리해두기 */
type Temp = {
  generalComment: string;
};

const RemoteControlPannel = () => {
  const { eventId = '', resumeId = '' } = useParams();
  const { data } = useGetResumeBasic({ resumeId });
  const menteeId = data?.ownerInfo?.id as number;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Temp>();

  const onSubmit = (values: Temp) => {
    /**TODO
      - POST API 연결 + 성공시 리다이렉션
    */
    console.log(values);
  };

  return (
    <RemoteControl>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={Boolean(errors.generalComment)}
          direction="column"
          spacing="0.2rem"
          mb={'1rem'}
        >
          <FormLabel fontSize={'md'}>총평 작성</FormLabel>
          <FormTextarea
            h={'6rem'}
            fontSize={'sm'}
            placeholder="총평을 입력해주세요."
            id="generalComment"
            register={{
              ...register('generalComment'),
            }}
            error={errors?.generalComment}
          />
        </FormControl>
        <Button
          h={'1.8rem'}
          fontSize={'sm'}
          type="submit"
        >
          첨삭 완료하기
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
