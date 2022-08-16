import { InterfaceApiCaller, InterfaceTodoApi, Todo, TodoContent } from "./types";
import { TODOS_API_URL } from "./constants";
import { AxiosError } from "axios";

class TodoApi implements InterfaceTodoApi {
  API_URL: typeof TODOS_API_URL;
  constructor(private ApiCallBehavior: InterfaceApiCaller) {
    this.API_URL = TODOS_API_URL;
  }

  async getTodos() {
    const response = await this.ApiCallBehavior.get<{data:Todo[]}>(this.API_URL.GET_TODOS());
    return response.data.data
  }

  async getTodoById(id: string) {
    const response = await  this.ApiCallBehavior.get<{data:Todo}>(this.API_URL.GET_BY_ID(id));
    return response.data.data;
  }

  async createTodo(todo: TodoContent) {
    const response =  await this.ApiCallBehavior.post<{data:Todo}>(this.API_URL.CREATE(), todo);
    return response.data.data;  
  }

  async updateTodo(todo : Todo) {
    const { id, title, content } = todo;
    const response =  await this.ApiCallBehavior.put<{data:Todo}>(this.API_URL.UPDATE(id), { title, content });
    return response.data.data;
  }

  async deleteTodo(id: string) {
    const response = await this.ApiCallBehavior.delete<{data:null}>(this.API_URL.DELETE(id));
    return response.data.data;
  }


}


export default TodoApi;
