import { useMutation } from '@tanstack/react-query';
import postOAuthSignIn from '~/api/user/postOAuthSignIn';

type SignInCallback = ({
  cacheKey,
  access,
  refresh,
}: {
  cacheKey: string;
  access: string;
  refresh: string;
}) => void;

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
