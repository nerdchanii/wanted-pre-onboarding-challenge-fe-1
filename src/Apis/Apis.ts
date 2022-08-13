import ApiCaller from "./ApiCaller";
import TodoApi from "./TodoApi";
import AuthApi from "./UserApi";


const apiCaller  = new ApiCaller(process.env.REACT_APP_API_BASE_URL || "");

export const authApis = new AuthApi(apiCaller);
export const todoApis = new TodoApi(apiCaller);

