import { AxiosRequestConfig, AxiosResponse } from "axios";
import { TODOS_API_URL, AUTH_API_URL } from "./constants";

/**
  * InterfaceApiCaller
  * @export
  * @interface InterfaceApiCaller
  * 
  */
export interface InterfaceApiCaller{
  get<T>(url: string, config?:AxiosRequestConfig):Promise<AxiosResponse<T>>;
  post<T>(url: string, data?: any, config?:AxiosRequestConfig): Promise<AxiosResponse<T>>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  removeAuth(): void;
  setAuth<T>(auth:T) : void;
} 


export interface InterfaceAuthApiResponse{
  message: string,
  token: string,
}


export interface InterfaceAuthApiErrorResponse{
  details: string,
}

export interface InterfaceAuthServiceReturn{
  result: boolean,
  message: string,
}


export interface InterfaceAuthenticationRequest{
  email: string,
  password: string,
}


export interface InterfaceAuthApi{
  API_URL: typeof AUTH_API_URL;
  login({email, password}:InterfaceAuthenticationRequest): Promise<InterfaceAuthServiceReturn>;
  signup({email,password}:InterfaceAuthenticationRequest): Promise<InterfaceAuthServiceReturn>;
  logout(): void;
}


export interface TodoContent{
  title:     string;
  content:   string;
}


export interface TodoMetaData{
  id:        string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Todo extends TodoContent, TodoMetaData{}


export interface InterfaceTodoApi{
  API_URL: typeof TODOS_API_URL;
  getTodos(): Promise<AxiosResponse<Todo[]>>;
  getTodoById(id:string): Promise<AxiosResponse<Todo>>;
  createTodo(todo:TodoContent): Promise<AxiosResponse<Todo>>;
  updateTodo({id, ...todo}:{id:string, todo:TodoContent}): Promise<AxiosResponse<Todo>>;
  deleteTodo(id:string): Promise<AxiosResponse<null>>;
}


