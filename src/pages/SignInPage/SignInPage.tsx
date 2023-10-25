import { environments } from '~/config/environments';

const SignInPage = () => {
  const kakaoSignInUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${environments.kakaoRestApiKeyEnv()}&redirect_uri=${environments.kakaoRedirectUriEnv()}&response_type=code`;
  const handleKakaoClick = () => {
    window.location.href = kakaoSignInUrl;
  };
  return (
    <div>
      <div>resume.me</div>
      <div>이력,써에 가입하고 피드백을 받아보세요.</div>
      <div>연동할 소셜 서비스 계정을 선택하세요.</div>
      <button onClick={handleKakaoClick}>카카오 로그인</button>
    </div>
  );
};

export default SignInPage;
