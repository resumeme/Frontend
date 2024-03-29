import { Flex, Select, useDisclosure } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { postResumeTraining } from '~/api/resume/create/postResumeTraining';
import { patchResumeTraining } from '~/api/resume/edit/patchResumeTraining';
import { FormLabel } from '~/components/atoms/FormLabel';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { FormControl } from '~/components/molecules/FormControl';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticPatchCategory } from '~/queries/resume/useOptimisticPatchCategory';
import { useOptimisticPostCategory } from '~/queries/resume/useOptimsticPostCategory';
import { FormComponentProps } from '~/types/props/formComponentProps';
import { Training } from '~/types/training';

const TrainingForm = ({
  defaultValues,
  isEdit = false,
  blockId,
  onCancel,
}: FormComponentProps<Training>) => {
  const { resumeId = '' } = useParams();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Training>({ defaultValues });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate: postTraining } = useOptimisticPostCategory({
    mutationFn: postResumeTraining,
    TARGET_QUERY_KEY: categoryKeys.training(resumeId),
    onMutateSuccess: onCancel,
  });
  const { mutate: patchTraining } = useOptimisticPatchCategory({
    mutationFn: patchResumeTraining,
    TARGET_QUERY_KEY: categoryKeys.training(resumeId),
    onMutateSuccess: onCancel,
  });

  const onSubmit: SubmitHandler<Training> = (body) => {
    if (!resumeId) {
      return;
    }
    if (!isEdit) {
      postTraining({ resumeId, body });
    } else if (isEdit && blockId) {
      patchTraining({ resumeId, blockId, body });
    }
  };

  return (
    <Flex
      direction={'column'}
      gap={'1rem'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          justify={'center'}
          direction={'column'}
          gap={'1.25rem'}
        >
          <Flex
            columnGap={'3rem'}
            rowGap={'1rem'}
            wrap={'wrap'}
          >
            <FormControl
              w={{ base: 'full', md: '60%' }}
              isInvalid={Boolean(errors.organization)}
            >
              <FormLabel
                htmlFor="organization"
                isRequired
              >
                학교/기관
              </FormLabel>
              <FormTextInput
                placeholder="OO학교"
                id="organization"
                register={{
                  ...register('organization', { required: '필수 입력값입니다.' }),
                }}
                error={errors.organization}
              />
            </FormControl>
            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.major)}
            >
              <FormLabel
                w={'fit-content'}
                htmlFor="major"
                isRequired
              >
                전공
              </FormLabel>
              <FormTextInput
                placeholder="컴퓨터공학"
                id="major"
                register={{
                  ...register('major', { required: '필수 입력값입니다.' }),
                }}
                error={errors.major}
              />
            </FormControl>
            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.degree)}
            >
              <FormLabel
                htmlFor="degree"
                isRequired
              >
                학위
              </FormLabel>
              <FormTextInput
                placeholder="학사"
                id="degree"
                register={{
                  ...register('degree', { required: '필수 입력값입니다.' }),
                }}
                error={errors.degree}
              />
            </FormControl>
          </Flex>
          <Flex
            gap={'2rem'}
            alignSelf={'start'}
            wrap={'wrap'}
          >
            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.admissionDate)}
            >
              <FormLabel
                isRequired
                htmlFor="admissionDate"
              >
                입학
              </FormLabel>
              <FormDateInput
                w={'12rem'}
                register={{
                  ...register('admissionDate', {
                    required: '필수 입력값입니다.',
                    max: {
                      value: new Date().toISOString().slice(0, 16),
                      message: '유효한 입학 날짜를 입력해주세요.',
                    },
                  }),
                }}
                error={errors.admissionDate}
              />
            </FormControl>
            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.graduationDate)}
            >
              <FormLabel w={'fit-content'}>졸업(예정)</FormLabel>
              <FormDateInput
                maxW={'12rem'}
                register={{
                  ...register('graduationDate', {
                    min: {
                      value: watch('admissionDate'),
                      message: '유효한 날짜를 입력해 주세요.',
                    },
                  }),
                }}
                error={errors.graduationDate}
              />
            </FormControl>
          </Flex>
          <Flex
            columnGap={'3rem'}
            rowGap={'1rem'}
            wrap={'wrap'}
          >
            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.gpa)}
            >
              <FormLabel htmlFor="gpa">학점</FormLabel>
              <FormTextInput
                w={'6rem'}
                type={'number'}
                step={0.01}
                placeholder="4.5"
                id="gpa"
                register={{
                  ...register('gpa', {
                    valueAsNumber: true,
                    max: {
                      value: Number(watch('maxGpa')),
                      message: '최대 학점보다 높을 수 없어요',
                    },
                    min: { value: 1, message: '1보다 높아야 해요.' },
                  }),
                }}
                error={errors.gpa}
              />
            </FormControl>
            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.maxGpa)}
            >
              <FormLabel htmlFor="maxGpa">최대 학점</FormLabel>
              <Select
                defaultValue={4.5}
                borderColor={'gray.300'}
                maxH={'3.125rem'}
                h={'3.125rem'}
                {...register('maxGpa')}
              >
                <option value={4.0}>4.0</option>
                <option value={4.3}>4.3</option>
                <option value={4.5}>4.5</option>
              </Select>
            </FormControl>
          </Flex>
          <FormControl isInvalid={Boolean(errors.explanation)}>
            <FormLabel htmlFor="explanation">기타</FormLabel>
            <FormTextarea
              resize="none"
              autoComplete="off"
              spellCheck="false"
              h={'3rem'}
              placeholder="기타 필요한 설명이 있다면 입력해주세요."
              id="projectContent"
              register={{ ...register('explanation') }}
              error={errors.explanation}
            />
          </FormControl>
          <ConfirmModal
            isOpen={isOpen}
            onClose={onClose}
            message="작성하던 내용이 있습니다. 작성을 그만하시겠습니까?"
            proceed={() => {
              reset();
              onCancel();
            }}
          />
          <SubmitButtonGroup
            onCancel={() => {
              if (isDirty) {
                onOpen();
              } else {
                onCancel();
              }
            }}
          />
        </Flex>
      </form>
    </Flex>
  );
};

export default TrainingForm;
