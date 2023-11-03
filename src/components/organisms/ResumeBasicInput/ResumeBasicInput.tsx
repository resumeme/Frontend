import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react';
import LinkIconBox from './LinkIconBox';
import TitleInput from '../../atoms/TitleInput/TitleInput';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';

const USER = {
  NAME: '이민희',
};

const ResumeBasicInput = () => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      gap={4}
      width={'992px'}
      id="resume-basic-input"
    >
      {/* NOTE 이력서 제목 */}
      <Box
        w={'full'}
        mb={10}
        display={'flex'}
        alignItems={'center'}
      >
        <TitleInput />
        <Button
          size={'xs'}
          ml={5}
        >
          저장
        </Button>
      </Box>

      {/* NOTE 기본 정보 */}
      <Box w={'full'}>
        <Flex justifyContent={'space-between'}>
          <Box w={'400px'}>
            <Flex
              direction={'column'}
              gap={5}
            >
              <Heading>{USER.NAME}</Heading>
              <Box>
                <Flex
                  justify={'space-between'}
                  mb={3}
                >
                  {/* TODO 민희님이 만들어놓은 컴포넌트 사용할 것 */}
                  <Text
                    color={'gray.700'}
                    fontWeight={'semibold'}
                  >
                    참고 링크
                  </Text>
                  <Button size={'xs'}>+</Button>
                </Flex>
                <Box mb={3}>
                  <LinkIconBox
                    url="https://github.com/khakhid"
                    variant="github"
                  />
                  <LinkIconBox url="https://github.com/khakhid" />
                  <LinkIconBox url="https://github.com/khakhid" />
                </Box>
                <BorderBox p={5}>
                  <Flex
                    direction="column"
                    gap={4}
                  >
                    <RadioGroup defaultValue="etc">
                      <Stack
                        spacing={4}
                        direction={'row'}
                      >
                        <Radio value="etc">기타</Radio>
                        <Radio value="github">Github</Radio>
                        <Radio value="blog">Blog</Radio>
                      </Stack>
                    </RadioGroup>
                    <Input placeholder="URL 입력" />
                    <Button size={'xs'}>저장</Button>
                  </Flex>
                </BorderBox>
              </Box>
            </Flex>
          </Box>
          <BorderBox w={'400px'}>
            <Box>
              <Input
                mb={3}
                placeholder="희망 직무"
              />
              <Input
                mb={3}
                placeholder="보유한 기술 스택"
              />
              {/* TODO MainTextarea 컴포넌트로 변경하기 */}
              <Textarea
                mb={3}
                borderColor={'gray.300'}
                focusBorderColor="primary.900"
                placeholder="자기소개 (**자 이내)"
              />
              <Flex justify={'flex-end'}>
                <Button size={'xs'}>저장</Button>
              </Flex>
            </Box>
          </BorderBox>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ResumeBasicInput;
