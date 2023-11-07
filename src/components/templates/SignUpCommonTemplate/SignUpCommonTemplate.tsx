import { Image, Text, Divider, Flex, VStack, Box } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { RadioCardGroup } from '~/components/organisms/\bRadioCardGroup';
import { RadioOption } from '~/components/organisms/\bRadioCardGroup/RadioCardGroup';
import { assets } from '~/config/assets';
import CONSTANTS from '~/constants';
import { Role, SignUpCommon } from '~/types/signUp';

const SignUpCommonTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpCommon<Role>>();

  const onSubmit = (values: { [key: string]: string }) => {
    /**TODO - cacheKey zustand 스토어에서 받아와서 가입 요청 시 api에 함께 전송하기 */
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 3000);
    });
  };

  const ROLE_ASSETS = {
    mentee: {
      name: '멘티',
      imageSrc: assets.menteeSvg,
      description: '이력서를 관리하고,\n자유롭게 피드백을\n나눌 수 있습니다.',
      value: 'ROLE_MENTEE',
    },
    mentor: {
      name: '멘토',
      imageSrc: assets.mentorSvg,
      description: '멘토는 가입 승인 후\n계정 사용이 가능합니다.',
      value: 'ROLE_PENDING',
    },
  } as const;

  const ROLE_OPTIONS: RadioOption<Role>[] = [
    {
      value: ROLE_ASSETS.mentee.value,
      children: <RoleButton {...ROLE_ASSETS.mentee} />,
    },
    {
      value: ROLE_ASSETS.mentor.value,
      children: <RoleButton {...ROLE_ASSETS.mentor} />,
    },
  ];

  const FORM_STYLE = {
    control: { direction: 'column', spacing: '5px' },
    label: { fontSize: '0.875rem', my: 0 },
  } as const;

  return (
    <BorderBox
      hasShadow
      w={'31.25rem'}
      py={'3rem'}
    >
      <Flex
        gap={'2.25rem'}
        direction="column"
        alignItems={'center'}
      >
        <Flex
          gap={'0.5rem'}
          direction={'column'}
          alignSelf={'start'}
          pl={'2rem'}
        >
          <Text
            color={'gray.900'}
            fontSize={'1.25rem'}
            fontWeight={'semibold'}
          >
            이력,써에 오신 것을 환영합니다!
          </Text>
          <Text>간단한 개인 정보를 입력하고 바로 시작하세요.</Text>
        </Flex>
        <Divider borderColor={'gray.300'} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack
            w={'21.875rem'}
            spacing={'1.8rem'}
          >
            <FormControl
              isInvalid={!!errors.realName}
              {...FORM_STYLE.control}
            >
              <FormLabel
                isRequired
                {...FORM_STYLE.label}
              >
                이름
              </FormLabel>
              <FormTextInput
                id={'realName'}
                placeholder="본명을 입력해주세요."
                register={{ ...register('realName', { required: '이름을 입력해주세요.' }) }}
                error={errors.realName}
              />
            </FormControl>

            <FormControl
              isInvalid={!!errors.nickname}
              {...FORM_STYLE.control}
            >
              <FormLabel
                isRequired
                {...FORM_STYLE.label}
              >
                닉네임
              </FormLabel>
              <FormTextInput
                placeholder="닉네임은 2자 이상 10자 이하여야 합니다."
                id={'nickname'}
                register={{
                  ...register('nickname', {
                    required: '닉네임을 입력해주세요.',
                    minLength: { value: 2, message: '2자 이상이어야 합니다.' },
                    maxLength: { value: 10, message: '10자 이하여야 합니다.' },
                  }),
                }}
                error={errors.nickname}
              />
            </FormControl>

            <FormControl
              isInvalid={!!errors.phoneNumber}
              {...FORM_STYLE.control}
            >
              <FormLabel
                isRequired
                {...FORM_STYLE.label}
              >
                연락처
              </FormLabel>
              <FormTextInput
                placeholder="'-' 기호 없이 입력해주세요."
                id={'phoneNumber'}
                register={{
                  ...register('phoneNumber', {
                    required: '연락처를 입력해주세요.',
                    pattern: {
                      value: CONSTANTS.PHONE_NUMBER_REGEX,
                      message: '010으로 시작하는 11자리의 번호를 입력해주세요.',
                    },
                  }),
                }}
                error={errors.phoneNumber}
              />
            </FormControl>

            <FormControl
              isInvalid={!!errors.role}
              {...FORM_STYLE.control}
            >
              <FormLabel
                isRequired
                {...FORM_STYLE.label}
              >
                역할 선택
              </FormLabel>
              <Box>
                <RadioCardGroup
                  h={'13rem'}
                  options={ROLE_OPTIONS}
                  formName="role"
                  defaultValue={ROLE_ASSETS.mentee.value}
                  register={{ ...register('role', { required: '역할을 선택해주세요.' }) }}
                  error={errors.role}
                />
              </Box>
            </FormControl>

            <Button
              mt={4}
              bgColor="primary.900"
              isLoading={isSubmitting}
              type="submit"
            >
              다음으로
            </Button>
          </VStack>
        </form>
      </Flex>
    </BorderBox>
  );
};

const RoleButton = ({
  name,
  imageSrc,
  description,
}: {
  name: string;
  imageSrc: string;
  description: string;
}) => {
  return (
    <Flex
      gap={'1.25rem'}
      direction={'column'}
      alignItems={'center'}
    >
      <Text fontWeight={'semibold'}>{name}</Text>
      <Image
        src={imageSrc}
        alt={name}
      />
      <Text
        textAlign={'center'}
        whiteSpace={'pre-line'}
        fontSize={'0.875rem'}
        justifySelf={'stretch'}
      >
        {description}
      </Text>
    </Flex>
  );
};

export default SignUpCommonTemplate;
