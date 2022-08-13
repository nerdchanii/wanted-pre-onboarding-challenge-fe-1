import { AxiosError, AxiosRequestConfig } from "axios";
import { AUTH_API_URL } from "./constants";
import {
  InterfaceApiCaller,
  InterfaceAuthApiErrorResponse,
  InterfaceAuthApiResponse,
  InterfaceAuthenticationRequest,
  InterfaceAuthApi,
} from "./types";

class AuthApi implements InterfaceAuthApi {
  API_URL: typeof AUTH_API_URL;
  constructor(private ApiCallBehavior: InterfaceApiCaller) {
    this.API_URL = AUTH_API_URL;
  }
  
  async login(loginForm: InterfaceAuthenticationRequest) {
    return await this.call(this.API_URL.LOGIN(), loginForm);
  }

  async signup(signupForm: InterfaceAuthenticationRequest) {
    return await this.call(this.API_URL.SIGNUP(), signupForm);
  }

  logout(){
    return this.ApiCallBehavior.removeAuth();
  }

  private async call(url: string, data?: any, config?: AxiosRequestConfig) {
    try{
      const response = await this.ApiCallBehavior.post<InterfaceAuthApiResponse>(url, data, config);
      return this.sucess(response.data);
    } catch(error){
      return this.error(error);
    }
  }



  private sucess(responseData: InterfaceAuthApiResponse) {
    this.ApiCallBehavior.setAuth(responseData.token);
    return { message: responseData.message , result: true};
  }

  private error(error:unknown) {
    if(!(error instanceof AxiosError<InterfaceAuthApiErrorResponse>)) return { message: 'unknown error' , result: false};
    if(error.response) return{message: error.response.data.details, result: false};
    return { message: error.message , result: false};
  }
}
export default AuthApi;
