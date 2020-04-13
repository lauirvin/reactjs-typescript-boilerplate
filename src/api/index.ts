import axios from './axios';

export const fetchSample = () => axios.get('v2/dinner/missions');

export const postSample = (name: string, result: string) => axios.post('v2/dinner/missions', { name, result });
