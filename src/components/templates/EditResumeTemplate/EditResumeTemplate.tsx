import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import { ResumeBasicInput } from '~/components/organisms/ResumeBasicInput';
import { ActivityForm } from '~/components/organisms/ResumeCategoryActivity';
import { AwardForm } from '~/components/organisms/ResumeCategoryAwards';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
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
import Career from '~/types/career';

const EditResumeTemplate = () => {
  const { id: resumeId } = useParams() as { id: string };

  const { data: careersData } = useGetResumeCareer({ resumeId });
  const { data: trainingsData } = useGetResumeTraining({ resumeId });
  const { data: languageData } = useGetResumeLanguage({ resumeId });
  const { data: projectData } = useGetResumeProject({ resumeId });
  const { data: activitiesData } = useGetResumeActivities({
    resumeId,
  });
  const { data: awardData } = useGetResumeAward({ resumeId });
  return (
    <Flex
      width="960px"
      direction="column"
      gap="3rem"
    >
      <ResumeBasicInput />

      <CategoryContainer>
        <CareerForm />
        <BorderBox variant={'wide'}>
          {careersData?.map((data: Career, index: number) => {
            return (
              <CareerDetails
                key={index}
                data={data}
              />
            );
          })}
        </BorderBox>
      </CategoryContainer>

      <CategoryContainer>
        <ProjectForm />
        <ProjectDetails data={projectData} />
      </CategoryContainer>

      <CategoryContainer>
        <AwardForm />
        <AwardDetails data={awardData} />
      </CategoryContainer>

      <CategoryContainer>
        <LanguageForm />
        <LanguageDetails data={languageData} />
      </CategoryContainer>

      <CategoryContainer>
        <TrainingForm />
        <TrainingDetails data={trainingsData} />
      </CategoryContainer>

      <CategoryContainer>
        <ActivityForm />
        <ActivityDetails data={activitiesData} />
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
