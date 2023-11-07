import { VStack, HStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import { usePostResumeLanguage } from '~/queries/resume/create/usePostResumeLanguage';
import { Language } from '~/types/language';

type LanguageFormProps = {
  setIsShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const LanguageForm = ({ setIsShowForm }: LanguageFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<Language>();

  const { id: resumeId } = useParams();
  const { mutate } = usePostResumeLanguage();
  const navigate = useNavigate();
  const onSubmit = (resumeLanguage: Language) => {
    if (!resumeId) {
      /**TODO - 토스트 대체! */
      alert('존재하지 않는 이력서입니다.');
      navigate(-1);
      return;
    }
    mutate({ resumeId, resumeLanguage });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={'1.25rem'}>
        <FormControl isInvalid={Boolean(errors.language)}>
          <FormLabel isRequired>언어</FormLabel>
          <FormTextInput
            id="language"
            register={{ ...register('language', { required: '언어를 입력하세요' }) }}
            error={errors.language}
          />
        </FormControl>
        <HStack
          alignSelf={'stretch'}
          spacing={'3rem'}
        >
          <FormControl isInvalid={Boolean(errors.examName)}>
            <FormLabel isRequired>시험명</FormLabel>
            <FormTextInput
              id="examName"
              register={{ ...register('examName', { required: '시험명을 입력하세요.' }) }}
              error={errors.examName}
            />
          </FormControl>
          <FormControl isInvalid={Boolean(errors.scoreOrGrade)}>
            <FormLabel isRequired>점수 및 등급</FormLabel>
            <FormTextInput
              id="scoreOrGrade"
              register={{
                ...register('scoreOrGrade', { required: '점수 및 등급을 입력해주세요' }),
              }}
              error={errors.scoreOrGrade}
            />
          </FormControl>
        </HStack>
        <SubmitButtonGroup
          setIsShow={setIsShowForm}
          isDirty={isDirty}
        />
      </VStack>
    </form>
  );
};

export default LanguageForm;
