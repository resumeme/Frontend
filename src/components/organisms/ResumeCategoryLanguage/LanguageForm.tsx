import { VStack, HStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { Language } from '~/types/language';

const LanguageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Language>();

  const onSubmit = (language: Language) => {
    console.log('language', language);
  };

  return (
    <BorderBox>
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
    </BorderBox>
  );
};

export default LanguageForm;
