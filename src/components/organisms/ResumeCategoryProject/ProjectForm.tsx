import { HStack, Flex, Select, Tag, VStack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import { useStringToArray } from '~/hooks/useStringToArray';
import { usePostResumeProject } from '~/queries/resume/create/usePostRusumeProject';
import { Project } from '~/types/project';

type ProjectFormProps = {
  setIsShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectForm = ({ setIsShowForm }: ProjectFormProps) => {
  const [skills, handleSkills] = useStringToArray();

  const { id: resumeId } = useParams();
  const { mutate: postResumeProject } = usePostResumeProject();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<Project>({
    defaultValues: {
      isTeam: true,
    },
  });

  const onSubmit: SubmitHandler<Project> = (resumeProject) => {
    if (!resumeId) {
      return;
    }
    resumeProject.skills = skills;
    resumeProject.isTeam = Boolean(resumeProject.isTeam);

    postResumeProject({ resumeId, resumeProject });
  };

  return (
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
              register={{ ...register('projectName', { required: '프로젝트명을 입력하세요' }) }}
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
            <HStack wrap={'wrap'}>
              {skills &&
                skills.map((skill) => (
                  <Tag
                    bg={'primary.100'}
                    key={uuidv4()}
                  >
                    {skill}
                  </Tag>
                ))}
            </HStack>
          </Flex>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="projectContent">상세 내용</FormLabel>
          <FormTextarea
            placeholder="프로젝트에 대한 내용을 입력해주세요."
            id="projectContent"
            register={{ ...register('projectContent') }}
            errors={errors}
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
                  value: /^(https?:\/\/)?([\w.-]+\.\w{2,})([\w\W]*)$/,
                  message: '올바른 URL 형식이 아닙니다',
                },
              }),
            }}
          />
        </FormControl>
        <SubmitButtonGroup
          setIsShow={setIsShowForm}
          isDirty={isDirty}
        />
      </VStack>
    </form>
  );
};

export default ProjectForm;
