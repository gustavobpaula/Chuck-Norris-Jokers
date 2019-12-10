import { axiosInstance } from './axios-instance';

const random = category =>
  axiosInstance.get('/random', {
    params: {
      category,
    },
  });

const categories = () => axiosInstance.get('/categories');

export default {
  random,
  categories,
};
