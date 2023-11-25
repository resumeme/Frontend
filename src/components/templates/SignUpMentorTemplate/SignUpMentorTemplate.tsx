import { Flex, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { LabelCheckboxGroup } from '~/components/molecules/LabelCheckboxGroup';
import { CareerContentModal } from '~/components/molecules/Modal';
import { SignUpHeader } from '~/components/organisms/SignUpHeader';
import CONSTANTS from '~/constants';
import { SignUpMentor } from '~/types/signUp';

type FilteredSignUpMentor = Omit<SignUpMentor, 'requiredInfo'>;

type SignUpMentorTemplateProps = {
  onNext: (values?: FilteredSignUpMentor) => void;
};

const SignUpMentorTemplate = ({ onNext }: SignUpMentorTemplateProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<FilteredSignUpMentor>({
    defaultValues: {
      experiencedPositions: [],
      careerContent: '',
      careerYear: undefined,
      introduce: '',
    },
  });

  const onSubmit = (values: FilteredSignUpMentor) => {
    onNext(values);
  };

  const FORM_STYLE = {
    control: { direction: 'column', spacing: '0.4rem' },
    label: { fontSize: '0.875rem', my: 0, w: 'auto', display: 'flex', gap: '0.5rem' },
  } as const;

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <BorderBox
      hasShadow
      w={'31.25rem'}
      py={'3rem'}
    >
      <SignUpHeader
        mainMessage="안녕하세요, 멘토님!"
        subMessage="멘토 역할로 가입할 경우, 어드민의 승인 후 활동이 가능합니다."
      />
      <Flex
        gap={'2.25rem'}
        direction="column"
        px={'2rem'}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack
            w={'full'}
            spacing={'1.8rem'}
          >
            <FormControl
              isInvalid={!!errors.experiencedPositions}
              {...FORM_STYLE.control}
            >
              <FormLabel
                isRequired
                subText={CONSTANTS.LABEL_MULTI_SELECTABLE}
                {...FORM_STYLE.label}
              >
                활동 직무
              </FormLabel>
              <LabelCheckboxGroup
                name="experiencedPositions"
                control={control}
                variant={'role'}
                error={errors.experiencedPositions}
              />
            </FormControl>
            <FormControl
              isInvalid={Boolean(errors.careerYear)}
              {...FORM_STYLE.control}
            >
              <FormLabel
                isRequired
                {...FORM_STYLE.label}
              >
                경력 연차
              </FormLabel>
              <FormTextInput
                type="number"
                id="careerYear"
                register={{
                  ...register('careerYear', {
                    required: '경력 연차는 1이상 80미만의 숫자로 입력해주세요.',
                    valueAsNumber: true,
                    max: { value: 79, message: '80미만의 숫자여야 합니다.' },
                    min: { value: 1, message: '1이상의 숫자여야 합니다.' },
                  }),
                }}
                error={errors.careerYear}
              />
            </FormControl>
            <FormControl
              isInvalid={Boolean(errors.careerContent)}
              {...FORM_STYLE.control}
            >
              <Flex justifyContent={'space-between'}>
                <FormLabel
                  isRequired
                  {...FORM_STYLE.label}
                >
                  경력 사항
                </FormLabel>
                <Text
                  as={'u'}
                  flexShrink={0}
                  alignSelf={'start'}
                  color={'gray.400'}
                  cursor={'pointer'}
                  onClick={() => onOpen()}
                >
                  예시
                </Text>
              </Flex>
              <CareerContentModal
                isOpen={isOpen}
                onClose={onClose}
              />
              <FormTextarea
                placeholder="관련 직무의 경력 사항을 작성해주세요."
                id="careerContent"
                register={{
                  ...register('careerContent', {
                    required: '경력사항을 작성해주세요.',
                    maxLength: {
                      value: 299,
                      message: '최대 300자 이내로만 작성해주세요.',
                    },
                  }),
                }}
                error={errors.careerContent}
                h={'7.2rem'}
              />
            </FormControl>
            <FormControl
              isInvalid={Boolean(errors.introduce)}
              {...FORM_STYLE.control}
            >
              <FormLabel {...FORM_STYLE.label}>자기소개</FormLabel>
              <FormTextarea
                placeholder="프로필에 표시할 간단한 자기소개를 남겨주세요."
                id="introduce"
                register={{
                  ...register('introduce', {
                    maxLength: {
                      value: 99,
                      message: '최대 100자 이내로만 작성해주세요.',
                    },
                  }),
                }}
                error={errors.introduce}
                h={'3rem'}
              />
            </FormControl>
            <Button
              type="submit"
              isDisabled={!isDirty}
              isLoading={isSubmitting}
            >
              완료하기
            </Button>
          </VStack>
        </form>
      </Flex>
    </BorderBox>
  );
};

export default SignUpMentorTemplate;
