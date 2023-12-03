import axios from '@/utils/axios';
import { UserResponse } from '@/types/user';
import { AxiosResponse } from 'axios';

// https://randomuser.me/api/?page=3&results=10&seed=abc
export const getUsers = (page: number, results = 10): Promise<AxiosResponse<UserResponse>> => {
  return axios.get(`https://randomuser.me/api/?page=${page}&results=${results}`);
};
