import { useMutation } from '@tanstack/react-query';
import postOAuthSignIn from '~/api/user/postOAuthSignIn';

type SignIn = {
  access: string;
  refresh: string;
};

export type SignInCallback = ({
  cacheKey,
  access,
  refresh,
}: Partial<
  {
    cacheKey?: string;
  } & SignIn
>) => void;

export const usePostOAuthSignIn = (
  loginProvider: string,
  code: string,
  signInCallback: SignInCallback,
) => {
  return useMutation({
    mutationKey: [code],
    mutationFn: () => postOAuthSignIn(loginProvider, code),
    onSuccess: () => signInCallback,
  });
};
