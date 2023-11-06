import { Box, Flex, FormControl, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LinkItem from './LinkItem';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormTextInput } from '~/components/molecules/FormTextInput';

type LinkData = {
  type?: 'default' | 'github' | 'blog';
  url?: string;
};

const ReferenceLinkForm = () => {
  const [linkData, setLinkData] = useState<LinkData[]>([]);

  const handleRemoveLink = (urlToRemove: string) => {
    const updatedLinks = linkData.filter((link) => link.url !== urlToRemove);
    setLinkData(updatedLinks);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    setLinkData([...linkData, values]);

    /* TODO API 요청하는 부분 */
    console.log('values', values);

    reset();
  });

  const URL_PATTERN = /^(https?:\/\/)?([\w.-]+\.\w{2,})([\w\W]*)$/;

  return (
    <>
      {linkData.map((data: LinkData, index) => (
        <Box
          key={index}
          mb={3}
        >
          <LinkItem
            key={index}
            url={data.url}
            type={data.type}
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
                defaultValue="github"
                colorScheme="primary"
                mb={3}
              >
                <Stack
                  spacing={4}
                  direction={'row'}
                >
                  <Radio
                    {...register('type')}
                    value="github"
                  >
                    깃허브
                  </Radio>
                  <Radio
                    {...register('type')}
                    value="blog"
                  >
                    블로그
                  </Radio>
                  <Radio
                    {...register('type')}
                    value="default"
                  >
                    기타
                  </Radio>
                </Stack>
              </RadioGroup>
              <FormTextInput
                id="url"
                register={{
                  ...register('url', {
                    required: 'URL을 입력하세요',
                    pattern: {
                      value: URL_PATTERN,
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
