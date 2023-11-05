import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';

type ResumeCategoryProps = {
  categoryType: string;
  children: React.ReactNode;
  detailsComponent: React.ReactNode;
};
const ResumeCategory = ({ categoryType, detailsComponent, children }: ResumeCategoryProps) => {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <div style={{ width: '960px', minHeight: '100px' }}>
      <CategoryAddHeader
        categoryTitle={categoryType}
        onAddItem={() => {
          setIsShowForm(true);
        }}
      />
      <VStack
        marginTop={'1.56rem'}
        spacing={'1rem'}
      >
        <BorderBox w={'100%'}>{detailsComponent}</BorderBox>
        {isShowForm && (
          <BorderBox
            key={uuidv4()}
            w={'100%'}
            p={'2rem'}
          >
            {children}
          </BorderBox>
        )}
      </VStack>
    </div>
  );
};

export default ResumeCategory;
