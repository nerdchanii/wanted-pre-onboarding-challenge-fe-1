
export const TODOS_API_URL = {
  GET_TODOS: ()=>"/todos",
  GET_BY_ID: (id: string) => `/todos/${id}`,
  CREATE: ()=>"/todos",
  UPDATE: (id: string) => `/todos/${id}`,
  DELETE: (id: string) => `/todos/${id}`,
};


export const AUTH_API_URL ={
  LOGIN: ()=>"/users/login",
  SIGNUP: ()=>"/users/create",
}