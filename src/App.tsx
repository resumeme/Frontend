import { ChakraProvider } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { RouterProvider } from 'react-router-dom';
import { appPaths } from './config/paths';
import CONSTANTS from './constants/index';
import { ResumeMeErrorResponse } from './types/errorResponse';
import { deleteCookie } from './utils/cookie';
import router from '~/routes/router';
import theme from '~/theme';
import Fonts from '~/theme/typography/fonts';

const { toast } = createStandaloneToast({ theme });

const axiosErrorHandler = (error: Error) => {
  if (isAxiosError<ResumeMeErrorResponse>(error) && error.response) {
    const { code } = error.response.data;
    const { status } = error.response;

    switch (status) {
      case 401:
        deleteCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
        deleteCookie(CONSTANTS.REFRESH_TOKEN_HEADER);

        alert(CONSTANTS.ERROR_MESSAGES[code]);

        window.location.href = appPaths.signIn();
        break;

      default:
        if (!(code in CONSTANTS.ERROR_MESSAGES)) {
          return;
        }

        toast({
          duration: 2000,
          description: CONSTANTS.ERROR_MESSAGES[code],
          status: 'error',
        });
        break;
    }
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
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: { position: 'top', duration: 2000 } }}
      >
        <Fonts />
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
