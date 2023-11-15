import { Flex, VStack, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { patchResumeAward } from '~/api/resume/edit/patchResumeAward';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FormLabel } from '~/components/atoms/FormLabel';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { FormControl } from '~/components/molecules/FormControl';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import CONSTANTS from '~/constants';
import { useHandleFormState } from '~/hooks/useHandleFormState';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { usePostResumeAward } from '~/queries/resume/create/usePostResumeAward';
import { usePatchCategoryBlock } from '~/queries/resume/usePatchCategoryBlock';
import { Award } from '~/types/award';
import { FormComponentProps } from '~/types/props/formComponentProps';

const AwardForm = ({
  defaultValues,
  isEdit = false,
  blockId,
  quitEdit,
}: FormComponentProps<Award>) => {
  const { id: resumeId } = useParams() as { id: string };
  const { mutate: postResumeAwardMutate, isSuccess: isPostSuccess } = usePostResumeAward(resumeId);
  const { mutate: patchResumeAwardMutate, isSuccess: isPatchSuccess } = usePatchCategoryBlock(
    patchResumeAward,
    categoryKeys.award(resumeId),
  );
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Award>({ defaultValues });

  const onSubmit: SubmitHandler<Award> = (body) => {
    if (!resumeId) {
      return;
    }
    if (!isEdit) {
      postResumeAwardMutate({ resumeId, resumeAward: body });
    } else if (isEdit && blockId) {
      patchResumeAwardMutate({ resumeId, blockId, body });
    }
    if (isPostSuccess || isPatchSuccess) {
      handleDeleteForm();
      toast({
        description: '성공적으로 저장되었습니다.',
      });
    }
    if (isPatchSuccess) {
      if (quitEdit) {
        quitEdit();
      }
    }
  };

  const { isOpen, onClose, showForm, setShowForm, handleCancel, handleDeleteForm } =
    useHandleFormState(isDirty, reset);

  useEffect(() => {
    if (isEdit) {
      setShowForm(true);
    }
  }, [isEdit, setShowForm]);

  return (
    <Flex
      direction={'column'}
      gap={'1rem'}
    >
      {!isEdit && (
        <CategoryAddHeader
          categoryTitle="수상 및 자격증"
          onAddItem={() => setShowForm(true)}
        />
      )}
      {showForm && (
        <BorderBox
          border={isEdit ? 'none' : undefined}
          p={isEdit ? 0 : '2rem'}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={'1.25rem'}>
              <FormControl isInvalid={Boolean(errors.certificationTitle)}>
                <FormLabel
                  htmlFor="certificationTitle"
                  w={'8.625rem'}
                  isRequired
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
                w={'full'}
                gap={'3rem'}
              >
                <FormControl
                  w={'60%'}
                  isInvalid={Boolean(errors.acquisitionDate)}
                >
                  <FormLabel w={'8.625rem'}>취득 년월</FormLabel>
                  <FormDateInput
                    register={{
                      ...register('acquisitionDate'),
                    }}
                  />
                </FormControl>

                <FormControl isInvalid={Boolean(errors.issuingAuthority)}>
                  <FormLabel
                    htmlFor="issuingAuthority"
                    w={'fit-content'}
                  >
                    수여 기관
                  </FormLabel>
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
                <FormLabel
                  htmlFor="link"
                  w={'8.625rem'}
                >
                  링크
                </FormLabel>
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
                <FormLabel
                  htmlFor="description"
                  w={'8.625rem'}
                >
                  설명
                </FormLabel>
                <FormTextarea
                  h={'16.625rem'}
                  placeholder="내용을 입력해주세요."
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
                  handleDeleteForm();
                  if (isEdit && quitEdit) quitEdit();
                }}
              />
              <SubmitButtonGroup
                onCancel={() => {
                  handleCancel();
                  if (isEdit && quitEdit) quitEdit();
                }}
              />
            </VStack>
          </form>
        </BorderBox>
      )}
    </Flex>
  );
};

export default AwardForm;
