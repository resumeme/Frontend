import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
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

  /*FIXME - 타입 정의하기 */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const CATEGORIES: any[] = [
    {
      FormComponent: ActivityForm,
      DetailsComponent: ActivityDetails,
      data: activitiesData,
      snapshotData: snapshotData.activities,
      categoryTitle: '활동',
    },
    {
      FormComponent: AwardForm,
      DetailsComponent: AwardDetails,
      data: awardData,
      snapshotData: snapshotData.certifications,
      categoryTitle: '수상',
    },
    {
      FormComponent: CareerForm,
      DetailsComponent: CareerDetails,
      data: careersData,
      snapshotData: snapshotData.careers,
      categoryTitle: '업무 경험',
    },
    {
      FormComponent: ProjectForm,
      DetailsComponent: ProjectDetails,
      data: projectData,
      snapshotData: snapshotData.projects,
      categoryTitle: '프로젝트',
    },
    {
      FormComponent: LanguageForm,
      DetailsComponent: LanguageDetails,
      data: languageData,
      snapshotData: snapshotData.foreignLanguages,
      categoryTitle: '외국어',
    },
    {
      FormComponent: TrainingForm,
      DetailsComponent: TrainingDetails,
      data: trainingsData,
      snapshotData: snapshotData.trainings,
      categoryTitle: '교육',
    },
  ];
  const [isOpenStates, setIsOpenStates] = useState<boolean[]>(
    new Array(CATEGORIES.length).fill(false),
  );

  return (
    <Flex
      width="960px"
      direction="column"
      gap="3rem"
    >
      <ResumeBasicInput basicInfo={basicInfo} />

      {CATEGORIES.map(
        ({ FormComponent, DetailsComponent, data, snapshotData, categoryTitle }, index) => (
          <React.Fragment key={index}>
            <CategoryAddHeader
              categoryTitle={categoryTitle}
              onAddItem={() =>
                setIsOpenStates((prev) => [...prev.slice(0, index), true, ...prev.slice(index + 1)])
              }
            />
            {isOpenStates[index] && (
              <BorderBox p={'2rem'}>
                <FormComponent
                  onCancel={() => {
                    setIsOpenStates((prev) => [
                      ...prev.slice(0, index),
                      false,
                      ...prev.slice(index + 1),
                    ]);
                  }}
                />
              </BorderBox>
            )}
            {data && (
              <FeedbackCategoryReflectDetails
                arrayData={projectData}
                DetailsComponent={DetailsComponent}
                FormComponent={FormComponent}
                isCurrentUser={isCurrentUser}
                commentsData={commentResponses}
                snapshotData={snapshotData}
                mentorData={mentorData}
              />
            )}
          </React.Fragment>
        ),
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
