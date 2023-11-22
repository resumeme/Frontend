import { Box, Divider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import FeedbackBlock from '~/components/templates/FeedbackResumeTemplate/FeedbackBlock';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';
import { FormComponentProps } from '~/types/props/formComponentProps';
import { Categories } from '~/types/resume/categories';

type CategoryDetailsProps<T extends Categories> = {
  arrayData: T[];
  DetailsComponent: React.ComponentType<DetailsComponentProps<T>>;
  FormComponent?: React.ComponentType<FormComponentProps<T>>;
  isCurrentUser?: boolean;
};

const ResumeCategoryDetails = <T extends Categories>({
  arrayData,
  DetailsComponent,
  FormComponent,
  isCurrentUser = false,
}: CategoryDetailsProps<T>) => {
  const [editTargetIndex, setEditTargetIndex] = useState<number | null>(null);
  const currentPath = useLocation().pathname;
  const feedbackPageRegex = /^\/resume\/\d+\/feedback$/;
  const isFeedbackPage = feedbackPageRegex.test(currentPath);

  return (
    <React.Fragment>
      {arrayData?.length > 0 && (
        <BorderBox variant={'wide'}>
          {arrayData.map((data: T, index: number) => (
            <React.Fragment key={index}>
              {editTargetIndex === index && FormComponent ? (
                <FormComponent
                  defaultValues={{ ...data, id: undefined }}
                  isEdit
                  blockId={data.componentId}
                  quitEdit={() => setEditTargetIndex(null)}
                />
              ) : (
                <Box
                  position={'relative'}
                  role="group"
                >
                  <DetailsComponent
                    data={data}
                    onEdit={() => setEditTargetIndex(index)}
                    isCurrentUser={isCurrentUser}
                  />
                  {isFeedbackPage && <FeedbackBlock blockId={data?.componentId as string} />}
                </Box>
              )}
              {index !== arrayData.length - 1 && (
                <Divider
                  my={'3rem'}
                  borderColor={'gray.300'}
                />
              )}
            </React.Fragment>
          ))}
        </BorderBox>
      )}
    </React.Fragment>
  );
};

export default ResumeCategoryDetails;
