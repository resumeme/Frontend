import { Box, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';

type ResumeCategoryProps = {
  categoryType: string;
  children: React.ReactNode;
  detailsComponent?: React.ReactNode /**FIXME - get 요청 서버 오류 해결 후 optional 제거 */;
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
              {children}
            </BorderBox>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default ResumeCategory;
