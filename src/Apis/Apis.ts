import ApiCaller from "./ApiCaller";
import TodoApi from "./TodoApi";
import {
  InterfaceApiCaller,
  InterfaceUserApi,
  InterfaceTodoApi,
  InterfaceAuthenticationRequest,
  Todo,
} from "./types";
import UserApi from "./UserApi";

abstract class ApisEntity {
  ApiCallBehavior!: InterfaceApiCaller;
  userApi!: InterfaceUserApi;
  todoApi!: InterfaceTodoApi;
}

class Apis extends ApisEntity {
  constructor() {
    super();
    this.ApiCallBehavior = new ApiCaller(
      process.env.REACT_APP_API_BASE_URL || ""
    );
    this.userApi = new UserApi(this.ApiCallBehavior);
    this.todoApi = new TodoApi(this.ApiCallBehavior);
  }

  setToken(token: string) {
    this.ApiCallBehavior.setToken(token);
  }
  removeToken() {
    this.ApiCallBehavior.removeToken();
  }

  async login(authenticationRequestData: InterfaceAuthenticationRequest) {
    return this.userApi.login(authenticationRequestData);
  }
  async signup(authenticationRequestData: InterfaceAuthenticationRequest) {
    return this.userApi.signup(authenticationRequestData);
  }

  async getTodos() {
    return await this.todoApi.getTodos();
  }
  async getTodoById(id: string) {
    return await this.todoApi.getTodoById(id);
  }
  async createTodo(todo: Todo) {
    return await this.todoApi.createTodo(todo);
  }
  async updateTodo(todo: Todo) {
    return await this.todoApi.updateTodo(todo);
  }
  async deleteTodo(id: string) {
    return await this.todoApi.deleteTodo(id);
  }
}

export default Apis;
