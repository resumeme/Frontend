import { Box } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import TitleInput from '~/components/atoms/TitleInput/TitleInput';

const TitleInputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    /* TODO api 요청으로 기본 정보 저장하기 */
    console.log('values', values);
  });

  return (
    <Box
      w={'full'}
      mb={10}
    >
      <form onSubmit={onSubmit}>
        <TitleInput
          id="resumeTitle"
          register={{
            ...register('resumeTitle'),
          }}
          error={errors.resumeTitle}
          fontWeight={'semibold'}
          fontSize={'3xl'}
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </Box>
  );
};

export default TitleInputForm;
