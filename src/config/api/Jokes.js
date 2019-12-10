import { axiosInstance } from './axios-instance';

const random = () => axiosInstance.get('/random');

const categories = () => axiosInstance.get('/categories');

export default {
  random,
  categories,
};
