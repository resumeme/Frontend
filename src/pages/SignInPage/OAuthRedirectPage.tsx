import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Spinner } from '~/components/atoms/Spinner';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { usePostOAuthSignIn } from '~/queries/usePostOAuthSignIn';
import { useCacheKeyStore } from '~/stores/useCacheKeyStore';

const OAuthRedirectPage = () => {
  const [params] = useSearchParams();
  const code = params.get('code');
  const navigate = useNavigate();
  const toast = useToast();
  const { initialUser } = useUser();

  type SignInCallback = { cacheKey?: string; accessToken?: string; refreshToken?: string };

  const setCacheKey = useCacheKeyStore((state) => state.setCacheKey);

  const signInCallback = ({ cacheKey, accessToken, refreshToken }: SignInCallback) => {
    // 새로운 사용자가 로그인한 경우
    if (cacheKey) {
      setCacheKey(cacheKey);
      navigate('/sign-up');
      return;
    }
    // 기존 사용자가 로그인한 경우
    if (accessToken && refreshToken) {
      initialUser(accessToken, refreshToken);
    }
    toast({
      title: '로그인 성공',
      status: 'success',
      duration: 3000,
    });
    navigate(appPaths.main());
    return;
  };

  const { mutate: signInMutate } = usePostOAuthSignIn();

  useEffect(() => {
    if (!code) {
      toast({
        title: '소셜 서비스의 인가 코드를 읽어올 수 없습니다.',
        description: '로그인을 다시 시도해주세요.',
        status: 'error',
        duration: 9000,
      });
      navigate(appPaths.signIn());
      return;
    }
    signInMutate(
      { loginProvider: 'kakao', code },
      {
        onSuccess: ({ cacheKey, accessToken, refreshToken }) => {
          signInCallback({ cacheKey, accessToken, refreshToken });
        },
      },
    );
  }, []);

  return <Spinner />;
};

export default OAuthRedirectPage;
