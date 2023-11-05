import { Box, Flex, Tag, Tooltip } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '~/components/atoms/Button';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { useStringToArray } from '~/hooks/useStringToArray';
import { usePostResumeBasicInfo } from '~/queries/usePostResumeBasicInfo';
import { BasicInfo, BasicInfoForm } from '~/types/userInfo';

const BasicInfoForm = () => {
  const { mutate: postResumeBasicInfo } = usePostResumeBasicInfo();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInfoForm>();

  const onSubmit: SubmitHandler<BasicInfoForm> = (data) => {
    data.skillset = skills;
    postResumeBasicInfo(data as BasicInfo);
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2));
      }, 3000);
    });
  };

  const [skills, handleSkillsetChange] = useStringToArray();

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
            <FormControl isInvalid={!!errors.position}>
              <FormTextInput
                id="position"
                register={{ ...register('position') }}
                placeholder="희망 직무"
                autoComplete="off"
                spellCheck="false"
                mb={3}
              />
            </FormControl>
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
            <FormControl isInvalid={!!errors.skillset}>
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
                onKeyDown={handleSkillsetChange}
                error={errors.skillset}
              />
            </FormControl>
            {skills && (
              <Flex
                gap={'0.5rem'}
                wrap={'wrap'}
              >
                {skills.map((skill) => (
                  <Tag
                    bg={'primary.100'}
                    key={skill}
                  >
                    {skill}
                  </Tag>
                ))}
              </Flex>
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
          my={3}
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
