import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import BasicInfoForm from './BasicInfoForm';
import ReferenceLinkForm from './ReferenceLinkForm';
import TitleInputForm from './TitleInputForm';
import { BorderBox } from '~/components/atoms/BorderBox';

/* TODO api 요청으로 데이터 받아오기 */

const USER = {
  NAME: '이민희',
};

const ResumeBasicInput = () => {
  return (
    <Flex
      direction={'column'}
      gap={4}
      width={'full'}
      id="resume-basic-input"
    >
      <TitleInputForm />
      <Box w={'full'}>
        <Flex justifyContent={'space-between'}>
          <Box w={'400px'}>
            <Flex
              direction={'column'}
              gap={5}
            >
              {/* FIXME 유저 데이터 받아와서 이름 렌더링하기 */}
              <Heading>{USER.NAME}</Heading>
              <Box>
                <Flex
                  justify={'space-between'}
                  my={3}
                >
                  <Text
                    color={'gray.700'}
                    fontSize="lg"
                    fontWeight={'bold'}
                  >
                    참고 링크
                  </Text>
                </Flex>
                <ReferenceLinkForm />
              </Box>
            </Flex>
          </Box>
          <BorderBox
            w={'400px'}
            height={'fit-content'}
          >
            <BasicInfoForm />
          </BorderBox>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ResumeBasicInput;
