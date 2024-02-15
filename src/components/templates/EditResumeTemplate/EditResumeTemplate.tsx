import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import { ResumeBasicInput } from '~/components/organisms/ResumeBasicInput';
import { ResumeCategoryDetails } from '~/components/organisms/ResumeCategoryDetails';
import {
  CareerDetails,
  TrainingDetails,
  LanguageDetails,
  ProjectDetails,
  AwardDetails,
  ActivityDetails,
} from '~/components/organisms/ResumeDetails';
import {
  LanguageForm,
  AwardForm,
  ActivityForm,
  CareerForm,
  ProjectForm,
  TrainingForm,
} from '~/components/organisms/ResumeForms';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { useGetResumeActivities } from '~/queries/resume/details/useGetResumeActivities';
import { useGetResumeAward } from '~/queries/resume/details/useGetResumeAward';
import { useGetResumeBasic } from '~/queries/resume/details/useGetResumeBasic';
import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';
import { useGetResumeLanguage } from '~/queries/resume/details/useGetResumeLanguage';
import { useGetResumeProject } from '~/queries/resume/details/useGetResumeProject';
import { useGetResumeTraining } from '~/queries/resume/details/useGetResumeTraining';

const EditResumeTemplate = () => {
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
  const navigate = useNavigate();

  /*FIXME - 타입 정의하기 */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const CATEGORIES: any[] = [
    {
      FormComponent: ActivityForm,
      DetailsComponent: ActivityDetails,
      data: activitiesData,
      categoryTitle: '활동',
    },
    {
      FormComponent: AwardForm,
      DetailsComponent: AwardDetails,
      data: awardData,
      categoryTitle: '수상',
    },
    {
      FormComponent: CareerForm,
      DetailsComponent: CareerDetails,
      data: careersData,
      categoryTitle: '업무 경험',
    },
    {
      FormComponent: ProjectForm,
      DetailsComponent: ProjectDetails,
      data: projectData,
      categoryTitle: '프로젝트',
    },
    {
      FormComponent: LanguageForm,
      DetailsComponent: LanguageDetails,
      data: languageData,
      categoryTitle: '외국어',
    },
    {
      FormComponent: TrainingForm,
      DetailsComponent: TrainingDetails,
      data: trainingsData,
      categoryTitle: '교육',
    },
  ];

  const [isOpenStates, setIsOpenStates] = useState<boolean[]>(
    new Array(CATEGORIES.length).fill(false),
  );

  return (
    <Flex
      direction="column"
      gap="3rem"
    >
      <ResumeBasicInput basicInfo={basicInfo} />
      {CATEGORIES.map(({ FormComponent, DetailsComponent, data, categoryTitle }, index) => (
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
            <ResumeCategoryDetails
              arrayData={data}
              DetailsComponent={DetailsComponent}
              FormComponent={FormComponent}
              isCurrentUser={isCurrentUser}
            />
          )}
        </React.Fragment>
      ))}
      <Button
        alignSelf={'end'}
        size={'md'}
        onClick={() => navigate(appPaths.resumeDetail(parseInt(resumeId)), { replace: true })}
      >
        작성 완료
      </Button>
    </Flex>
  );
};

export default EditResumeTemplate;
