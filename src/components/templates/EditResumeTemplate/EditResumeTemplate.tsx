import { useParams } from 'react-router-dom';
import AwardForm from '~/components/organisms/ResumeCategoryAwards/AwardForm';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import ResumeCategory from '~/components/organisms/ResumeCategoryCareer/ResumeCategory';
import { LanguageForm } from '~/components/organisms/ResumeCategoryLanguage';
import { TrainingForm } from '~/components/organisms/ResumeCategoryTraining';
import {
  CareerDetails,
  TraningDetails,
  LanguageDetails,
} from '~/components/organisms/ResumeDetails';
import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';
import { useGetResumeLanguage } from '~/queries/resume/details/useGetResumeLanguage';
import { useGetResumeTraining } from '~/queries/resume/details/useGetResumeTraining';

const EditResumeTemplate = () => {
  const { id: resumeId } = useParams() as { id: string };
  const { data: careersData } = useGetResumeCareer({ resumeId });
  const { data: trainingsData } = useGetResumeTraining({ resumeId });
  const { data: languageData } = useGetResumeLanguage({ resumeId });
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
      <ResumeCategory
        categoryType="수상 및 경력"
        detailsComponent={<></>}
      >
        <AwardForm />
      </ResumeCategory>
      <ResumeCategory
        categoryType="외국어"
        detailsComponent={<LanguageDetails data={languageData} />}
      >
        <LanguageForm />
      </ResumeCategory>
    </>
  );
};

export default EditResumeTemplate;
