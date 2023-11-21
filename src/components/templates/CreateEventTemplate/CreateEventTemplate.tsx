import { HStack, Flex, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { FormTextarea } from './../../molecules/FormTextarea';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import FormTextInput from '~/components/molecules/FormTextInput/FormTextInput';
import { LabelCheckboxGroup } from '~/components/molecules/LabelCheckboxGroup';
import { TermInput } from '~/components/molecules/TermInput';
import { usePostCreateEvent } from '~/queries/usePostCreateEvent';
import { CreateEvent } from '~/types/event/event';

const CreateEventTemplate = () => {
  const { mutate: createEvent, isPending } = usePostCreateEvent();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateEvent>();

  const closeDateTime = useWatch({ name: 'time.closeDateTime', control });

  const onSubmit: SubmitHandler<CreateEvent> = (values) => {
    createEvent(values);
  };

  return (
    <>
      <Text
        fontSize={'2xl'}
        fontWeight={600}
        color={'gray.900'}
      >
        첨삭 이벤트 생성
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BorderBox
          mt={'2rem'}
          p={'1.88rem 2rem'}
        >
          <Flex
            direction={'column'}
            gap={'1.25rem'}
          >
            <FormControl isInvalid={!!errors.info?.title}>
              <FormLabel
                htmlFor={'info.title'}
                isRequired={true}
              >
                이벤트 제목
              </FormLabel>

              <FormTextInput
                w={'100%'}
                id="info.title"
                register={{ ...register('info.title', { required: true }) }}
                error={errors.info?.title}
                placeholder="이벤트 제목을 입력해주세요."
              />
            </FormControl>
            <FormControl isInvalid={!!errors.info?.maximumAttendee}>
              <FormLabel
                htmlFor={'info.maximumAttendee'}
                isRequired={true}
              >
                인원 수
              </FormLabel>
              <FormTextInput
                id="info.maximumAttendee"
                register={{
                  ...register('info.maximumAttendee', {
                    required: true,
                    max: { value: 10, message: '10이하로 입력해 주세요.' },
                    min: { value: 2, message: '2이상 입력해 주세요.' },
                    pattern: { value: /^(?:[2-9]|10)$/, message: '숫자를 입력해 주세요.' },
                  }),
                }}
                error={errors.info?.maximumAttendee}
                placeholder="신청 받을 인원 수(2~10)를 입력해주세요."
              />
            </FormControl>
            <FormControl
              spacing="1.63rem"
              isInvalid={!!errors['positions']}
            >
              <FormLabel isRequired={true}>직무</FormLabel>
              <LabelCheckboxGroup
                control={control}
                name="positions"
                variant="role"
              />
            </FormControl>
            <HStack spacing={'1.6rem'}>
              <FormLabel isRequired={true}>신청 기간</FormLabel>
              <TermInput<CreateEvent>
                future
                control={control}
                includeTime={true}
                errors={errors}
                register={register}
                isRequired={true}
                endDateName="time.closeDateTime"
                startDateName="time.openDateTime"
              />
            </HStack>
            <FormControl isInvalid={!!errors.time?.endDate}>
              <FormLabel isRequired={true}>첨삭 종료일</FormLabel>
              <FormDateInput
                error={errors.time?.endDate}
                w={'47.6%'}
                register={{
                  ...register('time.endDate', {
                    required: true,
                    min: {
                      value: closeDateTime,
                      message: '신청 기간 이후의 날짜를 입력해주세요.',
                    },
                  }),
                }}
              />
            </FormControl>
            <FormControl
              spacing="1.63rem"
              isInvalid={!!errors.info?.content}
            >
              <FormLabel
                htmlFor={'info.content'}
                isRequired={true}
              >
                내용
              </FormLabel>
              <FormTextarea
                error={errors.info?.content}
                id="info.content"
                register={{ ...register('info.content', { required: true }) }}
                placeholder="이벤트에 대한 상세 내용을 입력해주세요."
              />
            </FormControl>
          </Flex>
        </BorderBox>
        <Flex
          justifyContent={'end'}
          mt={'2.62rem'}
          gap={'2.06rem'}
        >
          <Button
            size={'md'}
            isLoading={isPending}
            type="button"
          >
            미리보기
          </Button>
          <Button
            size={'md'}
            isLoading={isPending}
            type="submit"
          >
            등록하기
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default CreateEventTemplate;
