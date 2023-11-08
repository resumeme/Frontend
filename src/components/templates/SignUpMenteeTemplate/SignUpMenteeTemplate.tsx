import { Flex, Text, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { LabelCheckboxGroup } from '~/components/molecules/LabelCheckboxGroup';
import { SignUpHeader } from '~/components/organisms/SignUpHeader';
import CONSTANTS from '~/constants';
import { SignUpMentee } from '~/types/signUp';

type FilteredSignUpMentee = Omit<SignUpMentee, 'requiredInfo'>;

type SignUpMenteeTemplateProps = {
  onNext: (values?: FilteredSignUpMentee) => void;
};

const SignUpMenteeTemplate = ({ onNext }: SignUpMenteeTemplateProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<FilteredSignUpMentee>({
    defaultValues: {
      interestedPositions: [],
      interestedFields: [],
      introduce: '',
    },
  });

  const onSubmit = (values: FilteredSignUpMentee) => {
    onNext(values);
  };

  const handleDelayClick = () => {
    onNext();
  };

  const FORM_STYLE = {
    control: { direction: 'column', spacing: '0.8rem' },
    label: { fontSize: '0.875rem', my: 0, w: 'full', display: 'flex', gap: '0.5rem' },
  } as const;

  return (
    <BorderBox
      hasShadow
      w={'31.25rem'}
      py={'3rem'}
    >
      <SignUpHeader
        mainMessage={CONSTANTS.SIGNUP_HEADER_MESSAGE.MAIN}
        subMessage={CONSTANTS.SIGNUP_HEADER_MESSAGE.SUB}
      />
      <Flex
        gap={'2.25rem'}
        direction="column"
        px={'2rem'}
      >
        <Text
          fontSize={'1.25rem'}
          fontWeight={'semibold'}
        >
          추가 정보 작성하기
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack
            w={'full'}
            spacing={'1.8rem'}
          >
            <FormControl {...FORM_STYLE.control}>
              <FormLabel
                {...FORM_STYLE.label}
                subText={CONSTANTS.LABEL_MULTI_SELECTABLE}
              >
                관심 직무
              </FormLabel>
              <LabelCheckboxGroup
                name="interestedPositions"
                control={control}
                variant={'role'}
              />
            </FormControl>
            <FormControl {...FORM_STYLE.control}>
              <FormLabel
                {...FORM_STYLE.label}
                subText={CONSTANTS.LABEL_MULTI_SELECTABLE}
              >
                관심 도메인
              </FormLabel>
              <LabelCheckboxGroup
                name="interestedFields"
                control={control}
                variant={'domain'}
              />
            </FormControl>
            <FormControl {...FORM_STYLE.control}>
              <FormLabel {...FORM_STYLE.label}>자기소개</FormLabel>
              <FormTextarea
                placeholder="프로필에 표시할 간단한 자기소개를 남겨주세요."
                id="introduce"
                register={{ ...register('introduce') }}
                errors={errors}
                h={'7.2rem'}
              />
            </FormControl>
            <VStack w={'full'}>
              <Button
                onClick={handleDelayClick}
                variant={'cancel'}
              >
                나중에 작성하기
              </Button>
              <Button
                type="submit"
                isDisabled={!isDirty}
                isLoading={isSubmitting}
              >
                완료하기
              </Button>
            </VStack>
          </VStack>
        </form>
      </Flex>
    </BorderBox>
  );
};

export default SignUpMenteeTemplate;
