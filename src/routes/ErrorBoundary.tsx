import { Box, Container, Flex, Heading, Highlight, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { assets } from '~/config/assets';

const ErrorBoundary = () => {
  const IMAGE = {
    SRC: assets.noDataSvg,
    ALT: 'error',
    SIZE: '200px',
  };

  const TEXT_CONTENTS = {
    HEADING: 'ERROR ໒꒰ ◞ ‌ ◟ ꒱ྀིა',
    DESCRIBE: '페이지 이동 중입니다. 잠시만 기다려 주세요.',
    CODE: '__400_ BAD_REQUEST__',
  };

  return (
    <>
      {' '}
      <Flex
        align="center"
        justify="center"
        h={'100vh'}
      >
        <Container
          maxW="550px"
          color="gray.700"
        >
          <Flex
            align="center"
            justify="center"
            direction="column"
            gap={8}
          >
            {/* <Image
              src={IMAGE.SRC}
              alt={IMAGE.ALT}
              boxSize={IMAGE.SIZE}
              pointerEvents="none"
              userSelect="none"
            /> */}
            <Flex
              direction="column"
              align="center"
              gap={3}
            >
              <Heading
                fontSize="3xl"
                fontWeight={'black'}
                mb="3"
              >
                {TEXT_CONTENTS.HEADING}
              </Heading>

              <Text fontSize="md">
                <Highlight
                  query={TEXT_CONTENTS.DESCRIBE}
                  styles={{ px: '3', py: '1', rounded: 'full', bg: 'green.100', color: 'gray.700' }}
                >
                  {TEXT_CONTENTS.DESCRIBE}
                </Highlight>
              </Text>

              <Text
                fontSize="lg"
                fontWeight={'light'}
                color="gray.500"
                mt={'20px'}
              >
                {TEXT_CONTENTS.CODE}
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default ErrorBoundary;
