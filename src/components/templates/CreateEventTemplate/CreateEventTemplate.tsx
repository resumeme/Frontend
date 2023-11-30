import { Flex, Text, Checkbox, HStack, Select } from '@chakra-ui/react';
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
import CONSTANTS from '~/constants';
import { usePatchEventDetail } from '~/queries/event/create/usePatchEventDetai';
import { usePostCreateEvent } from '~/queries/usePostCreateEvent';
import { CreateEvent } from '~/types/event/event';
import { Position } from '~/types/position';

type CreateEventTemplateType = CreateEvent & { mainPosition: Position };

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
    watch,
    setValue,
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateEventTemplateType>({ defaultValues });
  const closeDateTime = useWatch({ name: 'time.closeDateTime', control });

  const onSubmit: SubmitHandler<CreateEventTemplateType> = (values) => {
    values.positions.sort((position) => (position === values.mainPosition ? 1 : 0));

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
        피드백 이벤트 생성
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
                    required: '이벤트 제목을 입력해주세요.',
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
                    required: '신청 받을 인원 수(2~10)를 입력해주세요.',
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

            <FormControl
              display={!(watch('positions') && watch('positions').length > 1) ? 'none' : undefined}
              spacing="1.63rem"
            >
              <FormLabel isRequired={true}>대표 직무</FormLabel>
              <Flex
                direction={'column'}
                w={'max-content'}
              >
                <Select
                  _focusVisible={{ boxShadow: 'none' }}
                  h="36px"
                  border="1px"
                  borderColor="primary.800"
                  borderRadius="0.75rem"
                  color="gray.400"
                  {...register('mainPosition', {
                    required: '대표 직무를 선택해 주세요.',
                  })}
                >
                  {watch('positions') &&
                    watch('positions').map((position, index) => {
                      return (
                        <option
                          selected={index === 0}
                          key={position}
                          value={position}
                        >
                          {CONSTANTS.POSITION[position as Position]}
                        </option>
                      );
                    })}
                </Select>
              </Flex>
            </FormControl>
            <HStack spacing={'1.6rem'}>
              <FormLabel isRequired={true}>신청 기간</FormLabel>
              <TermInput<CreateEventTemplateType>
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
              <FormLabel isRequired={true}>피드백 종료일</FormLabel>
              <FormDateInput
                name="time.endDate"
                min={closeDateTime}
                error={errors.time?.endDate}
                w={'47.6%'}
                register={{
                  ...register('time.endDate', {
                    required: '피드백을 종료할 날짜를 입력해주세요.',
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
                register={{
                  ...register('info.content', {
                    required: '이벤트에 대한 상세 내용을 입력해주세요.',
                  }),
                }}
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
