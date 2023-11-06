import { useParams } from 'react-router-dom';
import { AwardForm } from '~/components/organisms/ResumeCategoryAwards';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import ResumeCategory from '~/components/organisms/ResumeCategoryCareer/ResumeCategory';
import { ProjectForm } from '~/components/organisms/ResumeCategoryProject';
import { TrainingForm } from '~/components/organisms/ResumeCategoryTraining';
import {
  CareerDetails,
  TraningDetails,
  ProjectDetails,
} from '~/components/organisms/ResumeDetails';
import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';
import { useGetResumeProject } from '~/queries/resume/details/useGetResumeProject';
import { useGetResumeTraining } from '~/queries/resume/details/useGetResumeTraining';

const EditResumeTemplate = () => {
  const { id: resumeId } = useParams() as { id: string };
  const { data: careersData } = useGetResumeCareer({ resumeId });
  const { data: trainingsData } = useGetResumeTraining({ resumeId });
  const { data: projectData } = useGetResumeProject({ resumeId });
  return (
    <>
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
        detailsComponent={<></>}
      >
        <AwardForm />
      </ResumeCategory>
      <ResumeCategory
        categoryType="교육"
        detailsComponent={<TraningDetails data={trainingsData} />}
      >
        <TrainingForm />
      </ResumeCategory>
    </>
  );
};

export default EditResumeTemplate;
