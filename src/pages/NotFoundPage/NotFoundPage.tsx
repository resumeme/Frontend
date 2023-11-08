import { Box, Container, Flex, Image, Heading, Text, Highlight } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { assets } from '~/config/assets';

const HEADER_HEIGHT = 65;
const FOOTER_HEIGHT = 430;

const IMAGE = {
  SRC: assets.noDataSvg,
  ALT: 'error',
  SIZE: '200px',
};

const TEXT_CONTENTS = {
  HEADING: 'ERROR ヾ( •́д•̀ ;)ﾉ',
  DESCRIBE: '요청하신 페이지를 찾을 수 없습니다.',
  CODE: '__404_ Not_Found__',
};

const BUTTON_CONTENT = {
  TEXT: '돌아가기',
  HREF: '/',
};

const NotFoundPage = () => {
  const pageHeight = `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`;

  return (
    <>
      <Flex
        align="center"
        justify="center"
        h={pageHeight}
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
              userSelect="none"
            />
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
              <Box
                w={'full'}
                mt={'30px'}
              >
                <Link to={BUTTON_CONTENT.HREF}>
                  <Button
                    variant={'cancel'}
                    color={'gray.600'}
                    fontWeight={'semiBold'}
                    _hover={{ bg: 'gray.300' }}
                  >
                    {BUTTON_CONTENT.TEXT}
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default NotFoundPage;
