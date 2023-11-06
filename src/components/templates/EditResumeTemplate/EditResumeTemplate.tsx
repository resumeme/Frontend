import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import ResumeCategory from '~/components/organisms/ResumeCategoryCareer/ResumeCategory';
import CareerDetail from '~/components/organisms/ResumeDetails/CareerDetails';

const EditResumeTemplate = () => {
  return (
    <>
      <ResumeCategory
        categoryType="업무경험"
        detailsComponent={<CareerDetail />}
      >
        <CareerForm />
      </ResumeCategory>
    </>
  );
};

export default EditResumeTemplate;
