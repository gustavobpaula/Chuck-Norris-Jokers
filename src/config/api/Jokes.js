import { axiosInstance } from './axios-instance';

const random = () => axiosInstance.get('/random');

export default {
  random,
};
