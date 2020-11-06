import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://www.random.org/',
	timeout: 5000,
	headers: { 'Content-Type': 'application/json' },
});

export const setToken = (token: string): void => {
	instance.defaults.headers.common['x-access-token'] = token;
};

export const setLang = (lang: string): void => {
	instance.defaults.headers.common['x-language'] = lang;
};

export default instance;
