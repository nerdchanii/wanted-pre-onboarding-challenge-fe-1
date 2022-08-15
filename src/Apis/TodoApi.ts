import { InterfaceApiCaller, InterfaceTodoApi, Todo, TodoContent } from "./types";
import { TODOS_API_URL } from "./constants";
import { AxiosError } from "axios";
class TodoApi implements InterfaceTodoApi {
  API_URL: typeof TODOS_API_URL;
  constructor(private ApiCallBehavior: InterfaceApiCaller) {
    this.API_URL = TODOS_API_URL;
  }

  async getTodos() {
    try{
      const response = await this.ApiCallBehavior.get<{data:Todo[]}>(this.API_URL.GET_TODOS());
      return this.success<Todo[]>(response.data.data);
    }catch(error){
      return this.error(error);
    }
  }

  async getTodoById(id: string) {
    try{
      const response = await  this.ApiCallBehavior.get<{data:Todo}>(this.API_URL.GET_BY_ID(id));
      return this.success<Todo>(response.data.data);
    }
    catch(error){
      return this.error(error);
    }

  }

  async createTodo(todo: TodoContent) {
    try{
      const response =  await this.ApiCallBehavior.post<{data:Todo}>(this.API_URL.CREATE(), todo);
      return this.success<Todo>(response.data.data);
    }catch(error){
      return this.error(error);
    }
  }

  async updateTodo(todo : Todo) {
    const { id, title, content } = todo;
    try{
      const response =  await this.ApiCallBehavior.put<{data:Todo}>(this.API_URL.UPDATE(id), { title, content });
      return this.success<Todo>(response.data.data);
    }catch(error){
      return this.error(error);
    }
  }

  async deleteTodo(id: string) {
    try{
       const response = await this.ApiCallBehavior.delete<{data:null}>(this.API_URL.DELETE(id));
       return this.success<null>(response.data.data);
    }catch(error){
      return this.error(error);
    }
  }



  success<T>(data: T): {result: true, data: T} {
    return { result: true, data };
  }

  error(error: unknown):{result: false, details: string} {
    if (error instanceof AxiosError<{details:string}>) {
      if(error.response) return { details: error.response.data.details, result: false };
      return { details: error.message, result: false };
    }
    return {details: "Unknown error", result: false};
  }
}


export default TodoApi;
