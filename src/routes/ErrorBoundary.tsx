import { Flex } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { useRouteError } from 'react-router-dom';
import SignInPage from '~/pages/SignInPage/SignInPage';

const ErrorBoundary = () => {
  const error = useRouteError();

  if (error instanceof AxiosError && error.response) {
    const { status } = error.response;

    if (status === 401) {
      return (
        <Flex
          justify={'center'}
          align={'center'}
          h={'100vh'}
        >
          <SignInPage />
        </Flex>
      );
    }
  }
  return;
};

export default ErrorBoundary;
