import { ChakraProvider } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { RouterProvider } from 'react-router-dom';
import { appPaths } from './config/paths';
import CONSTANTS from './constants/index';
import { ResumeMeErrorResponse } from './types/errorResponse';
import router from '~/routes/router';
import theme from '~/theme';
import Fonts from '~/theme/typography/fonts';

const { toast } = createStandaloneToast({ theme });

const axiosErrorHandler = async (error: Error) => {
  if (isAxiosError<ResumeMeErrorResponse>(error) && error.response) {
    const { code } = error.response.data;
    const { status } = error.response;

    if (status === 401) {
      if (window.location.pathname === '/') {
        await window.location.assign(appPaths.signIn());
      } else {
        await window.location.replace(appPaths.signIn());
      }
    }

    if (status === 500) {
      await window.location.replace(appPaths.main());
    }
    toast({
      description: CONSTANTS.ERROR_MESSAGES[code],
      status: 'error',
      // position: 'top',
    });
  }
  return;
};

const queryClient = new QueryClient({
  defaultOptions: { mutations: { onError: axiosErrorHandler }, queries: { retry: 1 } },
  queryCache: new QueryCache({
    onError: axiosErrorHandler,
  }),
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
