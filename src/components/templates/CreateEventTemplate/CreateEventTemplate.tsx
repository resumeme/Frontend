import { Flex, Text, Checkbox, HStack } from '@chakra-ui/react';
import { useState } from 'react';
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
import { usePatchEventDetail } from '~/queries/event/create/usePatchEventDetai';
import { usePostCreateEvent } from '~/queries/usePostCreateEvent';
import { CreateEvent } from '~/types/event/event';

type CreateEventTemplateProps = {
  isEdit?: boolean;
  defaultValues?: CreateEvent;
  eventId?: string;
};

const CreateEventTemplate = ({
  eventId = '',
  defaultValues,
  isEdit = false,
}: CreateEventTemplateProps) => {
  const { mutate: createEvent, isPending: isCreatePending } = usePostCreateEvent();
  const { mutate: patchEvent, isPending: isEditPending } = usePatchEventDetail();

  const isPending = isEdit ? isEditPending : isCreatePending;

  const [isOpenDateDisabled, setIsOpenDateDisabled] = useState(false);

  const {
    setValue,
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateEvent>({ defaultValues });

  const closeDateTime = useWatch({ name: 'time.closeDateTime', control });

  const onSubmit: SubmitHandler<CreateEvent> = (values) => {
    if (isEdit) {
      patchEvent({ data: values, eventId });
    } else {
      createEvent(values);
    }
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
                register={{
                  ...register('info.title', {
                    required: true,
                    maxLength: { value: 30, message: '최대 30자까지 입력할 수 있어요.' },
                  }),
                }}
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
              isInvalid={!!errors.positions}
            >
              <FormLabel isRequired={true}>직무</FormLabel>
              <LabelCheckboxGroup
                control={control}
                name="positions"
                variant="role"
                error={errors.positions}
                errorMessage="직무를 선택해 주세요."
              />
            </FormControl>
            <HStack spacing={'1.6rem'}>
              <FormLabel isRequired={true}>신청 기간</FormLabel>
              <TermInput<CreateEvent>
                future={!isEdit}
                control={control}
                includeTime={true}
                errors={errors}
                register={register}
                isRequired={true}
                endDateName="time.closeDateTime"
                startDateName="time.openDateTime"
                isOpenDateDisabled={isOpenDateDisabled}
              />
              <Checkbox
                onChange={(event) => {
                  setIsOpenDateDisabled(!isOpenDateDisabled);

                  if (event.target.checked) {
                    setValue('time.openDateTime', null);
                  }
                }}
              >
                즉시 오픈
              </Checkbox>
            </HStack>
            <FormControl isInvalid={!!errors.time?.endDate}>
              <FormLabel isRequired={true}>첨삭 종료일</FormLabel>
              <FormDateInput
                name="time.endDate"
                min={closeDateTime}
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
            type="submit"
          >
            {isEdit ? '수정하기' : '등록하기'}
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default CreateEventTemplate;
