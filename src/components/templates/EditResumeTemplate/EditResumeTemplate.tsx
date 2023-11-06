import { useParams } from 'react-router-dom';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import ResumeCategory from '~/components/organisms/ResumeCategoryCareer/ResumeCategory';
import { TrainingForm } from '~/components/organisms/ResumeCategoryTraining';
import { CareerDetails, TraningDetails } from '~/components/organisms/ResumeDetails';
import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';
import { useGetResumeTraining } from '~/queries/resume/details/useGetResumeTraining';

const EditResumeTemplate = () => {
  const { id: resumeId } = useParams() as { id: string };
  const { data: careersData } = useGetResumeCareer({ resumeId });
  const { data: trainingsData } = useGetResumeTraining({ resumeId });
  return (
    <>
      <ResumeCategory
        categoryType="업무경험"
        detailsComponent={<CareerDetails data={careersData} />}
      >
        <CareerForm />
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
