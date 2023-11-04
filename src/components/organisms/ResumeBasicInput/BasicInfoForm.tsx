import { Box, Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '~/components/atoms/Button';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { BasicInfo } from '~/types/userInfo';

const BasicInfoForm = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInfo>();


  const onSubmit = handleSubmit((values) => {
    console.log('values', values);
  });

  /* TODO api 함수 작성하기 */
  // const loadFormData = async () => {}
  // const saveFormData = async () => {}

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              id="position"
              register={{ ...register('position') }}
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
              register={{
                ...register('skillset', {
                  pattern: {
                    value: /^[a-zA-Z가-힣\s]*$/,
                    message: '영어, 한글, 공백만 입력 가능합니다.',
                  },
                }),
              }}
              mb={3}
              autoComplete="off"
              spellCheck="false"
              placeholder="보유한 기술 스택"
            />
            {skills && (
              <HStack>
                {skills.map((skill) => (
                  <Text key={skill}>{skill}</Text>
                ))}
              </HStack>
            )}
          </Box>
        </Tooltip>
        {/* FIXME MainTextarea 컴포넌트로 변경하고 register 넣어주기 */}
        <FormTextarea
          id="introduce"
          errors={errors}
          register={{
            ...register('introduce', {
              maxLength: { value: 100, message: '100자 이내로 입력해주세요.' },
            }),
          }}
          h="190px"
          width={'full'}
          resize={'none'}
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
