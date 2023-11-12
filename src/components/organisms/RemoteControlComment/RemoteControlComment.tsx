import { useForm } from 'react-hook-form';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { RemoteControl } from '~/components/atoms/RemoteControl';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';

/**TODO - api 명세가 나오면 타입 별도로 정리해두기 */
type Temp = {
  generalComment: string;
};
const RemoteControlComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Temp>();

  const onSubmit = (values: Temp) => {
    /**TODO - api 호출 */
    console.log(values);
  };
  return (
    <RemoteControl>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={Boolean(errors.generalComment)}
          direction="column"
          spacing="0.2rem"
          mb={'1.2rem'}
        >
          <FormLabel>총평</FormLabel>
          <FormTextarea
            h={'15rem'}
            placeholder="총평을 입력해주세요."
            id="generalComment"
            register={{ ...register('generalComment') }}
            error={errors?.generalComment}
          />
        </FormControl>
        <Button type="submit">첨삭 완료</Button>
      </form>
    </RemoteControl>
  );
};

export default RemoteControlComment;
