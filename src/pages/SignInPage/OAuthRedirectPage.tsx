import { useNavigate, useSearchParams } from 'react-router-dom';
import { usePostOAuthSignIn } from '~/queries/usePostOAuthSignIn';

const OAuthRedirectPage = () => {
  const [params] = useSearchParams();
  const code = params.get('code');
  const navigate = useNavigate();

  if (!code) {
    throw new Error('소셜 로그인 중 에러가 발생했습니다. 코드를 읽어올 수 없습니다.');
  }

  usePostOAuthSignIn('kakao', code, ({ cacheKey, access, refresh }) => {
    // 새로운 사용자가 로그인한 경우
    if (cacheKey) {
      navigate('/sign-up/common');
    }
    /**TODO - access, refresh 토큰 저장 */
  });

  return <></>;
};

export default OAuthRedirectPage;
