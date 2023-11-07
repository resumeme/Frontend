import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SignInCallback, usePostOAuthSignIn } from '~/queries/usePostOAuthSignIn';
import { useCacheKeyStore } from '~/stores/useCacheKeyStore';

const OAuthRedirectPage = () => {
  const [params] = useSearchParams();
  const code = params.get('code');
  const navigate = useNavigate();

  if (!code) {
    throw new Error('소셜 로그인 중 에러가 발생했습니다. 코드를 읽어올 수 없습니다.');
  }

  const setCacheKey = useCacheKeyStore((state) => state.setCacheKey);
  const signInCallback: SignInCallback = ({ cacheKey }) => {
    // 새로운 사용자가 로그인한 경우
    if (cacheKey) {
      setCacheKey(cacheKey);
      navigate('/sign-up/common');
      return;
    }
    /**TODO - Authorization, refresh 토큰 저장 */
    navigate('/');
    return;
  };

  const signInMutation = usePostOAuthSignIn('kakao', code, signInCallback);

  useEffect(() => {
    signInMutation.mutate();
  }, []);

  return <></>;
};

export default OAuthRedirectPage;
