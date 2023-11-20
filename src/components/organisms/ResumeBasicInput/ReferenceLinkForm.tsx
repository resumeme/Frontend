import { Box, Flex, FormControl, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import LinkItem from './LinkItem';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import CONSTANTS from '~/constants';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { usePostResumeLink } from '~/queries/resume/create/usePostResumeLink';
import { ReferenceLink } from '~/types/referenceLink';

type ReferenceLinkFormProps = {
  defaultValue: ReferenceLink[];
  resumeId: string;
};

const ReferenceLinkForm = ({ defaultValue, resumeId }: ReferenceLinkFormProps) => {
  const { mutate } = usePostResumeLink();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    console.log(values);

    /* TODO 저장 API 연결하기 */
    /* 
    const referenceLink = values;
      const componentId = mutate({ resumeId, referenceLink });
    */

    reset();
  });

  const handleRemoveLink = (componentId: number) => {
    /* TODO 삭제 API 연결하기 */
    /* TODO onSuccess에 쿼리 데이터 갱신하기 (queryKey: all) */
    /* 
      updater 함수 예시
      (previous) => previous.map((linkItem) => linkItem.id === newLinkItem.id ? newlinkItem : linkItem)
    
    */
    alert(`removed componentId: ${componentId}`); // 임시
  };
  return (
    <>
      {defaultValue &&
        defaultValue?.map((data: ReferenceLink) => (
          <Box
            key={data.componentId}
            mb={3}
          >
            <LinkItem
              url={data.url}
              linkType={data.linkType}
              onRemove={handleRemoveLink}
            />
          </Box>
        ))}

      <BorderBox p={5}>
        <Flex
          direction="column"
          gap={4}
        >
          <form onSubmit={onSubmit}>
            <FormControl isInvalid={Boolean(errors.url)}>
              <RadioGroup
                defaultValue="GITHUB"
                colorScheme="primary"
                mb={3}
              >
                <Stack
                  spacing={4}
                  direction={'row'}
                >
                  <Radio
                    {...register('linkType')}
                    value="OTHER"
                  >
                    링크
                  </Radio>
                  <Radio
                    {...register('linkType')}
                    value="GITHUB"
                  >
                    깃허브
                  </Radio>
                  <Radio
                    {...register('linkType')}
                    value="BLOG"
                  >
                    블로그
                  </Radio>
                </Stack>
              </RadioGroup>
              <FormTextInput
                id="url"
                register={{
                  ...register('url', {
                    required: 'URL을 입력하세요',
                    pattern: {
                      value: CONSTANTS.URL_PATTERN,
                      message: '올바른 URL 형식이 아닙니다',
                    },
                  }),
                }}
                error={errors.url}
                placeholder="URL 입력"
                mb={1}
              />
              <Flex justify="flex-end">
                <Button
                  mt={3}
                  type="submit"
                  size={'xs'}
                >
                  추가
                </Button>
              </Flex>
            </FormControl>
          </form>
        </Flex>
      </BorderBox>
    </>
  );
};

export default ReferenceLinkForm;
