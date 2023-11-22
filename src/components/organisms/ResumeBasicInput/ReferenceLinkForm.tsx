import { Box, Flex, FormControl, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import LinkItem from './LinkItem';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import CONSTANTS from '~/constants';
import { usePostResumeLink } from '~/queries/resume/create/usePostResumeLink';
import { useDeleteReferenceLink } from '~/queries/resume/delete/useDeleteReferenceLink';
import { ReadReferenceLink, ReferenceLink } from '~/types/referenceLink';

type ReferenceLinkFormProps = {
  defaultValue?: ReadReferenceLink[];
  resumeId: string;
};

const ReferenceLinkForm = ({ defaultValue, resumeId }: ReferenceLinkFormProps) => {
  const { mutate: postReferenceLinkMutate } = usePostResumeLink(resumeId);
  const { mutate: deleteReferenceLinkMutate } = useDeleteReferenceLink(resumeId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReferenceLink>();

  const onSubmit = handleSubmit((body) => {
    postReferenceLinkMutate({ resumeId, body });
    reset();
  });

  const handleRemoveLink = (componentId: number) => {
    deleteReferenceLinkMutate({ resumeId, linkId: componentId });
  };
  return (
    <>
      {defaultValue &&
        defaultValue?.map((data: ReadReferenceLink) => (
          <Box
            key={data.componentId}
            mb={3}
          >
            <LinkItem
              componentId={data.componentId}
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
