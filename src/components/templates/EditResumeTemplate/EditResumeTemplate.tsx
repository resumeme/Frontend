import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { ResumeBasicInput } from '~/components/organisms/ResumeBasicInput';
import { ActivityForm } from '~/components/organisms/ResumeCategoryActivity';
import { AwardForm } from '~/components/organisms/ResumeCategoryAwards';
import { CareerForm } from '~/components/organisms/ResumeCategoryCareer';
import { ResumeCategoryDetails } from '~/components/organisms/ResumeCategoryDetails';
import { LanguageForm } from '~/components/organisms/ResumeCategoryLanguage';
import { ProjectForm } from '~/components/organisms/ResumeCategoryProject';
import { TrainingForm } from '~/components/organisms/ResumeCategoryTraining';
import {
  CareerDetails,
  TrainingDetails,
  LanguageDetails,
  ProjectDetails,
  AwardDetails,
  ActivityDetails,
} from '~/components/organisms/ResumeDetails';
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

  return (
    <Flex
      direction="column"
      gap="3rem"
    >
      <ResumeBasicInput basicInfo={basicInfo} />

      <CategoryContainer>
        <CareerForm />
        <ResumeCategoryDetails
          arrayData={careersData}
          DetailsComponent={CareerDetails}
          FormComponent={CareerForm}
          isCurrentUser={isCurrentUser}
        />
      </CategoryContainer>

      <CategoryContainer>
        <ProjectForm />
        <ResumeCategoryDetails
          arrayData={projectData}
          DetailsComponent={ProjectDetails}
          FormComponent={ProjectForm}
          isCurrentUser={isCurrentUser}
        />
      </CategoryContainer>

      <CategoryContainer>
        <AwardForm />
        <ResumeCategoryDetails
          arrayData={awardData}
          DetailsComponent={AwardDetails}
          FormComponent={AwardForm}
          isCurrentUser={isCurrentUser}
        />
      </CategoryContainer>

      <CategoryContainer>
        <LanguageForm />
        <ResumeCategoryDetails
          arrayData={languageData}
          DetailsComponent={LanguageDetails}
          FormComponent={LanguageForm}
          isCurrentUser={isCurrentUser}
        />
      </CategoryContainer>

      <CategoryContainer>
        <TrainingForm />
        <ResumeCategoryDetails
          arrayData={trainingsData}
          DetailsComponent={TrainingDetails}
          FormComponent={TrainingForm}
          isCurrentUser={isCurrentUser}
        />
      </CategoryContainer>

      <CategoryContainer>
        <ActivityForm />
        <ResumeCategoryDetails
          arrayData={activitiesData}
          DetailsComponent={ActivityDetails}
          FormComponent={ActivityForm}
          isCurrentUser={isCurrentUser}
        />
      </CategoryContainer>
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

const CategoryContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      direction={'column'}
      gap={'1rem'}
    >
      {children}
    </Flex>
  );
};
