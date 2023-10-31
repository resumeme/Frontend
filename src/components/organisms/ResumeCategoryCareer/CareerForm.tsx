import { FormControl, FormLabel, VStack, Input, FormErrorMessage, HStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/atoms/Button';

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
      {/*FIXME 커스텀 Input, Label 컴포넌트 대체하기 */}
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

export default CareerForm;
