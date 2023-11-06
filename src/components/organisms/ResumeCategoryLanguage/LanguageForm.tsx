import { VStack, HStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { usePostResumeLanguage } from '~/queries/resume/create/usePostResumeLanguage';
import { Language } from '~/types/language';

const LanguageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
        {/**FIXME - 컴포넌트 따로 빼는 거 어떨지.. */}
        <HStack mt={'2rem'}>
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

export default LanguageForm;
