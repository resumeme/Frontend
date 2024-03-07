import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TitleInputForm from '../../molecules/TitleInputForm/TitleInputForm';
import BasicInfoForm from '../BasicInfoForm/BasicInfoForm';
import BasicInfoView from '../BasicInfoView/BasicInfoView';
import ReferenceLinkForm from '../ReferenceLinkForm/ReferenceLinkForm';
import { BorderBox } from '~/components/atoms/BorderBox';
import useUser from '~/hooks/useUser';
import { useGetResumeReferenceLinks } from '~/queries/resume/details/useGetResumeReferenceLinks';
import { BasicInfo } from '~/types/basicInfo';

type ResumeBasicInputProps = {
  basicInfo: BasicInfo;
};

const ResumeBasicInput = ({ basicInfo }: ResumeBasicInputProps) => {
  const { user } = useUser();
  const { resumeId = '' } = useParams();
  const { data: referenceLinks } = useGetResumeReferenceLinks({ resumeId });

  const [isEdit, setIsEdit] = useState(true);

  useEffect(() => {
    if (basicInfo.position || basicInfo.skills?.length > 0 || basicInfo.introduce) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  }, [basicInfo]);

  const defaultTitle = basicInfo?.title;

  const basicInfoData = {
    position: basicInfo?.position,
    skills: basicInfo?.skills,
    introduce: basicInfo?.introduce,
  };

  return (
    <Flex
      direction={'column'}
      gap={4}
      width={'full'}
      id="resume-basic-input"
    >
      <TitleInputForm defaultValue={defaultTitle} />
      <Box w={'full'}>
        <Flex
          justifyContent={'space-between'}
          wrap={'wrap'}
        >
          <Box w={{ base: 'full', md: '45%' }}>
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
                <ReferenceLinkForm
                  defaultValue={referenceLinks}
                  resumeId={resumeId}
                />
              </Box>
            </Flex>
          </Box>
          <BorderBox
            w={{ base: 'full', md: '45%' }}
            height={'fit-content'}
            position={'relative'}
          >
            {isEdit ? (
              <BasicInfoForm
                {...basicInfoData}
                onSaveClick={() => setIsEdit(false)}
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
