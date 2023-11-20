import axios from 'axios';
import { redirect } from 'react-router-dom';
import { environments } from '~/config/environments';
import CONSTANTS from '~/constants';
import { ERROR_MESSAGES } from '~/constants/errorMessage';
import { getCookie, setCookie } from '~/utils/cookie';

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
    const { code } = error.response.data;

    switch (statusCode) {
      //FIXME: 에러 코드 획정되면 code 수정하기
      case 400:
        if (code in ERROR_MESSAGES) {
          if (code === 'INVALID_ACCESS_TOKEN') {
            const originalRequest = error.config;

            const refreshToken = getCookie(CONSTANTS.REFRESH_TOKEN_HEADER);

            if (refreshToken) return;

            originalRequest._retry = true;
            originalRequest.headers[CONSTANTS.REFRESH_TOKEN_HEADER] = refreshToken;

            const { headers } = await resumeMeAxios(originalRequest);

            const newAccessToken = headers[CONSTANTS.ACCESS_TOKEN_HEADER];

            setCookie(CONSTANTS.ACCESS_TOKEN_HEADER, newAccessToken);
          }
        }
        break;
      case 403:
        //에러 코드 추가되면 내용 추가하기
        if (code === '멘토가 접근할 수 없는 내용입니다.') {
          redirect('/');
        }
        break;
      case 404:
        if (code === '페이지 없음 코드') {
          redirect('/'); //FIXME: 404페이지로 리다이렉트
        }
        break;
      default:
        if (statusCode >= 500) {
          console.error(error.response);
        }
    }
    return Promise.reject(error);
  },
);
