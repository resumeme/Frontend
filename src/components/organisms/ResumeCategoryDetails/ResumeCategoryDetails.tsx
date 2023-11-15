import { Box, Divider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BorderBox } from '~/components/atoms/BorderBox';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';
import { FormComponentProps } from '~/types/props/formComponentProps';
import { Categories } from '~/types/resume/categories';

type CategoryDetailsProps<T extends Categories> = {
  arrayData: T[];
  DetailsComponent: React.ComponentType<DetailsComponentProps<T>>;
  FormComponent: React.ComponentType<FormComponentProps<T>>;
  isCurrentUser?: boolean;
};

const ResumeCategoryDetails = <T extends Categories>({
  arrayData,
  DetailsComponent,
  FormComponent,
  isCurrentUser = false,
}: CategoryDetailsProps<T>) => {
  const [editTargetIndex, setEditTargetIndex] = useState<number | null>(null);
  return (
    <React.Fragment>
      {arrayData?.length > 0 && (
        <BorderBox variant={'wide'}>
          {arrayData.map((data: T, index: number) => (
            <React.Fragment key={index}>
              {editTargetIndex === index ? (
                <FormComponent
                  defaultValues={{ ...data, id: undefined }}
                  isEdit
                  blockId={data.id}
                />
              ) : (
                <Box position={'relative'}>
                  <DetailsComponent
                    data={data}
                    onEdit={() => setEditTargetIndex(index)}
                    isCurrentUser={isCurrentUser}
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
