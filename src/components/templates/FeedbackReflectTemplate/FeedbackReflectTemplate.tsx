import { Flex } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
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
import { appPaths } from '~/config/paths';
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
import { useGetFeedbacksSnapshot } from '~/queries/resume/feedback/useGetFeedbacksSnapshot';
import { usePatchFeedbackReflectComplete } from '~/queries/resume/feedback/usePatchFeedbackReflectComplete';
import { useGetMentorDetail } from '~/queries/user/details/useGetMentorDetail';

const FeedbackReflectTemplate = () => {
  const { resumeId = '' } = useParams();
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
    data: { commentResponses, mentorId },
  } = useGetFeedbacksSnapshot({ resumeId });

  const { data: snapshotData } = useGetSnapshotResume({
    resumeId,
  });

  const { data: mentorData } = useGetMentorDetail({ mentorId });

  const { mutate: patchReflectComplete } = usePatchFeedbackReflectComplete();
  const navigate = useNavigate();
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
          mentorData={mentorData}
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
          mentorData={mentorData}
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
          mentorData={mentorData}
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
          mentorData={mentorData}
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
          mentorData={mentorData}
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
          mentorData={mentorData}
        />
      </CategoryContainer>

      <Button
        onClick={() =>
          patchReflectComplete(
            { resumeId },
            {
              onSuccess: () => {
                navigate(appPaths.managementResume());
              },
            },
          )
        }
      >
        수정 완료
      </Button>
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
