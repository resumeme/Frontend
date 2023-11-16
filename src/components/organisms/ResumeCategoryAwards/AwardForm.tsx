import { Flex, VStack, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
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
import { usePostResumeAward } from '~/queries/resume/create/usePostResumeAward';
import { Award } from '~/types/award';

const AwardForm = () => {
  const { id: resumeId } = useParams() as { id: string };
  const { mutate: postResumeAward, isSuccess } = usePostResumeAward(resumeId);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Award>();

  const onSubmit: SubmitHandler<Award> = (resumeAward) => {
    if (!resumeId) {
      return;
    }
    postResumeAward({ resumeId, resumeAward });
    if (isSuccess) {
      handleDeleteForm();
      toast({
        description: '성공적으로 저장되었습니다.',
      });
    }
  };

  const { isOpen, onClose, showForm, setShowForm, handleCancel, handleDeleteForm } =
    useHandleFormState(isDirty, reset);
  return (
    <Flex
      direction={'column'}
      gap={'1rem'}
    >
      <CategoryAddHeader
        categoryTitle="수상 및 자격증"
        onAddItem={() => setShowForm(true)}
      />
      {showForm && (
        <BorderBox variant={'wide'}>
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
                proceed={handleDeleteForm}
              />
              <SubmitButtonGroup onCancel={handleCancel} />
            </VStack>
          </form>
        </BorderBox>
      )}
    </Flex>
  );
};

export default AwardForm;
