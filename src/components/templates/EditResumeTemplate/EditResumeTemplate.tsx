import { useParams } from 'react-router-dom';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import ResumeCategory from '~/components/organisms/ResumeCategoryCareer/ResumeCategory';
import CareerDetail from '~/components/organisms/ResumeDetails/CareerDetails';
import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';

const EditResumeTemplate = () => {
  const { id: resumeId } = useParams() as { id: string };
  const { data: careersData } = useGetResumeCareer({ resumeId });
  return (
    <>
      <ResumeCategory
        categoryType="업무경험"
        detailsComponent={<CareerDetail data={careersData} />}
      >
        <CareerForm />
      </ResumeCategory>
    </>
  );
};

export default EditResumeTemplate;
