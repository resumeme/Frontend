import axios from 'axios';
import { environments } from '~/config/environments';
import { appPaths } from '~/config/paths';
import CONSTANTS from '~/constants';
import { ErrorMessage } from '~/types/errorResponse';
import { deleteCookie, getCookie, setCookie } from '~/utils/cookie';

export const resumeMeAxios = axios.create({
  baseURL: environments.baseUrlEnv(),
  headers: {
    'Content-Type': 'application/json',
  },
});

resumeMeAxios.interceptors.request.use((config) => {
  const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  if (accessToken) {
    config.headers[CONSTANTS.ACCESS_TOKEN_HEADER] = accessToken;
  }

  return config;
});

resumeMeAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const statusCode = error.response.status;
    const { code }: { code: ErrorMessage } = error.response.data;

    if (statusCode === 400 && code === 'INVALID_ACCESS_TOKEN') {
      deleteCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

      const originalRequest = error.config;

      const refreshToken = getCookie(CONSTANTS.REFRESH_TOKEN_HEADER);

      if (!refreshToken) return;

      originalRequest._retry = true;
      originalRequest.headers[CONSTANTS.REFRESH_TOKEN_HEADER] = refreshToken;

      const { headers } = await resumeMeAxios(originalRequest);

      const newAccessToken = headers[CONSTANTS.ACCESS_TOKEN_HEADER];

      setCookie(CONSTANTS.ACCESS_TOKEN_HEADER, newAccessToken);
    }

    if (statusCode === 401) {
      if (code === 'MENTOR_ALREADY_APPROVED') {
        if (getCookie(CONSTANTS.ACCESS_TOKEN_HEADER)) {
          deleteCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
          deleteCookie(CONSTANTS.REFRESH_TOKEN_HEADER);

          alert(CONSTANTS.ERROR_MESSAGES[code]);

          window.location.href = appPaths.signIn();
        }
      } else {
        alert(CONSTANTS.ERROR_MESSAGES.LOGIN_REQUIRED);

        window.location.href = appPaths.signIn();
      }
    }

    return Promise.reject(error);
  },
);
