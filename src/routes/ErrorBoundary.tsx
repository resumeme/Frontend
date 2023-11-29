import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { HighlightedDescribe } from '~/components/molecules/HighlightedDescribe';
import { appPaths } from '~/config/paths';

const ErrorBoundary = () => {
  const TEXT_CONTENTS = {
    HEADING: 'ERROR (•́д•̀)',
    DESCRIBE: '에러가 발생했어요. 잠시 후에 다시 시도해 주세요.',
    CODE: '__BAD_REQUEST__',
  };

  const BUTTON_CONTENT = {
    TEXT: '돌아가기',
    HREF: appPaths.main(),
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

              <HighlightedDescribe describe={TEXT_CONTENTS.DESCRIBE} />

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
                <Link
                  to={BUTTON_CONTENT.HREF}
                  replace
                >
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

export default ErrorBoundary;
