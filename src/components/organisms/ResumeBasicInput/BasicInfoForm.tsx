import { Box, Flex, Text, Tooltip } from '@chakra-ui/react';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { DynamicTags } from '~/components/molecules/DynamicTags';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { useStringToArray } from '~/hooks/useStringToArray';
import { usePatchResumeBasicInfo } from '~/queries/resume/create/usePatchResumeBasicInfo';
import { BasicInfo } from '~/types/basicInfo';

type BasicInfoFormProps = Omit<BasicInfo, 'title' | 'ownerInfo'> & {
  onSave: () => void;
};

const BasicInfoForm = ({ position, skills: defaultSkills, introduce }: BasicInfoFormProps) => {
  const { mutate: patchResumeBasicInfo } = usePatchResumeBasicInfo();
  const { id: resumeId = '' } = useParams();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInfo>();

  const onSubmit: SubmitHandler<BasicInfo> = (data) => {
    const resumeBasicInfo = data;
    patchResumeBasicInfo({ resumeId, resumeBasicInfo });
  };

  const [skills, handleSkillsetChange, handleItemDelete] = useStringToArray();
  const introduceValue = useWatch({ name: 'introduce', control });
  const introduceValueLength = introduceValue ? introduceValue.length : 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        gap={3}
        direction={'column'}
      >
        <Tooltip
          hasArrow
          placement="right"
          label={`지원하는 포지션을 적어주세요!`}
          aria-label="tooltip"
          borderRadius={'xl'}
          fontSize={'sm'}
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
                defaultValue={position ?? null}
              />
            </FormControl>
          </Box>
        </Tooltip>
        <Tooltip
          hasArrow
          placement="right"
          label={`엔터 키(Enter)로 구분할 수 있어요!`}
          aria-label="tooltip"
          borderRadius={'xl'}
          fontSize={'sm'}
          bg={'gray.300'}
          color={'gray.600'}
        >
          <Box>
            <FormControl isInvalid={!!errors.skills}>
              <Flex
                gap={2}
                direction={'column'}
                w={'full'}
              >
                <FormTextInput
                  id="skills"
                  register={{
                    ...register('skills', {
                      pattern: {
                        value: /^[a-zA-Z가-힣\s]*$/,
                        message: '영어, 한글, 공백만 입력 가능합니다.',
                      },
                    }),
                  }}
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="보유한 기술 스택"
                  onKeyDown={handleSkillsetChange}
                  error={errors.skills}
                  defaultValue={defaultSkills}
                />
                {skills.length > 0 && (
                  <DynamicTags
                    tagsArray={skills}
                    handleItemDelete={handleItemDelete}
                  />
                )}
              </Flex>
            </FormControl>
          </Box>
        </Tooltip>
        <Box>
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
              error={errors.introduce}
              height="100px"
              width="full"
              placeholder="간략한 자기소개 (100자 이내)"
              defaultValue={introduce ?? null}
              resize="none"
              autoComplete="off"
              spellCheck="false"
            />
          </FormControl>
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
        </Box>
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
      </Flex>
    </form>
  );
};

export default BasicInfoForm;
