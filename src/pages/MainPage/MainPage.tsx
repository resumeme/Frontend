import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { Option } from '~/components/molecules/OptionsButton/OptionsButton';
import { assets } from '~/config/assets';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { usePostCreateResume } from '~/queries/resume/create/usePostCreateResume';
import { LAYOUT_SIZE } from '~/routes/layoutSize.const';

const MainPage = () => {
  const { user } = useUser();

  const { mutate: createResume } = usePostCreateResume();

  const navigate = useNavigate();

  const mentorButton: Option[] = [
    {
      text: '이벤트 생성',
      onClick: () => navigate(appPaths.eventCreate()),
    },
    {
      text: '이벤트 관리',
      onClick: () => navigate(appPaths.myPage()),
    },
  ];

  const menteeButton: Option[] = [
    {
      text: '새 이력서 작성',
      onClick: () => createResume(),
    },
    {
      text: '이력서 관리',
      onClick: () => navigate(appPaths.managementResume()),
    },
  ];

  const button_info = user ? (user.role === 'mentor' ? mentorButton : menteeButton) : menteeButton;

  return (
    <>
      <Box
        bg={'white'}
        mt={LAYOUT_SIZE.HEADER_HEIGHT}
        borderBottom={'1px'}
        borderColor={'gray.300'}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '3rem', md: '' }}
          mx={'auto'}
          justify={'space-between'}
          align={'center'}
          py={'4rem'}
          maxW={'950px'}
          flexShrink={1}
        >
          <Flex
            direction={'column'}
            flexShrink={0}
          >
            <Text
              color={'gray.800'}
              fontSize={'1.625rem'}
              fontWeight={600}
              whiteSpace={'pre-line'}
            >
              {`이력서를 작성하는 당신에게는, \n최대한의 많은 피드백이 필요합니다.`}
            </Text>
            <Flex mt={'1.5rem'}>
              <Text
                color={'primary.900'}
                fontWeight={900}
              >
                이력, 써
              </Text>
              <Text color={'gry.800'}>
                의 피드백 커뮤니티를 경험하고 커리어의 나침반을 찾으세요.
              </Text>
            </Flex>
            <Flex
              mt={'3rem'}
              gap={'1.5rem'}
            >
              <Button
                size={'md'}
                onClick={button_info[0].onClick}
              >
                {button_info[0].text}
              </Button>
              <Button
                bg={'initial'}
                color={'primary.900'}
                border={'1px'}
                borderColor={'primary.900'}
                size={'md'}
                onClick={() => navigate(appPaths.managementResume())}
              >
                이력서 관리
              </Button>
            </Flex>
          </Flex>

          <Image
            flexShrink={1}
            h={'15rem'}
            src={assets.resumesSvg}
            alt=""
          />
        </Flex>
        {/**FIXME - 아래는 임시 이력서 작성 버튼, 추후 대체할 것 */}
      </Box>
    </>
  );
};

export default MainPage;
