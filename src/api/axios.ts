import axios from 'axios';
import { redirect } from 'react-router-dom';
import constants from '~/constants';

export const resumeMeAxios = axios.create({
  baseURL: constants.baseUrlEnv,
  headers: {
    'Content-Type': 'application/json',
  },
});

resumeMeAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const statusCode = error.response.status;
    const { code } = error.response.data;
    switch (statusCode) {
      //FIXME: 에러 코드 획정되면 code 수정하기
      case 401:
        if (code === '권한 없음 코드') {
          alert('로그인이 필요합니다.'); //TODO: 토스트 처리, 로그인 페이지 리다이렉트
        } else if (code === '리프레시 토큰 만료 코드') {
          alert('토큰이 만료되어 자동으로 로그아웃되었습니다.'); //TODO: 토스트 처리, 로그인 페이지 리다이렉트
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
