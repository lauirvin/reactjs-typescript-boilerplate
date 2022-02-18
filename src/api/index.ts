import { SampleResponse } from '../types';
import { LoginResponse } from '../types/LoginResponse';
import axios from './axios';

export const fetchSample = (): Promise<SampleResponse> =>
  axios
    .get('/')
    .then((res) => ({
      status: res.status,
      data: res.data,
      error: null,
    }))
    .catch((err) => ({
      status: err.response.status,
      error: err.response.data,
      data: null,
    }));

export const postSample = (name: string, result: string): Promise<SampleResponse> =>
  axios
    .post('/', { name, result })
    .then((res) => ({
      status: res.status,
      data: res.data,
      error: null,
    }))
    .catch((err) => ({
      status: err.response.status,
      error: err.response.data,
      data: null,
    }));

export const postLogin = (username: string, password: string): Promise<LoginResponse> =>
  axios
    .post('/v1/api/auth/login', { username, password })
    .then((res) => ({
      status: res.status,
      data: res.data,
      error: null,
    }))
    .catch((err) => ({
      status: err.response.status,
      error: err.response.data,
      data: null,
    }));
