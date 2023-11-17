import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import BasicInfoForm from './BasicInfoForm';
import BasicInfoView from './BasicInfoView';
import ReferenceLinkForm from './ReferenceLinkForm';
import TitleInputForm from './TitleInputForm';
import { BorderBox } from '~/components/atoms/BorderBox';
import useUser from '~/hooks/useUser';
import { BasicInfo } from '~/types/basicInfo';

type ResumeBasicInputProps = {
  basicInfo: BasicInfo;
};

const ResumeBasicInput = ({ basicInfo }: ResumeBasicInputProps) => {
  const { user } = useUser();

  const [isEdit, setIsEdit] = useState(true);

  useEffect(() => {
    if (basicInfo) {
      console.log(basicInfo);
      setIsEdit(false);
    }
  }, [basicInfo]);

  const defaultTitle = basicInfo?.title;
  const basicInfoData = {
    position: basicInfo?.position,
    skills: basicInfo?.skills,
    introduce: basicInfo?.introduce,
  }; // TODO BasicInfo 컴포넌트 둘에게 프로퍼티로 넘기기

  return (
    <Flex
      direction={'column'}
      gap={4}
      width={'full'}
      id="resume-basic-input"
    >
      <TitleInputForm defaultValue={defaultTitle} />
      <Box w={'full'}>
        <Flex justifyContent={'space-between'}>
          <Box w={'400px'}>
            <Flex
              direction={'column'}
              gap={5}
            >
              <Heading>{user?.realName}</Heading>
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
            position={'relative'}
          >
            {isEdit ? (
              <BasicInfoForm
                {...basicInfoData}
                onSave={() => setIsEdit(true)}
              />
            ) : (
              <BasicInfoView
                {...basicInfoData}
                onEditClick={() => setIsEdit(true)}
              />
            )}
          </BorderBox>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ResumeBasicInput;
