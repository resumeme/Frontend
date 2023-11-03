import { Box, Flex, FormControl, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LinkIconBox from './LinkIconBox';
import { LinkIconBoxProps } from './LinkIconBox';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormTextInput } from '~/components/molecules/FormTextInput';

const ReferenceLinkForm = () => {
  const [linkData, setLinkData] = useState<LinkIconBoxProps[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    // 입력된 참고 링크 데이터 상태 추가
    setLinkData([...linkData, values]);

    /* TODO API 요청하는 부분 */
    console.log('values', values);

    // 폼 리셋하기
    reset();
  });

  const URL_PATTERN = /^(https?:\/\/)?([\w.-]+\.\w{2,})([\w\W]*)$/;

  return (
    <>
      {/* TODO 링크 박스 추가되게 하기 -> 추후에는 api로 변경 */}
      {linkData.map((data: LinkIconBoxProps, index) => (
        <Box
          key={index}
          mb={3}
        >
          <LinkIconBox
            url={data.url}
            type={data.type}
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
              <Button
                mt={3}
                type="submit"
                size={'xs'}
              >
                저장
              </Button>
            </FormControl>
          </form>
        </Flex>
      </BorderBox>
    </>
  );
};

export default ReferenceLinkForm;
