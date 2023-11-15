import { Flex, Select, VStack, useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { patchResumeProject } from '~/api/resume/edit/patchResumeProject';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FormLabel } from '~/components/atoms/FormLabel';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { DynamicTags } from '~/components/molecules/DynamicTags';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import CONSTANTS from '~/constants';
import { useHandleFormState } from '~/hooks/useHandleFormState';
import { useStringToArray } from '~/hooks/useStringToArray';
import { usePostResumeProject } from '~/queries/resume/create/usePostRusumeProject';
import { Project } from '~/types/project';
import { FormComponentProps } from '~/types/props/formComponentProps';

const ProjectForm = ({
  defaultValues,
  isEdit = false,
  blockId,
  quitEdit,
}: FormComponentProps<Project>) => {
  const [skills, handleSkills, handleDeleteSkills] = useStringToArray();

  const { id: resumeId } = useParams();
  const { mutate: postResumeProjectMutate, isSuccess: isPostSuccess } = usePostResumeProject();
  const { mutate: patchResumeProjectMutate, isSuccess: isPatchSuccess } = useMutation({
    mutationFn: patchResumeProject,
  });
  const toast = useToast();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Project>({
    defaultValues: defaultValues ?? { isTeam: true },
  });

  const onSubmit: SubmitHandler<Project> = (body) => {
    if (!resumeId) {
      return;
    }
    body.skills = skills;
    body.isTeam = Boolean(body.isTeam);
    if (!isEdit) {
      postResumeProjectMutate({ resumeId, resumeProject: body });
    } else if (isEdit && blockId) {
      patchResumeProjectMutate({ resumeId, blockId, body });
    }
    if (isPostSuccess || isPatchSuccess) {
      handleDeleteForm();
      toast({
        description: '성공적으로 저장되었습니다.',
      });
    }
  };

  const { isOpen, onClose, showForm, setShowForm, handleCancel, handleDeleteForm } =
    useHandleFormState(isDirty, reset);

  useEffect(() => {
    if (isEdit) {
      setShowForm(true);
    }
  }, [isEdit, setShowForm]);

  return (
    <Flex
      direction={'column'}
      gap={'1rem'}
    >
      {!isEdit && (
        <CategoryAddHeader
          categoryTitle="프로젝트"
          onAddItem={() => setShowForm(true)}
        />
      )}
      {showForm && (
        <BorderBox
          border={isEdit ? 'none' : undefined}
          p={isEdit ? 0 : '2rem'}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={'1.25rem'}>
              <Flex
                w={'full'}
                gap={'3rem'}
              >
                <FormControl isInvalid={Boolean(errors.projectName)}>
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
                  w={'60%'}
                  isInvalid={Boolean(errors.productionYear)}
                >
                  <FormLabel
                    flexShrink={0}
                    w={'fit-content'}
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
                gap={'3rem'}
              >
                <FormControl w={'60%'}>
                  <FormLabel flexShrink={0}>팀 구성</FormLabel>
                  <Select
                    borderColor={'gray.300'}
                    maxH={'3.125rem'}
                    h={'3.125rem'}
                    {...register('isTeam')}
                  >
                    <option value="true">팀</option>
                    <option value="false">개인</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel
                    htmlFor="teamMembers"
                    w={'fit-content'}
                  >
                    팀 구성원
                  </FormLabel>
                  <FormTextInput
                    placeholder="관우, 장비"
                    isDisabled={!watch('isTeam')}
                    id="teamMembers"
                    register={{ ...register('teamMembers') }}
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
                  {/**TODO - 툴팁 */}
                  <FormTextInput
                    placeholder="엔터 키로 구분할 수 있습니다."
                    id="skills"
                    register={{ ...register('skills') }}
                    onKeyDown={handleSkills}
                  />
                  <DynamicTags
                    handleItemDelete={handleDeleteSkills}
                    tagsArray={skills}
                  />
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
                  handleDeleteForm();
                  if (isEdit && quitEdit) quitEdit();
                }}
              />
              <SubmitButtonGroup
                onCancel={() => {
                  handleCancel();
                  if (isEdit && quitEdit) quitEdit();
                }}
              />
            </VStack>
          </form>
        </BorderBox>
      )}
    </Flex>
  );
};

export default ProjectForm;
