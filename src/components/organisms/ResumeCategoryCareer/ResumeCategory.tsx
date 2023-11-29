import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';

type ResumeCategoryProps = {
  categoryType: string;
  children: React.ReactNode;
  detailsComponent: React.ReactNode;
};

type ChlidProps = {
  setIsShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const ResumeCategory = ({ categoryType, detailsComponent, children }: ResumeCategoryProps) => {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <>
      <Box>
        <CategoryAddHeader
          categoryTitle={categoryType}
          onAddItem={() => {
            setIsShowForm(true);
          }}
        />
        <VStack
          marginTop={'1.2rem'}
          spacing={'1rem'}
        >
          {detailsComponent}
          {isShowForm && (
            <BorderBox
              key={uuidv4()}
              w={'100%'}
              p={'2rem'}
            >
              {React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement<ChlidProps>, {
                  setIsShowForm: setIsShowForm,
                }),
              )}
            </BorderBox>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default ResumeCategory;
