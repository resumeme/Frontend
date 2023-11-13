import { Divider, Flex } from '@chakra-ui/react';
import React from 'react';
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
import { Activity } from '~/types/activity';
import { Award } from '~/types/award';
import Career from '~/types/career';
import { Language } from '~/types/language';
import { Project } from '~/types/project';
import { Training } from '~/types/training';

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
        <CategoryDetails
          arrayData={careersData}
          DetailsComponent={CareerDetails}
        />
      </CategoryContainer>

      <CategoryContainer>
        <ProjectForm />
        <CategoryDetails
          arrayData={projectData}
          DetailsComponent={ProjectDetails}
        />
      </CategoryContainer>

      <CategoryContainer>
        <AwardForm />
        <CategoryDetails
          arrayData={awardData}
          DetailsComponent={AwardDetails}
        />
      </CategoryContainer>

      <CategoryContainer>
        <LanguageForm />
        <CategoryDetails
          arrayData={languageData}
          DetailsComponent={LanguageDetails}
        />
      </CategoryContainer>

      <CategoryContainer>
        <TrainingForm />
        <CategoryDetails
          arrayData={trainingsData}
          DetailsComponent={TrainingDetails}
        />
      </CategoryContainer>

      <CategoryContainer>
        <ActivityForm />
        <CategoryDetails
          arrayData={activitiesData}
          DetailsComponent={ActivityDetails}
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

type Data = Career | Project | Award | Language | Training | Activity;

type CategoryDetailsProps<T extends Data> = {
  arrayData: T[];
  DetailsComponent: React.ComponentType<ComponentProps<T>>;
};

type ComponentProps<T extends Data> = {
  data: T;
};

const CategoryDetails = <T extends Data>({
  arrayData,
  DetailsComponent,
}: CategoryDetailsProps<T>) => {
  return (
    <React.Fragment>
      {arrayData?.length > 0 && (
        <BorderBox variant={'wide'}>
          {arrayData.map((data: T, index: number) => (
            <React.Fragment key={index}>
              <DetailsComponent data={data} />
              {index !== arrayData.length - 1 && (
                <Divider
                  my={'3rem'}
                  borderColor={'gray.300'}
                />
              )}
            </React.Fragment>
          ))}
        </BorderBox>
      )}
    </React.Fragment>
  );
};
