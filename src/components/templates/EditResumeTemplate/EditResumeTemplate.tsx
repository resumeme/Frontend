import { useParams } from 'react-router-dom';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import ResumeCategory from '~/components/organisms/ResumeCategoryCareer/ResumeCategory';
import CareerDetail from '~/components/organisms/ResumeDetails/CareerDetails';
import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';

const EditResumeTemplate = () => {
  /**TODO - api 서버 오류 해결 후 주석 풀 것
   * ResumeCategory의 detailsComponent에 상세 컴포넌트 props 전달하기
   */
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
