import { Box, Flex, Heading, Image, Text, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { Label } from '~/components/atoms/Label';
import { Option } from '~/components/molecules/OptionsButton/OptionsButton';
import { EventGrid } from '~/components/organisms/EventGrid';
import { assets } from '~/config/assets';
import { appPaths } from '~/config/paths';
import CONSTANTS from '~/constants';
import useUser from '~/hooks/useUser';
import { useGetEventList } from '~/queries/event/useGetEventList';
import { usePostCreateResume } from '~/queries/resume/create/usePostCreateResume';
import { LAYOUT_SIZE } from '~/routes/layoutSize.const';

const ANNOUNCEMENT = [
  {
    type: '한줄알림',
    content: '이력.써 대망의 오픈! 멘티 간의 피드백 기능은 현재 열심히 개발 중에 있습니다 :)',
    date: '2023.11.29',
  },
];

const MainPage = () => {
  const { user } = useUser();

  const toast = useToast();

  const {
    data: { events },
  } = useGetEventList({ page: 1, size: 4 });

  const { mutate: postCreateResume } = usePostCreateResume();

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
      onClick: postCreateResume,
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
            flexShrink={1}
          >
            <Flex
              direction={'column'}
              flexShrink={0}
            >
              <Text
                color={'gray.800'}
                fontSize={'1.625rem'}
                fontWeight={700}
                whiteSpace={'pre-line'}
              >
                {`커리어를 시작하는 당신의 이력서에는\n최대한 많은 피드백이 필요합니다.`}
              </Text>
              <Flex mt={'1.5rem'}>
                <Text
                  color={'gray.800'}
                  fontWeight={'medium'}
                  whiteSpace={'pre-line'}
                >
                  <Text
                    as={'span'}
                    color={'primary.900'}
                    fontWeight={700}
                  >
                    이력.써
                  </Text>
                  {`의 피드백 커뮤니티를 경험하고, 커리어의 나침반을 찾아보세요.`}
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
        <Link to={appPaths.main()}>
          <Text
            mt={'3.5rem'}
            mb={'1rem'}
            fontSize={'1.5rem'}
            fontWeight={'bold'}
            color={'gray.800'}
          >
            안내사항
          </Text>
        </Link>
        <BorderBox borderRadius={'lg'}>
          {ANNOUNCEMENT.map((item, index) => {
            return (
              <Flex
                key={index}
                justify={'space-between'}
                align={'center'}
              >
                <Flex>
                  <Label
                    py={0}
                    maxH={'fit-content'}
                    fontSize={'xs'}
                    fontWeight={'bold'}
                  >
                    {item.type}
                  </Label>
                  <Text
                    ml={5}
                    fontWeight={'medium'}
                  >
                    {item.content}
                  </Text>
                </Flex>
                <Text
                  color={'gray.500'}
                  fontSize={'sm'}
                >
                  {item.date}
                </Text>
              </Flex>
            );
          })}
        </BorderBox>
      </Box>
      <Box
        maxW={'960px'}
        mx={'auto'}
        mb={'3rem'}
      >
        <Link to={appPaths.viewEvent()}>
          <Heading
            mt={'3.5rem'}
            mb={'1rem'}
            fontSize={'1.5rem'}
            color={'gray.800'}
            _hover={{
              textDecoration: 'underline',
              textUnderlineOffset: '.2rem',
            }}
          >
            최신 이벤트
          </Heading>
        </Link>
        {events && events.length > 0 ? (
          <EventGrid
            row={4}
            events={events}
          />
        ) : (
          <Flex
            h={'10rem'}
            justify={'center'}
            align={'center'}
          >
            <Text
              color={'gray.400'}
              fontWeight={600}
            >
              {CONSTANTS.DESCRIBE_MESSAGE.NO_EVENTS}
            </Text>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default MainPage;
