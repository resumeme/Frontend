import { HStack, Flex } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { usePostResumeAward } from '~/queries/resume/create/usePostResumeAward';
import { Award } from '~/types/award';

const AwardForm = () => {
  const { id: resumeId } = useParams();
  const { mutate: postResumeAward } = usePostResumeAward();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Award>();

  const onSubmit: SubmitHandler<Award> = (resumeAward) => {
    if (!resumeId) {
      /**TODO - 토스트 대체! */
      alert('존재하지 않는 이력서입니다.');
      navigate(-1);
      return;
    }
    postResumeAward({ resumeId, resumeAward });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction={'column'}
        gap={'1.25rem'}
      >
        <FormControl isInvalid={Boolean(errors.certificationTitle)}>
          <FormLabel
            htmlFor="certificationTitle"
            w={'8.625rem'}
            isRequired
          >
            수상/취득 내용
          </FormLabel>
          <FormTextInput
            placeholder="수상 및 자격증 정보를 입력해주세요. 예) 정보처리기사"
            id="certificationTitle"
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
            <FormLabel w={'8.625rem'}>취득 년월</FormLabel>
            <FormDateInput
              register={{
                ...register('acquisitionDate'),
              }}
            />
          </FormControl>

          <FormControl isInvalid={Boolean(errors.issuingAuthority)}>
            <FormLabel
              htmlFor="issuingAuthority"
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
          <FormLabel
            htmlFor="link"
            w={'8.625rem'}
          >
            링크
          </FormLabel>
          <FormTextInput
            placeholder="https://"
            id="link"
            register={{ ...register('link') }}
          />
        </FormControl>

        <FormControl isInvalid={Boolean(errors.description)}>
          <FormLabel
            htmlFor="description"
            w={'8.625rem'}
          >
            설명
          </FormLabel>
          <FormTextarea
            h={'16.625rem'}
            placeholder="내용을 입력해주세요."
            id="description"
            register={{ ...register('description') }}
            error={errors.description}
            autoComplete="off"
            spellCheck="false"
            resize="none"
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
  );
};

export default AwardForm;
