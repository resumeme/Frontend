import { Box, Divider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Activity } from '~/types/activity';
import { Award } from '~/types/award';
import Career from '~/types/career';
import { Language } from '~/types/language';
import { Project } from '~/types/project';
import { Training } from '~/types/training';

type Data = Career | Project | Award | Language | Training | Activity;

type CategoryDetailsProps<T extends Data> = {
  arrayData: T[];
  DetailsComponent: React.ComponentType<DetailsComponentProps<T>>;
  FormComponent: React.ComponentType;
};

export type DetailsComponentProps<T extends Data> = {
  data: T;
  onEdit: () => void;
};

const ResumeCategoryDetails = <T extends Data>({
  arrayData,
  DetailsComponent,
  FormComponent,
}: CategoryDetailsProps<T>) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <React.Fragment>
      {arrayData?.length > 0 && (
        <BorderBox variant={'wide'}>
          {arrayData.map((data: T, index: number) => (
            <React.Fragment key={index}>
              {isEdit ? (
                <FormComponent />
              ) : (
                <Box position={'relative'}>
                  <DetailsComponent
                    data={data}
                    onEdit={() => setIsEdit(true)}
                  />
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
