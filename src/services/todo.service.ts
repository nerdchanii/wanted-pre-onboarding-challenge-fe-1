import { InterfaceTodoApi, Todo, TodoContent } from '@apis/types';
import { todoApis } from '@apis/Apis';

class TodoService {
  private api: InterfaceTodoApi;

  constructor() {
    this.api = todoApis;
  }

  getTodos = async () => {
    return await this.api.getTodos();
  };

  getTodoById = async (id: string) => {
    return await this.api.getTodoById(id);
  };

  createTodo = async (todo: TodoContent) => {
    return await this.api.createTodo(todo);
  };

  updateTodo = async (todo: Todo): Promise<any> => {
    return await this.api.updateTodo(todo);
  };

  deleteTodo = async (id: string): Promise<any> => {
    return await this.api.deleteTodo(id);
  };
}

export default new TodoService();

export const TODO_SERVICE_KEYS = {
  GET_TODOS: 'getTodos',
  GET_TODO_BY_ID: 'getTodoById',
  CREATE_TODO: 'createTodo',
  UPDATE_TODO: 'updateTodo',
  DELETE_TODO: 'deleteTodo',
} as const;
