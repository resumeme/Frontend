export const environments = {
  baseUrlEnv: () => getEnvVariable('VITE_BASE_URL'),
  kakaoRestApiKeyEnv: () => getEnvVariable('VITE_KAKAO_REST_API_KEY'),
  kakaoRedirectUriEnv: () => getEnvVariable('VITE_KAKAO_REDIRECT_URI'),
};

const getEnvVariable = (envKey: string) => {
  const envVariable = import.meta.env[envKey];
  if (!envVariable) {
    throw new Error(`${envKey} 환경변수가 설정돼있지 않습니다.`);
  }
  return envVariable;
};
