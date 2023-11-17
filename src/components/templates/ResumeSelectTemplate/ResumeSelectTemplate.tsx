import { Flex, HStack, Text } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { ResumeListItem } from '~/components/molecules/ResumeListItem';
import RadioCardGroup, { RadioOption } from '~/components/organisms/RadioCardGroup/RadioCardGroup';
import { useGetMyResumes } from '~/queries/resume/useGetMyResumes';

const ResumeSelectTemplate = () => {
  const { data } = useGetMyResumes();
  const resumeOptions: RadioOption[] = [];
  data.map((data) => {
    const option = {
      value: data.id.toString(),
      children: <ResumeListItem data={data} />,
    };
    resumeOptions.push(option);
  });
  const { register, handleSubmit } = useForm<{ resumeId: string }>();
  const onSubmit: SubmitHandler<{ resumeId: string }> = (values) => {
    /**TODO - 이벤트 신청 api 연결 */
    console.log(values);
  };
  return (
    <>
      <Text
        color={'gray.900'}
        fontWeight={'600'}
        fontSize={'1.5rem'}
        mb={'2rem'}
      >
        첨삭 신청하기
      </Text>
      <Text
        color={'gray.800'}
        fontSize={'1.5rem'}
        fontWeight={'600'}
        mb={'1rem'}
      >
        이력서 선택
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction={'column'}
          alignItems={'center'}
          gap={'1.2rem'}
        >
          <BorderBox
            w={'full'}
            minH={'30rem'}
            maxH={'90vh'}
            overflow={'auto'}
          >
            <RadioCardGroup
              options={resumeOptions}
              formName="resume"
              defaultValue={data[0].id.toString()}
              register={{ ...register('resumeId') }}
              direction="column"
              overflow={'auto'}
            />
          </BorderBox>
          <HStack alignSelf={'flex-end'}>
            <Button
              size={'md'}
              variant={'cancel'}
            >
              취소
            </Button>
            <Button size={'md'}>신청하기</Button>
          </HStack>
        </Flex>
      </form>
    </>
  );
};

export default ResumeSelectTemplate;
