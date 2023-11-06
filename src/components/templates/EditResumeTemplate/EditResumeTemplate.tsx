import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import AwardForm from '~/components/organisms/ResumeCategoryAwards/AwardForm';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import ResumeCategory from '~/components/organisms/ResumeCategoryCareer/ResumeCategory';
import { ProjectForm } from '~/components/organisms/ResumeCategoryProject';
import { TrainingForm } from '~/components/organisms/ResumeCategoryTraining';
import { CareerDetails, TraningDetails } from '~/components/organisms/ResumeDetails';
import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';
import { useGetResumeTraining } from '~/queries/resume/details/useGetResumeTraining';
import { ResumeBasicInput } from '~/components/organisms/ResumeBasicInput';

const EditResumeTemplate = () => {
  const { id: resumeId } = useParams() as { id: string };
  const { data: careersData } = useGetResumeCareer({ resumeId });
  const { data: trainingsData } = useGetResumeTraining({ resumeId });
  return (
    <>
      <Box width={'960px'}>
        <ResumeBasicInput />
        <ResumeCategory
          categoryType="업무경험"
          detailsComponent={<CareerDetails data={careersData} />}
        >
          <CareerForm />
        </ResumeCategory>
        <ResumeCategory
          categoryType="프로젝트"
          detailsComponent={<></>}
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
      </Box>
    </>
  );
};

export default EditResumeTemplate;
