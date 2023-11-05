import { VStack, HStack, Checkbox, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '~/components/atoms/Button';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';

import { TermInput } from '~/components/molecules/TermInput';
import { Activity } from '~/types/activity';

const ActivityForm = () => {
  const URL_PATTERN = /^(https?:\/\/)?([\w.-]+\.\w{2,})([\w\W]*)$/;

  const {
    setValue,
    control,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Activity>({
    //Todo: useQuery 관련 작업 예상
    // defaultValues: {
    //   activityName: '활동1',
    //   startDate: '2023-11-05',
    //   endDate: '2023-11-10',
    //   inProgress: false,
    //   link: 'https://resumeme.kro.kr',
    //   description: '활동 설명',
    // },
  });

  const onSubmit: SubmitHandler<Activity> = (values) => {
    /**TODO api 호출해 저장하기 */
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 3000);
    });
  };

  const inProgress = watch('inProgress');

  useEffect(() => {
    if (inProgress) {
      setValue('endDate', '');
    }
  }, [inProgress, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={'1.25rem'}>
        <FormControl isInvalid={Boolean(errors.activityName)}>
          <FormLabel isRequired>회사명</FormLabel>
          <FormTextInput
            id="activityName"
            register={{ ...register('activityName', { required: '활동명을 입력하세요' }) }}
            error={errors.activityName}
          />
        </FormControl>
        <Flex
          alignSelf={'start'}
          width={'100%'}
        >
          <FormLabel isRequired>재직기간</FormLabel>
          <TermInput
            startDateName="startDate"
            endDateName="endDate"
            isEndDateDisabled={inProgress}
            register={register}
            errors={errors}
            control={control}
            isRequired={true}
          />
          <Checkbox
            id="inProgress"
            ml={'1rem'}
            {...register('inProgress', {
              onChange: (event) => {
                if (event.target.checked) {
                  setValue('endDate', '');
                }
              },
            })}
          >
            진행 중
          </Checkbox>
        </Flex>
        <FormControl isInvalid={Boolean(errors.link)}>
          <FormLabel>링크</FormLabel>
          <FormTextInput
            id="link"
            register={{
              ...register('link', {
                pattern: {
                  value: URL_PATTERN,
                  message: '올바른 URL 형식이 아닙니다',
                },
              }),
            }}
            error={errors.link}
          />
        </FormControl>
        <FormControl isInvalid={Boolean(errors.description)}>
          <FormLabel htmlFor="description">설명</FormLabel>
          <FormTextarea
            resize="none"
            autoComplete="off"
            spellCheck="false"
            h={'16.625rem'}
            placeholder="내용을 입력해주세요."
            id="description"
            register={{ ...register('description') }}
            errors={errors}
          />
        </FormControl>
        <HStack>
          <Button
            size={'sm'}
            type="submit"
          >
            저장
          </Button>
          <Button
            size={'sm'}
            variant={'cancel'}
          >
            취소
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default ActivityForm;
