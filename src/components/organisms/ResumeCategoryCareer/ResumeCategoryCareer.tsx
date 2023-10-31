import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import CareerForm from '~/components/organisms/ResumeCategoryCareer/CareerForm';
import Career from '~/types/career';
import { Duty } from '~/types/career';
import { DateString } from '~/types/dateString';
import { Position } from '~/types/position';

interface DefaultDuty extends Omit<Duty, 'startDate' | 'endDate'> {
  startDate?: '' | DateString;
  endDate?: '' | DateString;
}
interface DefaultCareer extends Omit<Career, 'position' | 'duties' | 'careerStartDate'> {
  position: '' | Position;
  duties?: DefaultDuty[];
  careerStartDate: '' | DateString;
}

const careerDefaultItem: DefaultCareer = {
  companyName: '',
  position: '',
  isCurrentlyEmployed: false,
  careerContent: '',
  careerStartDate: '',
};

const ResumeCategoryCareer = () => {
  /**TODO zustand persist로 폼 입력값 스토리지에 저장하기 (배열)
   * 저장한 값을 불러와서 map으로 돌린다
   * FIXME useState를 zustand store에서 불러오도록 수정하기
   */
  const [careerItems, setCareerItems] = useState<object[]>([]);
  const handleItemAdd = () => {
    setCareerItems((prevItems) => [...prevItems, careerDefaultItem]);
  };
  return (
    <div style={{ width: '960px', minHeight: '100px' }}>
      <CategoryAddHeader
        categoryTitle="업무 경험"
        onAddItem={handleItemAdd}
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
