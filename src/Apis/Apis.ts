import ApiCaller from './ApiCaller';
import TodoApi from './TodoApi';
import AuthApi from './AuthApi';

const apiCaller = new ApiCaller(import.meta.env.VITE__API_BASE_URL || '');

export const authApis = new AuthApi(apiCaller);
export const todoApis = new TodoApi(apiCaller);
