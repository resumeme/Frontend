import { Box, FormControl } from '@chakra-ui/react';
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
    <form onSubmit={onSubmit}>
      {/* NOTE 이력서 제목 */}
      <Box
        w={'992px'}
        mb={10}
        display={'flex'}
        alignItems={'center'}
      >
        <FormControl>
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
        </FormControl>
      </Box>
    </form>
  );
};

export default TitleInputForm;
