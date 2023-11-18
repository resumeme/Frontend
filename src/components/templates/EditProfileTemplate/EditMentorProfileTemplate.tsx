import { Box, ChakraProps, Flex, Heading, Text, VStack, useDisclosure } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CommonInput from './CommonInput';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { LabelCheckboxGroup } from '~/components/molecules/LabelCheckboxGroup';
import { CareerContentModal } from '~/components/molecules/Modal';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import CONSTANTS from '~/constants';
import { EditMentor } from '~/types/mentor';

export const FORM_STYLE = {
  control: { direction: 'column', spacing: '5px' } as ChakraProps,
  label: { fontSize: '0.875rem', my: 0, w: 'fit-content' } as ChakraProps,
} as const;

const EditMentorProfileTemplate = () => {
  const defaultValues = {};

  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditMentor>({ defaultValues });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit: SubmitHandler<EditMentor> = () => {};

  return (
    <Box
      maxW={'44.25rem'}
      w={'100%'}
      mx={'auto'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading
          fontSize={'1.75rem'}
          color={'gray.800'}
          fontWeight={700}
        >
          프로필 수정
        </Heading>
        <Heading
          mt={'2.5rem'}
          fontSize={'1.25rem'}
          color={'gray.700'}
          fontWeight={700}
        >
          기본 정보
        </Heading>
        <CommonInput
          nickNameRegister={{
            ...register('nickname', {
              required: '닉네임을 입력해주세요.',
              minLength: { value: 2, message: '2자 이상이어야 합니다.' },
              maxLength: { value: 10, message: '10자 이하여야 합니다.' },
            }),
          }}
          nickNameError={errors.nickname}
          phoneNumberRegister={{
            ...register('phoneNumber', {
              required: '연락처를 입력해주세요.',
              pattern: {
                value: CONSTANTS.PHONE_NUMBER_REGEX,
                message: '010으로 시작하는 11자리의 번호를 입력해주세요.',
              },
            }),
          }}
          phoneNumberError={errors.phoneNumber}
        />
        <Heading
          mt={'2.5rem'}
          fontSize={'1.25rem'}
          color={'gray.700'}
          fontWeight={700}
        >
          추가 정보
        </Heading>
        <BorderBox
          mt={'1.25rem'}
          py={'3rem'}
        >
          <Flex
            gap={'2.25rem'}
            direction="column"
            px={'2rem'}
          >
            <VStack
              w={'full'}
              spacing={'1.8rem'}
            >
              <FormControl
                isInvalid={!!errors.experiencedPositions}
                {...FORM_STYLE.control}
              >
                <FormLabel
                  w={'full'}
                  isRequired
                  subText={CONSTANTS.LABEL_MULTI_SELECTABLE}
                  {...FORM_STYLE.label}
                  mb={'0.5rem'}
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
                  mt={'0.5rem'}
                  type="number"
                  id="careerYear"
                  register={{
                    ...register('careerYear', {
                      required: '경력 연차를 숫자로 입력해주세요.',
                      valueAsNumber: true,
                      validate: (value) => value > 0,
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
                    ...register('careerContent', { required: '경력사항을 작성해주세요.' }),
                  }}
                  error={errors.careerContent}
                  h={'7.2rem'}
                />
              </FormControl>
              <FormControl {...FORM_STYLE.control}>
                <FormLabel {...FORM_STYLE.label}>자기소개</FormLabel>
                <FormTextarea
                  mt={'0.5rem'}
                  placeholder="프로필에 표시할 간단한 자기소개를 남겨주세요."
                  id="introduce"
                  register={{ ...register('introduce') }}
                  error={errors.introduce}
                  h={'3rem'}
                />
              </FormControl>
            </VStack>
          </Flex>
        </BorderBox>
        <Flex
          mt={'2rem'}
          justify={'end'}
        >
          <SubmitButtonGroup
            size={'md'}
            onCancel={() => navigate(-1)}
          />
        </Flex>
      </form>
    </Box>
  );
};

export default EditMentorProfileTemplate;
