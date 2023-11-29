import { Box, Flex, Heading, Image, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { Option } from '~/components/molecules/OptionsButton/OptionsButton';
import { EventGrid } from '~/components/organisms/EventGrid';
import { assets } from '~/config/assets';
import { appPaths } from '~/config/paths';
import { useCheckOpenedEvent } from '~/hooks/useCheckOpendEvent';
import useUser from '~/hooks/useUser';
import { useGetEventList } from '~/queries/event/useGetEventList';
import { usePostCreateResume } from '~/queries/resume/create/usePostCreateResume';
import { LAYOUT_SIZE } from '~/routes/layoutSize.const';

const MainPage = () => {
  const { user } = useUser();

  const toast = useToast();

  const {
    data: { events },
  } = useGetEventList({ page: 1, size: 4 });

  const { mutate: createResume } = usePostCreateResume();

  const navigate = useNavigate();

  const hasOpenedEvent = useCheckOpenedEvent();

  const mentorButton: Option[] = [
    {
      text: '이벤트 생성',
      onClick: () => {
        if (hasOpenedEvent()) {
          toast({ description: '한 번에 하나의 이벤트만 진행할 수 있어요.', status: 'info' });
        } else {
          navigate(appPaths.eventCreate());
        }
      },
    },
    {
      text: '이벤트 관리',
      onClick: () => navigate(appPaths.myPage()),
    },
  ];

  const menteeButton: Option[] = [
    {
      text: '새 이력서 작성',
      onClick: createResume,
    },
    {
      text: '이력서 관리',
      onClick: () => navigate(appPaths.managementResume()),
    },
  ];

  const pendingButton: Option[] = [
    {
      text: '이벤트 생성',
      onClick: () =>
        toast({
          description: '멘토 가입이 승인되면 작성할 수 있어요.',
        }),
    },
    {
      text: '이벤트 관리',
      onClick: () => navigate(appPaths.myPage()),
    },
  ];

  const button_info = user
    ? user.role === 'mentor'
      ? mentorButton
      : user.role === 'mentee'
      ? menteeButton
      : pendingButton
    : menteeButton;

  return (
    <>
      <Box
        bg={'white'}
        mt={LAYOUT_SIZE.HEADER_HEIGHT}
        borderBottom={'1px'}
        borderColor={'gray.300'}
      >
        <Box
          maxW={'960px'}
          mx={'auto'}
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: '3rem', md: '' }}
            justify={'space-between'}
            align={'center'}
            py={'4rem'}
            // maxW={'950px'}
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
                <Text color={'gray.800'}>
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
                  onClick={button_info[1].onClick}
                >
                  {button_info[1].text}
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
        </Box>
      </Box>
      <Box
        maxW={'960px'}
        mx={'auto'}
        mb={'3rem'}
      >
        <Heading
          mt={'3.5rem'}
          mb={'1rem'}
          fontSize={'1.5rem'}
          color={'gray.800'}
        >
          진행중인 이벤트
        </Heading>
        <EventGrid
          row={4}
          events={events}
        />
      </Box>
    </>
  );
};

export default MainPage;
