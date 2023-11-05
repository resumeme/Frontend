import { HStack, Flex } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { AwardsForm } from '~/types/awards';

const AwardsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AwardsForm>({
    //Todo: useQuery 관련 작업 예상
    // defaultValues: {
    //   certificationTitle: '인증서',
    //   acquisitionDate: '2023-10-01',
    //   issuingAuthority: '발급기관',
    //   link: 'https://resumeme.kro.kr',
    //   description: '설명',
    // },
  });

  const onSubmit: SubmitHandler<AwardsForm> = (values) => {
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
          <FormControl isInvalid={Boolean(errors.certificationTitle)}>
            <FormLabel
              w={'fit-content'}
              isRequired
            >
              수상 취득 내용
            </FormLabel>
            <FormTextInput
              placeholder="수상 및 자격증 정보를 입력해주세요. 예) 정보처리기사"
              id="'projectName'"
              register={{
                ...register('certificationTitle', { required: '필수 입력값입니다.' }),
              }}
              error={errors.certificationTitle}
            />
          </FormControl>
          <Flex
            w={'full'}
            gap={'3rem'}
          >
            <FormControl
              w={'60%'}
              isInvalid={Boolean(errors.acquisitionDate)}
            >
              <FormLabel
                flexShrink={0}
                isRequired
              >
                취득 년월
              </FormLabel>
              <FormDateInput
                register={{
                  ...register('acquisitionDate'),
                }}
              />
            </FormControl>

            <FormControl isInvalid={Boolean(errors.issuingAuthority)}>
              <FormLabel
                flexShrink={0}
                w={'fit-content'}
              >
                수여 기관
              </FormLabel>
              <FormTextInput
                placeholder="수여 기관을 입력해주세요."
                id="issuingAuthority"
                register={{
                  ...register('issuingAuthority'),
                }}
              />
            </FormControl>
          </Flex>
          <FormControl isInvalid={Boolean(errors.link)}>
            <FormLabel flexShrink={0}>링크</FormLabel>
            <FormTextInput
              placeholder="https://"
              id="link"
              register={{ ...register('link') }}
            />
          </FormControl>

          <FormControl isInvalid={Boolean(errors.description)}>
            <FormLabel>설명</FormLabel>
            <FormTextarea
              placeholder="내용을 입력해주세요."
              id="projectContent"
              register={{ ...register('description') }}
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

export default AwardsForm;
