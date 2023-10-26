const { VITE_BASE_URL, VITE_KAKAO_REST_API_KEY, VITE_KAKAO_REDIRECT_URI } = import.meta.env;

export const environments = {
  baseUrlEnv: () => checkEnv(VITE_BASE_URL),
  kakaoRestApiKeyEnv: () => checkEnv(VITE_KAKAO_REST_API_KEY),
  kakaoRedirectUriEnv: () => checkEnv(VITE_KAKAO_REDIRECT_URI),
};

const checkEnv = (envKey: string) => {
  if (!envKey) {
    throw new Error(`${envKey} 환경변수가 설정돼있지 않습니다.`);
  }
  return envKey;
};
