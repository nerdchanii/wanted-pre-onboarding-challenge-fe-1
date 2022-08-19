import { InterfaceTodoApi, Todo, TodoContent } from '@apis/types';
import { todoApis } from '@apis/Apis';

class TodoService {
  private api: InterfaceTodoApi;

  constructor() {
    this.api = todoApis;
  }

  async getTodos() {
    return await this.api.getTodos();
  }

  async getTodoById(id: string) {
    return await this.api.getTodoById(id);
  }

  async createTodo(todo: TodoContent) {
    return await this.api.createTodo(todo);
  }

  async updateTodo(todo: Todo): Promise<any> {
    return await this.api.updateTodo(todo);
  }

  async deleteTodo(id: string): Promise<any> {
    return await this.api.deleteTodo(id);
  }
}

export default new TodoService();
