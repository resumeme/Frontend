import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import ResumeCategory from '~/components/organisms/ResumeCategoryCareer/ResumeCategory';

const EditResumeTemplate = () => {
  return (
    <>
      <ResumeCategory categoryType="업무경험">
        <CareerForm />
      </ResumeCategory>
    </>
  );
};

export default EditResumeTemplate;
