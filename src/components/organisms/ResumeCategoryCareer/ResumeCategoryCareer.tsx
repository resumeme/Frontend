import { FormControl, FormLabel, VStack, Input, FormErrorMessage } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
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
  const [careerItems, setCareerItems] = useState<DefaultCareer[]>([]);
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
        {careerItems.map(() => (
          <BorderBox
            key={uuidv4()}
            w={'100%'}
          >
            <CareerForm />
          </BorderBox>
        ))}
      </VStack>
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

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    console.log('values', values);
  });
  // console.log('errors', errors);

  return (
    <form onSubmit={onSubmit}>
      {/*FIXME 각각의 Input, Label 컴포넌트 대체하기 */}
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormLabel htmlFor="companyName">회사명</FormLabel>
        <Input
          id="companyName"
          {...register('companyName', { required: '회사명을 입력하세요' })}
        />
        <FormErrorMessage>
          {errors.companyName && errors.companyName.message?.toString()}
        </FormErrorMessage>
        <FormLabel htmlFor="position">직무</FormLabel>
        <Input
          id="position"
          {...register('position', { required: '직무를 입력하세요.' })}
        />
        <FormErrorMessage>
          {errors.position && errors.position.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <Button
        size={'sm'}
        type="submit"
      >
        저장
      </Button>
    </form>
  );
};

export default ResumeCategoryCareer;
