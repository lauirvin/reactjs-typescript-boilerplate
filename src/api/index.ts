import { AxiosResponse } from 'axios';
import axios from './axios';

export const fetchDatas = (): Promise<AxiosResponse> => axios.get('/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new').then((res) => res.data);

export const postSample = (name: string, result: string): Promise<AxiosResponse> => axios.post('v2/dinner/missions', { name, result });
