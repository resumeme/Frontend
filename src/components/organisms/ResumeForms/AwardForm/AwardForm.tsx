import { Flex, useDisclosure } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { postResumeAward } from '~/api/resume/create/postResumeAward';
import { patchResumeAward } from '~/api/resume/edit/patchResumeAward';
import { FormLabel } from '~/components/atoms/FormLabel';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { FormControl } from '~/components/molecules/FormControl';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import CONSTANTS from '~/constants';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticPatchCategory } from '~/queries/resume/useOptimisticPatchCategory';
import { useOptimisticPostCategory } from '~/queries/resume/useOptimsticPostCategory';
import { Award } from '~/types/award';
import { FormComponentProps } from '~/types/props/formComponentProps';

const AwardForm = ({
  defaultValues,
  isEdit = false,
  blockId,
  onCancel,
}: FormComponentProps<Award>) => {
  const { resumeId = '' } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Award>({ defaultValues });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate: postAward } = useOptimisticPostCategory({
    mutationFn: postResumeAward,
    TARGET_QUERY_KEY: categoryKeys.award(resumeId),
    onMutateSuccess: onCancel,
  });
  const { mutate: patchAward } = useOptimisticPatchCategory({
    mutationFn: patchResumeAward,
    TARGET_QUERY_KEY: categoryKeys.award(resumeId),
    onMutateSuccess: onCancel,
  });

  const onSubmit: SubmitHandler<Award> = (body) => {
    if (!resumeId) {
      return;
    }
    if (!isEdit) {
      postAward({ resumeId, body });
    } else if (isEdit && blockId) {
      patchAward({ resumeId, blockId, body });
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
          <FormControl isInvalid={Boolean(errors.certificationTitle)}>
            <FormLabel
              htmlFor="certificationTitle"
              isRequired
              w={'fit-content'}
            >
              수상/취득 내용
            </FormLabel>
            <FormTextInput
              placeholder="수상 및 자격증 정보를 입력해주세요. 예) 정보처리기사"
              id="certificationTitle"
              register={{
                ...register('certificationTitle', { required: '필수 입력값입니다.' }),
              }}
              error={errors.certificationTitle}
            />
          </FormControl>
          <Flex
            columnGap={'3rem'}
            rowGap={'1rem'}
            wrap={'wrap'}
          >
            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.acquisitionDate)}
            >
              <FormLabel
                isRequired
                w={'8.625rem'}
              >
                취득 일자
              </FormLabel>
              <FormDateInput
                register={{
                  ...register('acquisitionDate', { required: '필수 입력값입니다.' }),
                }}
                error={errors.acquisitionDate}
              />
            </FormControl>

            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.issuingAuthority)}
            >
              <FormLabel htmlFor="issuingAuthority">수여 기관</FormLabel>
              <FormTextInput
                placeholder="수여 기관을 입력해주세요."
                id="issuingAuthority"
                register={{
                  ...register('issuingAuthority'),
                }}
              />
            </FormControl>
          </Flex>
          <FormControl isInvalid={Boolean(errors.link)}>
            <FormLabel htmlFor="link">링크</FormLabel>
            <FormTextInput
              placeholder="URL 입력"
              id="link"
              register={{
                ...register('link', {
                  pattern: {
                    value: CONSTANTS.URL_PATTERN,
                    message: '올바른 URL 형식이 아닙니다',
                  },
                }),
              }}
              error={errors.link}
            />
          </FormControl>

          <FormControl isInvalid={Boolean(errors.description)}>
            <FormLabel htmlFor="description">기타</FormLabel>
            <FormTextarea
              h={'3rem'}
              placeholder="기타 필요한 설명이 있다면 입력해주세요."
              id="description"
              register={{ ...register('description') }}
              error={errors.description}
              autoComplete="off"
              spellCheck="false"
              resize="none"
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

export default AwardForm;
