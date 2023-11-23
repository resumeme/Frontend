import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { FeedbackCategoryReflectDetails } from '~/components/organisms/FeedbackCateogryReflectDetails';
import { ResumeBasicInput } from '~/components/organisms/ResumeBasicInput';
import { ActivityForm } from '~/components/organisms/ResumeCategoryActivity';
import { AwardForm } from '~/components/organisms/ResumeCategoryAwards';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import { LanguageForm } from '~/components/organisms/ResumeCategoryLanguage';
import ProjectForm from '~/components/organisms/ResumeCategoryProject/ProjectForm';
import { TrainingForm } from '~/components/organisms/ResumeCategoryTraining';
import {
  ActivityDetails,
  AwardDetails,
  CareerDetails,
  LanguageDetails,
  ProjectDetails,
  TrainingDetails,
} from '~/components/organisms/ResumeDetails';
import useUser from '~/hooks/useUser';
import {
  useGetResumeActivities,
  useGetResumeAward,
  useGetResumeCareer,
  useGetResumeLanguage,
  useGetResumeProject,
  useGetResumeTraining,
} from '~/queries/resume/details';
import { useGetResumeBasic } from '~/queries/resume/details/useGetResumeBasic';
import { useGetSnapshotResume } from '~/queries/resume/details/useGetSnapshotResume';
import { useGetResumeFeedbacks } from '~/queries/resume/feedback/useGetResumeFeedbacks';

const FeedbackReflectTemplate = () => {
  const { resumeId = '', eventId = '' } = useParams();
  const { data: basicInfo } = useGetResumeBasic({ resumeId });
  const { data: careersData } = useGetResumeCareer({ resumeId });
  const { data: trainingsData } = useGetResumeTraining({ resumeId });
  const { data: languageData } = useGetResumeLanguage({ resumeId });
  const { data: projectData } = useGetResumeProject({ resumeId });
  const { data: activitiesData } = useGetResumeActivities({ resumeId });
  const { data: awardData } = useGetResumeAward({ resumeId });

  const resumeAuthorId = basicInfo.ownerInfo?.id;
  const { user } = useUser();
  const isCurrentUser = resumeAuthorId === user?.id;

  const {
    data: { commentResponses },
  } = useGetResumeFeedbacks({ resumeId, eventId });

  const { data: snapshotData } = useGetSnapshotResume({
    resumeId,
  });

  return (
    <Flex
      width="960px"
      direction="column"
      gap="3rem"
    >
      <ResumeBasicInput basicInfo={basicInfo} />

      <CategoryContainer>
        <CareerForm />
        <FeedbackCategoryReflectDetails
          arrayData={careersData}
          DetailsComponent={CareerDetails}
          FormComponent={CareerForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.careers}
        />
      </CategoryContainer>

      <CategoryContainer>
        <ProjectForm />
        <FeedbackCategoryReflectDetails
          arrayData={projectData}
          DetailsComponent={ProjectDetails}
          FormComponent={ProjectForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.projects}
        />
      </CategoryContainer>

      <CategoryContainer>
        <AwardForm />
        <FeedbackCategoryReflectDetails
          arrayData={awardData}
          DetailsComponent={AwardDetails}
          FormComponent={AwardForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.certifications}
        />
      </CategoryContainer>

      <CategoryContainer>
        <LanguageForm />
        <FeedbackCategoryReflectDetails
          arrayData={languageData}
          DetailsComponent={LanguageDetails}
          FormComponent={LanguageForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.foreignLanguages}
        />
      </CategoryContainer>

      <CategoryContainer>
        <TrainingForm />
        <FeedbackCategoryReflectDetails
          arrayData={trainingsData}
          DetailsComponent={TrainingDetails}
          FormComponent={TrainingForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.trainings}
        />
      </CategoryContainer>

      <CategoryContainer>
        <ActivityForm />
        <FeedbackCategoryReflectDetails
          arrayData={activitiesData}
          DetailsComponent={ActivityDetails}
          FormComponent={ActivityForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.activities}
        />
      </CategoryContainer>
    </Flex>
  );
};

export default FeedbackReflectTemplate;

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
