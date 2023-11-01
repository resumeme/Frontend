import { VStack } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import { useStorage } from '~/hooks/useStorage';
import { DefaultCareer } from '~/types/career';

const careerDefaultItem: DefaultCareer = {
  companyName: '',
  position: '',
  isCurrentlyEmployed: false,
  careerContent: '',
  careerStartDate: '',
};

const CAREER_ITEMS_KEY = 'career-items';
const ResumeCategoryCareer = () => {
  /**TODO zustand persist로 폼 입력값 스토리지에 저장하기 (배열)
   * 저장한 값을 불러와서 map으로 돌린다
   * FIXME useState를 zustand store에서 불러오도록 수정하기
   */
  const { storageValue: careerItems, setValue } = useStorage<DefaultCareer[]>({
    key: CAREER_ITEMS_KEY,
    initialValue: [],
  });

  return (
    <div style={{ width: '960px', minHeight: '100px' }}>
      <CategoryAddHeader
        categoryTitle="업무 경험"
        onAddItem={() => setValue([...careerItems, careerDefaultItem])}
      />
      <VStack
        marginTop={'1.56rem'}
        spacing={'1rem'}
      >
        {careerItems?.map(() => (
          <BorderBox
            key={uuidv4()}
            w={'100%'}
            p={'2rem'}
          >
            <CareerForm />
          </BorderBox>
        ))}
      </VStack>
    </div>
  );
};

export default ResumeCategoryCareer;
