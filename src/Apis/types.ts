import { AxiosRequestConfig } from "axios";

/**
  * InterfaceApiCaller
  * @export
  * @interface InterfaceApiCaller
  * 
  */
export interface InterfaceApiCaller{
  get(url: string, config?:AxiosRequestConfig):Promise<any>;
  post(url: string, data?: any, config?:AxiosRequestConfig): Promise<any>;
  put(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
  delete(url: string, config?: AxiosRequestConfig): Promise<any>;
  setToken(token: string): void;
  removeToken(): void;
} 



export interface InterfaceAuthenticationRequest{
  email: string,
  password: string,
}


export interface InterfaceUserApi{
  prefixPath: string,
  login({email, password}:InterfaceAuthenticationRequest): any;
  signup({email,password}:InterfaceAuthenticationRequest): any;
}


export interface Todo {
  id?:string,
  title: string,
  content:string,  
}


export interface InterfaceTodoApi{
  prefixPath: string,
  getTodos(): any;
  getTodoById(id:string): any;
  createTodo(todo:Todo): any;
  updateTodo(todo:Todo): any;
  deleteTodo(id:string): any;
}




export type InterfaceErrorResponseData = {
    details: string,
}