import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import { ResumeBasicInput } from '~/components/organisms/ResumeBasicInput';
import { ResumeCategoryDetails } from '~/components/organisms/ResumeCategoryDetails';
import {
  CareerDetails,
  TrainingDetails,
  LanguageDetails,
  ProjectDetails,
  AwardDetails,
  ActivityDetails,
} from '~/components/organisms/ResumeDetails';
import {
  LanguageForm,
  AwardForm,
  ActivityForm,
  CareerForm,
  ProjectForm,
  TrainingForm,
} from '~/components/organisms/ResumeForms';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { useGetResumeActivities } from '~/queries/resume/details/useGetResumeActivities';
import { useGetResumeAward } from '~/queries/resume/details/useGetResumeAward';
import { useGetResumeBasic } from '~/queries/resume/details/useGetResumeBasic';
import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';
import { useGetResumeLanguage } from '~/queries/resume/details/useGetResumeLanguage';
import { useGetResumeProject } from '~/queries/resume/details/useGetResumeProject';
import { useGetResumeTraining } from '~/queries/resume/details/useGetResumeTraining';

const EditResumeTemplate = () => {
  const { resumeId = '' } = useParams();
  const { data: basicInfo } = useGetResumeBasic({ resumeId });
  const { data: careersData } = useGetResumeCareer({ resumeId });
  const { data: trainingsData } = useGetResumeTraining({ resumeId });
  const { data: languageData } = useGetResumeLanguage({ resumeId });
  const { data: projectData } = useGetResumeProject({ resumeId });
  const { data: activitiesData } = useGetResumeActivities({ resumeId });
  const { data: awardData } = useGetResumeAward({ resumeId });

  const resumeAuthorId = basicInfo.ownerInfo?.id;
  const { user } = useUser();
  const isCurrentUser = resumeAuthorId === user?.id;
  const navigate = useNavigate();

  const [isOpenStates, setIsOpenStates] = useState({
    activity: false,
    award: false,
    career: false,
    project: false,
    language: false,
    training: false,
  });

  return (
    <Flex
      direction="column"
      gap="3rem"
    >
      <ResumeBasicInput basicInfo={basicInfo} />
      <CategoryAddHeader
        categoryTitle={'프로젝트'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, project: true }))}
      />
      {isOpenStates.project && (
        <BorderBox p={'2rem'}>
          <ProjectForm onCancel={() => setIsOpenStates((prev) => ({ ...prev, project: false }))} />
        </BorderBox>
      )}
      {projectData && (
        <ResumeCategoryDetails
          arrayData={projectData}
          DetailsComponent={ProjectDetails}
          FormComponent={ProjectForm}
          isCurrentUser={isCurrentUser}
        />
      )}
      <CategoryAddHeader
        categoryTitle={'업무경험'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, career: true }))}
      />
      {isOpenStates.career && (
        <BorderBox p={'2rem'}>
          <CareerForm onCancel={() => setIsOpenStates((prev) => ({ ...prev, career: false }))} />
        </BorderBox>
      )}
      {careersData && (
        <ResumeCategoryDetails
          arrayData={careersData}
          DetailsComponent={CareerDetails}
          FormComponent={CareerForm}
          isCurrentUser={isCurrentUser}
        />
      )}
      <CategoryAddHeader
        categoryTitle={'활동'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, activity: true }))}
      />
      {isOpenStates.activity && (
        <BorderBox p={'2rem'}>
          <ActivityForm
            onCancel={() => setIsOpenStates((prev) => ({ ...prev, activity: false }))}
          />
        </BorderBox>
      )}
      {activitiesData && (
        <ResumeCategoryDetails
          arrayData={activitiesData}
          DetailsComponent={ActivityDetails}
          FormComponent={ActivityForm}
          isCurrentUser={isCurrentUser}
        />
      )}
      <CategoryAddHeader
        categoryTitle={'교육'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, training: true }))}
      />
      {isOpenStates.training && (
        <BorderBox p={'2rem'}>
          <TrainingForm
            onCancel={() => setIsOpenStates((prev) => ({ ...prev, training: false }))}
          />
        </BorderBox>
      )}
      {trainingsData && (
        <ResumeCategoryDetails
          arrayData={trainingsData}
          DetailsComponent={TrainingDetails}
          FormComponent={TrainingForm}
          isCurrentUser={isCurrentUser}
        />
      )}
      <CategoryAddHeader
        categoryTitle={'외국어'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, language: true }))}
      />
      {isOpenStates.language && (
        <BorderBox p={'2rem'}>
          <LanguageForm
            onCancel={() => setIsOpenStates((prev) => ({ ...prev, language: false }))}
          />
        </BorderBox>
      )}
      {languageData && (
        <ResumeCategoryDetails
          arrayData={languageData}
          DetailsComponent={LanguageDetails}
          FormComponent={LanguageForm}
          isCurrentUser={isCurrentUser}
        />
      )}
      <CategoryAddHeader
        categoryTitle={'수상'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, award: true }))}
      />
      {isOpenStates.award && (
        <BorderBox p={'2rem'}>
          <AwardForm onCancel={() => setIsOpenStates((prev) => ({ ...prev, award: false }))} />
        </BorderBox>
      )}
      {languageData && (
        <ResumeCategoryDetails
          arrayData={awardData}
          DetailsComponent={AwardDetails}
          FormComponent={AwardForm}
          isCurrentUser={isCurrentUser}
        />
      )}
      <Button
        alignSelf={'end'}
        size={'md'}
        onClick={() => navigate(appPaths.resumeDetail(parseInt(resumeId)), { replace: true })}
      >
        작성 완료
      </Button>
    </Flex>
  );
};

export default EditResumeTemplate;
