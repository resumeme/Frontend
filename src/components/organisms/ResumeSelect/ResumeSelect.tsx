import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import RadioCardGroup from '../RadioCardGroup/RadioCardGroup';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { ResumeListItem } from '~/components/molecules/ResumeListItem';
import { usePostCreateResume } from '~/queries/resume/create/usePostCreateResume';
import { useGetMyResumes } from '~/queries/resume/useGetMyResumes';

type ResumeSelectProps = {
  onCancel: () => void;
  onSubmit: SubmitHandler<{ resumeId: string }>;
};
const ResumeSelect = ({ onCancel, onSubmit }: ResumeSelectProps) => {
  const { data } = useGetMyResumes();
  const { mutate: postCreateResumeMutate } = usePostCreateResume();
  const { register, handleSubmit } = useForm<{ resumeId: string }>();
  return (
    <>
      <Text
        color={'gray.800'}
        fontSize={'1.3rem'}
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
            h={'30rem'}
            overflow={'auto'}
          >
            {data.length == 0 ? (
              <Flex
                minH={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <VStack spacing={'2rem'}>
                  <Text
                    fontSize={'1rem'}
                    fontWeight={'600'}
                    color={'gray.600'}
                  >
                    신청할 이력서가 없어요. ꒰⑅ᵕ̆‧̯ᵕ̆⑅꒱
                  </Text>
                  <Button
                    size={'md'}
                    onClick={() => postCreateResumeMutate()}
                  >
                    이력서 작성하러 가기
                  </Button>
                </VStack>
              </Flex>
            ) : (
              <RadioCardGroup
                options={data.map((data) => ({
                  value: data.id.toString(),
                  children: <ResumeListItem data={data} />,
                }))}
                formName="resumeId"
                defaultValue={data[0].id.toString()}
                register={{ ...register('resumeId') }}
                direction="column"
                overflow={'auto'}
                borderRadius={'0.625rem'}
              />
            )}
          </BorderBox>
          {data.length > 0 && (
            <HStack alignSelf={'flex-end'}>
              <Button
                size={'sm'}
                variant={'cancel'}
                onClick={onCancel}
              >
                취소
              </Button>
              <Button
                size={'md'}
                type="submit"
              >
                신청하기
              </Button>
            </HStack>
          )}
        </Flex>
      </form>
    </>
  );
};

export default ResumeSelect;
