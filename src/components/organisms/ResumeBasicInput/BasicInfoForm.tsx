import { Box, Flex, Textarea, Tooltip } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/atoms/Button';
import { FormTextInput } from '~/components/molecules/FormTextInput';

const BasicInfoForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors }, // FIXME MainTextarea에 errors 객체 넣어주기
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    console.log('values', values);
  });

  /* TODO api 함수 작성하기 */
  // const loadFormData = async () => {}
  // const saveFormData = async () => {}

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Tooltip
          hasArrow
          placement="right"
          label={`지원하는 포지션을 적어주세요!`}
          aria-label="tooltip"
          borderRadius={'xl'}
          fontSize={'sm'}
          px={3}
          bg={'gray.300'}
          color={'gray.600'}
        >
          <Box>
            <FormTextInput
              id="wantedPosition"
              register={{ ...register('wantedPosition') }}
              placeholder="희망 직무"
              autoComplete="off"
              spellCheck="false"
              mb={3}
            />
          </Box>
        </Tooltip>
        <Tooltip
          hasArrow
          placement="right"
          label={`쉼표 "," 로 구분할 수 있어요!`}
          aria-label="tooltip"
          borderRadius={'xl'}
          fontSize={'sm'}
          px={3}
          bg={'gray.300'}
          color={'gray.600'}
        >
          <Box>
            <FormTextInput
              id="skillset"
              register={{ ...register('skillset') }}
              mb={3}
              autoComplete="off"
              spellCheck="false"
              placeholder="보유한 기술 스택"
            />
          </Box>
        </Tooltip>
        {/* FIXME MainTextarea 컴포넌트로 변경하고 register 넣어주기 */}
        <Textarea
          // register={{ ...register('skillset') }}
          minHeight="190px"
          width={'full'}
          resize={'none'}
          borderColor={'gray.300'}
          focusBorderColor="primary.900"
          placeholder="자기소개 (100자 이내)"
          autoComplete="off"
          spellCheck="false"
          mb={3}
        />
        <Flex justify={'flex-end'}>
          <Button
            type="submit"
            size="xs"
          >
            저장
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default BasicInfoForm;
