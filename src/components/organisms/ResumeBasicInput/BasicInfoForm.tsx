import { Box, Flex, FormControl, Tooltip, Text } from '@chakra-ui/react';
import { useForm, useWatch } from 'react-hook-form';
import { Button } from '~/components/atoms/Button';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';

const BasicInfoForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }, // FIXME MainTextarea에 errors 객체 넣어주기
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    console.log('values', values);
  });

  const introduceValue = useWatch({ name: 'introduce', control });
  const introduceValueLength = introduceValue ? introduceValue.length : 0;

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
        <FormControl isInvalid={Boolean(errors.introduce)}>
          <FormTextarea
            id="introduce"
            name="introduce"
            register={{
              ...register('introduce', {
                required: false,
                maxLength: {
                  value: 100,
                  message: `100자 이내로 입력해주세요. (${introduceValueLength}자)`,
                },
              }),
            }}
            errors={errors}
            height="150px"
            width="full"
            placeholder="간략한 자기소개 (100자 이내)"
            resize="none"
            autoComplete="off"
            spellCheck="false"
          />
          {introduceValue && (
            <Box
              textAlign={'right'}
              display={introduceValueLength <= 100 ? 'block' : 'none'}
              pr={2}
              m={0}
              zIndex="docked"
            >
              <Text
                as="span"
                fontSize="xs"
                color={introduceValueLength <= 100 ? 'gray.800' : 'red'}
              >
                {introduceValueLength}/100
              </Text>
            </Box>
          )}
          <Flex
            justify={'flex-end'}
            mt={3}
          >
            <Button
              type="submit"
              size="xs"
            >
              저장
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default BasicInfoForm;
