import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import { FeedbackCategoryReflectDetails } from '~/components/organisms/FeedbackCateogryReflectDetails';
import { ResumeBasicInput } from '~/components/organisms/ResumeBasicInput';
import {
  ActivityDetails,
  AwardDetails,
  CareerDetails,
  LanguageDetails,
  ProjectDetails,
  TrainingDetails,
} from '~/components/organisms/ResumeDetails';
import {
  ActivityForm,
  AwardForm,
  CareerForm,
  LanguageForm,
  ProjectForm,
  TrainingForm,
} from '~/components/organisms/ResumeForms';
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

  const [isOpenStates, setIsOpenStates] = useState({
    activity: false,
    award: false,
    career: false,
    project: false,
    language: false,
    training: false,
  });

  return (
    <Flex
      width="960px"
      direction="column"
      gap="3rem"
    >
      <ResumeBasicInput basicInfo={basicInfo} />
      <CategoryAddHeader
        categoryTitle={'프로젝트'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, project: true }))}
      />
      {isOpenStates.project && (
        <BorderBox p={'2rem'}>
          <ProjectForm onCancel={() => setIsOpenStates((prev) => ({ ...prev, project: false }))} />
        </BorderBox>
      )}
      {projectData && (
        <FeedbackCategoryReflectDetails
          arrayData={projectData}
          DetailsComponent={ProjectDetails}
          FormComponent={ProjectForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.projects}
          mentorData={mentorData}
        />
      )}
      <CategoryAddHeader
        categoryTitle={'업무경험'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, career: true }))}
      />
      {isOpenStates.career && (
        <BorderBox p={'2rem'}>
          <CareerForm onCancel={() => setIsOpenStates((prev) => ({ ...prev, career: false }))} />
        </BorderBox>
      )}
      {careersData && (
        <FeedbackCategoryReflectDetails
          arrayData={careersData}
          DetailsComponent={CareerDetails}
          FormComponent={CareerForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.careers}
          mentorData={mentorData}
        />
      )}
      <CategoryAddHeader
        categoryTitle={'활동'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, activity: true }))}
      />
      {isOpenStates.activity && (
        <BorderBox p={'2rem'}>
          <ActivityForm
            onCancel={() => setIsOpenStates((prev) => ({ ...prev, activity: false }))}
          />
        </BorderBox>
      )}
      {activitiesData && (
        <FeedbackCategoryReflectDetails
          arrayData={activitiesData}
          DetailsComponent={ActivityDetails}
          FormComponent={ActivityForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.activities}
          mentorData={mentorData}
        />
      )}
      <CategoryAddHeader
        categoryTitle={'교육'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, training: true }))}
      />
      {isOpenStates.training && (
        <BorderBox p={'2rem'}>
          <TrainingForm
            onCancel={() => setIsOpenStates((prev) => ({ ...prev, training: false }))}
          />
        </BorderBox>
      )}
      {trainingsData && (
        <FeedbackCategoryReflectDetails
          arrayData={trainingsData}
          DetailsComponent={TrainingDetails}
          FormComponent={TrainingForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.trainings}
          mentorData={mentorData}
        />
      )}
      <CategoryAddHeader
        categoryTitle={'외국어'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, language: true }))}
      />
      {isOpenStates.language && (
        <BorderBox p={'2rem'}>
          <LanguageForm
            onCancel={() => setIsOpenStates((prev) => ({ ...prev, language: false }))}
          />
        </BorderBox>
      )}
      {languageData && (
        <FeedbackCategoryReflectDetails
          arrayData={languageData}
          DetailsComponent={LanguageDetails}
          FormComponent={LanguageForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.foreignLanguages}
          mentorData={mentorData}
        />
      )}
      <CategoryAddHeader
        categoryTitle={'수상'}
        onAddItem={() => setIsOpenStates((prev) => ({ ...prev, award: true }))}
      />
      {isOpenStates.award && (
        <BorderBox p={'2rem'}>
          <AwardForm onCancel={() => setIsOpenStates((prev) => ({ ...prev, award: false }))} />
        </BorderBox>
      )}
      {awardData && (
        <FeedbackCategoryReflectDetails
          arrayData={awardData}
          DetailsComponent={AwardDetails}
          FormComponent={AwardForm}
          isCurrentUser={isCurrentUser}
          commentsData={commentResponses}
          snapshotData={snapshotData.certifications}
          mentorData={mentorData}
        />
      )}

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
