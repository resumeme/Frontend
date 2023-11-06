import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { ActivityForm } from '~/components/organisms/ResumeCategoryActivity';
import { AwardForm } from '~/components/organisms/ResumeCategoryAwards';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import ResumeCategory from '~/components/organisms/ResumeCategoryCareer/ResumeCategory';
import { LanguageForm } from '~/components/organisms/ResumeCategoryLanguage';
import { ProjectForm } from '~/components/organisms/ResumeCategoryProject';
import { TrainingForm } from '~/components/organisms/ResumeCategoryTraining';
import {
  CareerDetails,
  TraningDetails,
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
import { ResumeBasicInput } from '~/components/organisms/ResumeBasicInput';

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
    <>
      <Box width="960px">
        <ResumeBasicInput />
        <ResumeCategory
          categoryType="업무경험"
          detailsComponent={<CareerDetails data={careersData} />}
        >
          <CareerForm />
        </ResumeCategory>
        <ResumeCategory
          categoryType="프로젝트"
          detailsComponent={<ProjectDetails data={projectData} />}
        >
          <ProjectForm />
        </ResumeCategory>
        <ResumeCategory
          categoryType="수상 및 경력"
          detailsComponent={<AwardDetails data={awardData} />}
        >
          <AwardForm />
        </ResumeCategory>
        <ResumeCategory
          categoryType="외국어"
          detailsComponent={<LanguageDetails data={languageData} />}
        >
          <LanguageForm />
        </ResumeCategory>
        <ResumeCategory
          categoryType="교육"
          detailsComponent={<TraningDetails data={trainingsData} />}
        >
          <TrainingForm />
        </ResumeCategory>
        <ResumeCategory
          categoryType="활동"
          detailsComponent={<ActivityDetails data={activitiesData} />}
        >
          <ActivityForm />
        </ResumeCategory>
      </Box>
    </>
  );
};

export default EditResumeTemplate;
