import axios from 'axios';
import constants from '~/constants';

export const resumeMeAxios = axios.create({
  baseURL: constants.baseUrlEnv,
  headers: {
    'Content-Type': 'application/json',
  },
});
