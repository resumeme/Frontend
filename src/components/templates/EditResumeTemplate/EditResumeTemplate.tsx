import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ResumeBasicInput } from '~/components/organisms/ResumeBasicInput';
import { ActivityForm } from '~/components/organisms/ResumeCategoryActivity';
import { AwardForm } from '~/components/organisms/ResumeCategoryAwards';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
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
import { useGetResumeActivities } from '~/queries/resume/details/useGetResumeActivities';
import { useGetResumeAward } from '~/queries/resume/details/useGetResumeAward';
import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';
import { useGetResumeLanguage } from '~/queries/resume/details/useGetResumeLanguage';
import { useGetResumeProject } from '~/queries/resume/details/useGetResumeProject';
import { useGetResumeTraining } from '~/queries/resume/details/useGetResumeTraining';

const EditResumeTemplate = () => {
  const { id: resumeId = '' } = useParams();
  const { data: careersData } = useGetResumeCareer({ resumeId });
  const { data: trainingsData } = useGetResumeTraining({ resumeId });
  const { data: languageData } = useGetResumeLanguage({ resumeId });
  const { data: projectData } = useGetResumeProject({ resumeId });
  const { data: activitiesData } = useGetResumeActivities({
    resumeId,
  });
  const { data: awardData } = useGetResumeAward({ resumeId });
  /**TODO - 이력서 작성자가 사용자 본인과 일치하는지를 판단하기 */
  const isCurrentUser = true;

  return (
    <Flex
      width="960px"
      direction="column"
      gap="3rem"
    >
      <ResumeBasicInput />

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
