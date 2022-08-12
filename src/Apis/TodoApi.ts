import { InterfaceApiCaller, InterfaceTodoApi, Todo } from "./types";

class TodoApi implements InterfaceTodoApi {
  prefixPath: string;
  constructor(private ApiCallBehavior: InterfaceApiCaller) {
    this.prefixPath = "/todos";
  }

  url(path: string) {
    return this.prefixPath + path;
  }

  async getTodos() {
    return await this.ApiCallBehavior.get(this.url("/"));
  }

  async getTodoById(id: string) {
    return await this.ApiCallBehavior.get(this.url(`/${id}`));
  }

  async createTodo(todo: Todo) {
    const { title, content } = todo;
    return await this.ApiCallBehavior.post(this.url("/"), { title, content });
  }

  async updateTodo(todo: Todo) {
    const { id, title, content } = todo;
    return await this.ApiCallBehavior.put(`/${id}`, { title, content });
  }

  async deleteTodo(id: string) {
    return await this.ApiCallBehavior.delete(`/${id}`);
  }
}

export default TodoApi;
