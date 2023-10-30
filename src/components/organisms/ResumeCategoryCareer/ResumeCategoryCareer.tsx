import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
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

const ResumeCategoryCareer = () => {
  const careerItems: DefaultCareer[] = [];
  const handleItemAdd = () => {
    careerItems.push(careerDefaultItem);
  };
  return (
    <div style={{ width: '960px', minHeight: '100px' }}>
      <CategoryAddHeader
        categoryTitle="업무 경험"
        onAddItem={handleItemAdd}
      />
    </div>
  );
};

const careerDefaultItem: DefaultCareer = {
  companyName: '',
  position: '',
  isCurrentlyEmployed: false,
  careerContent: '',
  careerStartDate: '',
};

export default ResumeCategoryCareer;
