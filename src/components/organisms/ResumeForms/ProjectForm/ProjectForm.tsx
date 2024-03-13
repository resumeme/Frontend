import { Box, Flex, Select, Tooltip, useDisclosure } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { postResumeProject } from '~/api/resume/create/postResumeProject';
import { patchResumeProject } from '~/api/resume/edit/patchResumeProject';
import { FormLabel } from '~/components/atoms/FormLabel';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { DynamicTags } from '~/components/molecules/DynamicTags';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import CONSTANTS from '~/constants';
import { useStringToArray } from '~/hooks/useStringToArray';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticPatchCategory } from '~/queries/resume/useOptimisticPatchCategory';
import { useOptimisticPostCategory } from '~/queries/resume/useOptimsticPostCategory';
import { Project } from '~/types/project';
import { FormComponentProps } from '~/types/props/formComponentProps';

const ProjectForm = ({
  defaultValues,
  isEdit = false,
  blockId,
  onCancel,
}: FormComponentProps<Project>) => {
  const { resumeId = '' } = useParams();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Project>({
    defaultValues: defaultValues ? { ...defaultValues, skills: [] } : { team: true },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate: postProject } = useOptimisticPostCategory({
    mutationFn: postResumeProject,
    TARGET_QUERY_KEY: categoryKeys.project(resumeId),
    onMutateSuccess: onCancel,
  });
  const { mutate: patchProject } = useOptimisticPatchCategory({
    mutationFn: patchResumeProject,
    TARGET_QUERY_KEY: categoryKeys.project(resumeId),
    onMutateSuccess: onCancel,
  });

  const [skills, handleSkills, handleDeleteSkills, initializeSkills] = useStringToArray(
    defaultValues?.skills,
  );

  const onSubmit: SubmitHandler<Project> = (body) => {
    if (!resumeId) {
      return;
    }
    body.skills = skills;
    body.team = Boolean(body.team);
    if (!isEdit) {
      postProject(
        { resumeId, body },
        {
          onSuccess: initializeSkills,
        },
      );
    } else if (isEdit && blockId) {
      patchProject(
        { resumeId, blockId, body },
        {
          onSuccess: initializeSkills,
        },
      );
    }
  };

  return (
    <Flex
      direction={'column'}
      gap={'1rem'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          justify={'center'}
          direction={'column'}
          gap={'1.25rem'}
        >
          <Flex
            w={'full'}
            rowGap={'1rem'}
            justifyContent={'space-between'}
            wrap={'wrap'}
          >
            <FormControl
              w={{ base: 'full', md: '60%' }}
              isInvalid={Boolean(errors.projectName)}
            >
              <FormLabel
                htmlFor="projectName"
                isRequired
              >
                프로젝트명
              </FormLabel>
              <FormTextInput
                placeholder="프로젝트"
                id="projectName"
                register={{
                  ...register('projectName', { required: '프로젝트명을 입력하세요' }),
                }}
                error={errors.projectName}
              />
            </FormControl>
            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.productionYear)}
            >
              <FormLabel
                flexShrink={0}
                isRequired
              >
                제작 년도
              </FormLabel>
              <Select
                defaultValue={2023}
                borderColor={'gray.300'}
                maxH={'3.125rem'}
                h={'3.125rem'}
                {...register('productionYear', {
                  required: '제작 년도를 선택해주세요.',
                  valueAsNumber: true,
                })}
              >
                {Array.from({ length: 24 }, (_, index) => {
                  const year = 2023 - index;
                  return (
                    <option
                      key={year}
                      value={year}
                    >
                      {year}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </Flex>
          <Flex
            w={'full'}
            columnGap={'3rem'}
            rowGap={'1rem'}
            justifyContent={'space-between'}
            wrap={'wrap'}
          >
            <FormControl w={'fit-content'}>
              <FormLabel flexShrink={0}>팀 구성</FormLabel>
              <Select
                borderColor={'gray.300'}
                maxH={'3.125rem'}
                h={'3.125rem'}
                {...register('team')}
              >
                <option value="true">팀</option>
                <option value="">개인</option>
              </Select>
            </FormControl>
            <FormControl
              w={{ base: 'full', md: '70%' }}
              isInvalid={watch('team') ? Boolean(errors.teamMembers) : undefined}
            >
              <FormLabel
                isRequired={watch('team')}
                htmlFor="teamMembers"
              >
                팀 구성원
              </FormLabel>
              <FormTextInput
                placeholder="PM 1명, 디자이너 1명, 프론트엔드 3명, 백엔드 3명"
                isDisabled={!watch('team')}
                id="teamMembers"
                register={{
                  ...register('teamMembers', {
                    required: watch('team') ? '팀 구성을 입력해주세요.' : undefined,
                  }),
                }}
                error={errors.teamMembers}
              />
            </FormControl>
          </Flex>
          <FormControl>
            <FormLabel
              htmlFor="skills"
              flexShrink={0}
            >
              사용 스택
            </FormLabel>
            <Flex
              direction={'column'}
              gap={'0.5rem'}
              w={'full'}
            >
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
                  <FormTextInput
                    placeholder="사용한 기술 스택"
                    id="skills"
                    register={{ ...register('skills') }}
                    onKeyDown={handleSkills}
                  />
                </Box>
              </Tooltip>
              {skills.length > 0 && (
                <DynamicTags
                  handleItemDelete={handleDeleteSkills}
                  tagsArray={skills}
                />
              )}
            </Flex>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="projectContent">상세 내용</FormLabel>
            <FormTextarea
              placeholder="프로젝트에 대한 내용을 입력해주세요."
              id="projectContent"
              register={{ ...register('projectContent') }}
              error={errors.projectContent}
            />
          </FormControl>
          <FormControl isInvalid={Boolean(errors.projectUrl)}>
            <FormLabel htmlFor="projectUrl">저장소 링크</FormLabel>
            <FormTextInput
              placeholder="URL 입력"
              error={errors.projectUrl}
              id="projectUrl"
              register={{
                ...register('projectUrl', {
                  pattern: {
                    value: CONSTANTS.URL_PATTERN,
                    message: '올바른 URL 형식이 아닙니다',
                  },
                }),
              }}
            />
          </FormControl>
          <ConfirmModal
            isOpen={isOpen}
            onClose={onClose}
            message="작성하던 내용이 있습니다. 작성을 그만하시겠습니까?"
            proceed={() => {
              reset();
              onCancel();
            }}
          />
          <SubmitButtonGroup
            onCancel={() => {
              if (isDirty) {
                onOpen();
              } else {
                onCancel();
              }
            }}
          />
        </Flex>
      </form>
    </Flex>
  );
};

export default ProjectForm;
