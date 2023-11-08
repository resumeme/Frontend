import { environments } from '~/config/environments';

const CONSTANTS = {
  SIGN_UP_CACHE_KEY: 'sign-up-cache-key',
  RESUME_DEFAULT_TITLE: '새 이력서',
  ROLE_MENTEE: 'ROLE_MENTEE',
  ROLE_MENTOR: 'ROLE_MENTOR',
  ROLE_PENDING: 'ROLE_PENDING',
  PHONE_NUMBER_REGEX: /^010\d{8}$/g,
  KAKAO_SIGNIN_URL: `https://kauth.kakao.com/oauth/authorize?client_id=${environments.kakaoRestApiKeyEnv()}&redirect_uri=${environments.kakaoRedirectUriEnv()}&response_type=code`,
};

export default CONSTANTS;
