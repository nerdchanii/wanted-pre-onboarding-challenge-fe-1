import { InterfaceApiCaller, InterfaceTodoApi, Todo, TodoContent } from "./types";
import { TODOS_API_URL } from "./constants";
class TodoApi implements InterfaceTodoApi {
  API_URL: typeof TODOS_API_URL;
  constructor(private ApiCallBehavior: InterfaceApiCaller) {
    this.API_URL = TODOS_API_URL;
  }

  async getTodos() {
    return await this.ApiCallBehavior.get<Todo[]>(this.API_URL.GET_TODOS());
  }

  async getTodoById(id: string) {
    return await this.ApiCallBehavior.get<Todo>(this.API_URL.GET_BY_ID(id));
  }

  async createTodo(todo: TodoContent) {
    return await this.ApiCallBehavior.post<Todo>(this.API_URL.CREATE(), todo);
  }

  async updateTodo({ id, ...todo} : {id: string, todo: TodoContent}) {
    return await this.ApiCallBehavior.put<Todo>(this.API_URL.UPDATE(id), todo);
  }

  async deleteTodo(id: string) {
    return await this.ApiCallBehavior.delete<null>(`/${id}`);
  }
}

export default TodoApi;
