import { FormControl, FormLabel, VStack, Input, FormErrorMessage, HStack } from '@chakra-ui/react';
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

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    /**TODO api 호출해 저장하기 */
    console.log('values', values);
  });

  return (
    <form onSubmit={onSubmit}>
      {/*FIXME 각각의 Input, Label 컴포넌트 대체하기 */}
      <VStack spacing={'1.25rem'}>
        <FormControl isInvalid={Boolean(errors.companyName)}>
          <HStack>
            <FormLabel
              htmlFor="companyName"
              w={'9rem'}
            >
              회사명
            </FormLabel>
            <VStack
              flexGrow={1}
              alignItems={'start'}
            >
              <Input
                id="companyName"
                {...register('companyName', { required: '회사명을 입력하세요' })}
              />
              <FormErrorMessage>
                {errors.companyName && errors.companyName.message?.toString()}
              </FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.term)}>
          <HStack>
            <FormLabel
              htmlFor="term"
              w={'9rem'}
            >
              재직기간
            </FormLabel>
            <VStack
              flexGrow={1}
              alignItems={'start'}
            >
              <Input
                id="term"
                type="date"
                {...register('term', { required: '재직기간을 입력하세요.' })}
              />
              <FormErrorMessage>{errors.term && errors.term.message?.toString()}</FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.position)}>
          <HStack>
            <FormLabel
              htmlFor="position"
              w={'9rem'}
            >
              직무
            </FormLabel>
            <VStack
              flexGrow={1}
              alignItems={'start'}
            >
              <Input
                id="position"
                {...register('position', { required: '직무를 입력하세요.' })}
              />
              <FormErrorMessage>
                {errors.position && errors.position.message?.toString()}
              </FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.skills)}>
          <HStack>
            <FormLabel
              htmlFor="skills"
              w={'9rem'}
            >
              사용 스택
            </FormLabel>
            <VStack flexGrow={1}>
              <Input
                id="skills"
                {...register('skills')}
              />
              <FormErrorMessage>
                {errors.skills && errors.skills.message?.toString()}
              </FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.others)}>
          <HStack>
            <FormLabel
              htmlFor="others"
              w={'9rem'}
            >
              기타 설명
            </FormLabel>
            <VStack flexGrow={1}>
              <Input
                id="others"
                {...register('others')}
              />
              <FormErrorMessage>
                {errors.others && errors.others.message?.toString()}
              </FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
        <HStack>
          <Button
            size={'sm'}
            type="submit"
          >
            저장
          </Button>
          <Button
            size={'sm'}
            variant={'cancel'}
          >
            취소
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default ResumeCategoryCareer;
