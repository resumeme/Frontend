import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { usePostOAuthSignIn } from '~/queries/usePostOAuthSignIn';
import { useCacheKeyStore } from '~/stores/useCacheKeyStore';

const OAuthRedirectPage = () => {
  const [params] = useSearchParams();
  const code = params.get('code');
  const navigate = useNavigate();

  if (!code) {
    throw new Error('소셜 로그인 중 에러가 발생했습니다. 코드를 읽어올 수 없습니다.');
  }

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
    /**TODO - Authorization, refresh 토큰 저장 */
    console.log('AccessToken: ', accessToken);
    console.log('RefreshToken: ', refreshToken);
    navigate('/');
    return;
  };

  const signInMutation = usePostOAuthSignIn();

  useEffect(() => {
    signInMutation.mutate(
      { loginProvider: 'kakao', code },
      {
        onSuccess: ({ cacheKey, accessToken, refreshToken }) => {
          signInCallback({ cacheKey, accessToken, refreshToken });
        },
      },
    );
  }, []);

  return <></>;
};

export default OAuthRedirectPage;
