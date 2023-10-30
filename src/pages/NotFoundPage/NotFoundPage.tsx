import { Container, Flex, Image, Heading, Text } from '@chakra-ui/react';

const HEADER_HEIGHT = 65;

const IMAGE = {
  SRC: 'src/assets/images/no-data.svg',
  ALT: 'error',
  SIZE: '200px',
};

// NOTE 나중에 contants로 뺄 수 있다면 뺄 것
const TEXT_CONTENTS = {
  HEADING: 'ERROR ヾ( •́д•̀ ;)ﾉ',
  DESCRIBE: '요청하신 페이지를 찾을 수 없습니다.',
  CODE: '404 Not Found',
};

const NotFoundPage = () => {
  const pageHeight = `calc(100vh - ${HEADER_HEIGHT}px)`;

  return (
    <>
      <Flex
        align="center"
        justify="center"
        h={pageHeight}
        userSelect="none"
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
            <Image
              src={IMAGE.SRC}
              alt={IMAGE.ALT}
              boxSize={IMAGE.SIZE}
              pointerEvents="none"
            />
            <Flex
              direction="column"
              align="center"
            >
              <Heading
                fontSize="xl"
                mb="3"
              >
                {TEXT_CONTENTS.HEADING}
              </Heading>
              <Text fontSize="sm">{TEXT_CONTENTS.DESCRIBE}</Text>
              <Text
                fontSize="sm"
                color="gray.500"
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

export default NotFoundPage;
