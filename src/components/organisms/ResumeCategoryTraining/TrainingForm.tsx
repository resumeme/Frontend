import { HStack, Flex } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { Training } from '~/types/training';

const TrainingForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Training>({
    //Todo: useQuery 관련 작업 예상
    // defaultValues: {
    //   organization: '데브대',
    //   major: '컴퓨터공학과',
    //   degree: '학사 학위',
    //   admissionDate: '2018-03-01',
    //   graduationDate: '2022-02-28',
    //   gpa: 4.0,
    //   maxGpa: 4.5,
    //   explanation: '성적 우수',
    // },
  });

  const onSubmit: SubmitHandler<Training> = (values) => {
    /**TODO api 호출해 저장하기 */
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 3000);
    });
  };

  return (
    <BorderBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction={'column'}
          gap={'1.25rem'}
        >
          <Flex gap={'2rem'}>
            <FormControl isInvalid={Boolean(errors.organization)}>
              <FormLabel
                htmlFor="organization"
                isRequired
              >
                학교/기관
              </FormLabel>
              <FormTextInput
                w={'12rem'}
                placeholder="OO학교"
                id="organization"
                register={{
                  ...register('organization', { required: '필수 입력값입니다.' }),
                }}
                error={errors.organization}
              />
            </FormControl>
            <FormControl isInvalid={Boolean(errors.major)}>
              <FormLabel
                w={'fit-content'}
                htmlFor="major"
                isRequired
              >
                전공
              </FormLabel>
              <FormTextInput
                w={'12rem'}
                placeholder="컴퓨터공학"
                id="major"
                register={{
                  ...register('major', { required: '필수 입력값입니다.' }),
                }}
                error={errors.major}
              />
            </FormControl>
            <FormControl isInvalid={Boolean(errors.degree)}>
              <FormLabel
                w={'fit-content'}
                htmlFor="degree"
                isRequired
              >
                학위
              </FormLabel>
              <FormTextInput
                placeholder="학사"
                id="degree"
                register={{
                  ...register('degree', { required: '필수 입력값입니다.' }),
                }}
                error={errors.degree}
              />
            </FormControl>
          </Flex>
          <Flex gap={'2rem'}>
            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.admissionDate)}
            >
              <FormLabel
                isRequired
                htmlFor="admissionDate"
              >
                입학
              </FormLabel>
              <FormDateInput
                w={'12rem'}
                register={{
                  ...register('admissionDate', {
                    required: '필수 입력값입니다.',
                    max: {
                      value: new Date().toISOString().slice(0, 16),
                      message: '유효한 입학 날짜를 입력해주세요.',
                    },
                  }),
                }}
                errors={errors.admissionDate}
              />
            </FormControl>
            <FormControl isInvalid={Boolean(errors.graduationDate)}>
              <FormLabel w={'fit-content'}>졸업(예정)</FormLabel>
              <FormDateInput
                maxW={'12rem'}
                register={{
                  ...register('graduationDate', {
                    min: { value: watch('admissionDate'), message: '유효한 날짜를 입력해 주세요.' },
                  }),
                }}
                errors={errors.graduationDate}
              />
            </FormControl>
          </Flex>
          <Flex gap={'3rem'}>
            <FormControl
              w={'fit-content'}
              isInvalid={Boolean(errors.gpa)}
            >
              <FormLabel htmlFor="gpa">학점</FormLabel>
              <FormTextInput
                w={'6rem'}
                placeholder="4.5"
                id="gpa"
                register={{
                  ...register('gpa', {
                    validate: (value) =>
                      (value >= 0 && value <= 4.5) || '유효한 학점을 입력해주세요.',
                  }),
                }}
                error={errors.gpa}
              />
            </FormControl>
            <FormControl isInvalid={Boolean(errors.maxGpa)}>
              <FormLabel htmlFor="maxGpa">최대 학점</FormLabel>
              <FormTextInput
                w={'6rem'}
                placeholder="4.5"
                id="maxGpa"
                register={{
                  ...register('maxGpa', {
                    validate: (value) =>
                      (value >= 0 && value <= 4.5) || '유효한 학점을 입력해주세요.',
                  }),
                }}
                error={errors.maxGpa}
              />
            </FormControl>
          </Flex>
          <FormControl isInvalid={Boolean(errors.explanation)}>
            <FormLabel htmlFor="explanation">기타</FormLabel>
            <FormTextarea
              resize="none"
              autoComplete="off"
              spellCheck="false"
              h={'16.625rem'}
              placeholder="내용을 입력해주세요."
              id="projectContent"
              register={{ ...register('explanation') }}
              errors={errors}
            />
          </FormControl>
          <HStack
            justifyContent={'center'}
            w={'full'}
            spacing={'1.5rem'}
          >
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
        </Flex>
      </form>
    </BorderBox>
  );
};

export default TrainingForm;
