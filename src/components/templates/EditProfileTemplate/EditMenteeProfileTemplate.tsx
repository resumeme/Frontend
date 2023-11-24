import { Box, Flex, Heading } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CommonInput from './CommonInput';
import { FORM_STYLE } from './EditMentorProfileTemplate';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { LabelCheckboxGroup } from '~/components/molecules/LabelCheckboxGroup';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import CONSTANTS from '~/constants';
import useUser from '~/hooks/useUser';
import { usePatchMenteeProfile } from '~/queries/user/edit/userPatchMenteeProfile';
import { EditMentee } from '~/types/mentee';
import { revertFormatPhoneNumber } from '~/utils/formatPhoneNumber';

const EditMenteeProfileTemplate = () => {
  const { user: mentee } = useUser();
  const { mutate: patchMenteeProfile } = usePatchMenteeProfile();
  const navigate = useNavigate();

  let defaultValues = {};

  if (mentee) {
    const { interestedFields, introduce, nickname, phoneNumber, interestedPositions } = mentee;

    defaultValues = {
      nickname,
      phoneNumber: revertFormatPhoneNumber(phoneNumber),
      interestedPositions,
      interestedFields,
      introduce,
    };
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditMentee>({ defaultValues });

  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<EditMentee> = (profile) => {
    debugger;
    patchMenteeProfile(
      { menteeId: String(mentee?.id), profile },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['user'] });
          navigate(`/mypage/${mentee?.id}`);
        },
      },
    );
  };

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
          p={'2.19rem 2.31rem'}
        >
          <FormControl
            {...FORM_STYLE.control}
            mb={'4.88rem'}
          >
            <FormLabel
              {...FORM_STYLE.label}
              subText={CONSTANTS.LABEL_MULTI_SELECTABLE}
              mb={'0.75rem'}
            >
              관심 직무
            </FormLabel>
            <LabelCheckboxGroup
              required={false}
              name="interestedPositions"
              control={control}
              variant={'role'}
            />
          </FormControl>
          <FormControl
            {...FORM_STYLE.control}
            mb={'4.88rem'}
          >
            <FormLabel
              {...FORM_STYLE.label}
              subText={CONSTANTS.LABEL_MULTI_SELECTABLE}
              mb={'0.75rem'}
            >
              관심 도메인
            </FormLabel>
            <LabelCheckboxGroup
              required={false}
              name="interestedFields"
              control={control}
              variant={'domain'}
            />
          </FormControl>
          <FormControl {...FORM_STYLE.control}>
            <FormLabel
              {...FORM_STYLE.label}
              mb={'0.75rem'}
            >
              자기소개
            </FormLabel>
            <FormTextarea
              placeholder="프로필에 표시할 간단한 자기소개를 남겨주세요."
              id="introduce"
              register={{ ...register('introduce') }}
              error={errors.introduce}
              h={'7.2rem'}
            />
          </FormControl>
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

export default EditMenteeProfileTemplate;
