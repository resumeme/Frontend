import { environments } from '~/config/environments';

const CONSTANTS = {
  SIGN_UP_CACHE_KEY: 'sign-up-cache-key',
  CACHE_KEY_HEADER: 'cachekey',
  ACCESS_TOKEN_HEADER: 'authorization',
  REFRESH_TOKEN_HEADER: 'refresh-token',
  RESUME_DEFAULT_TITLE: '새 이력서',
  ROLE_MENTEE: 'ROLE_MENTEE',
  ROLE_MENTOR: 'ROLE_MENTOR',
  ROLE_PENDING: 'ROLE_PENDING',
  PHONE_NUMBER_REGEX: /^010\d{8}$/g,
  KAKAO_SIGNIN_URL: `https://kauth.kakao.com/oauth/authorize?client_id=${environments.kakaoRestApiKeyEnv()}&redirect_uri=${environments.kakaoRedirectUriEnv()}&response_type=code`,
  SIGNUP_HEADER_MESSAGE: {
    MAIN: '이력, 써에 오신 것을 환영합니다!',
    SUB: '간단한 개인 정보를 입력하고 바로 시작하세요.',
  },
  LABEL_MULTI_SELECTABLE: '(여러 개 선택 가능)',
  URL_PATTERN: /^(https?:\/\/)?([\w.-]+\.\w{2,})([\w\W]*)$/,
};

export default CONSTANTS;
