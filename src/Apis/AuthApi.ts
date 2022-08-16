import { AxiosRequestConfig } from 'axios';
import { AUTH_API_URL } from './constants';
import {
  InterfaceApiCaller,
  InterfaceAuthApiResponse,
  InterfaceAuthenticationRequest,
  InterfaceAuthApi,
} from './types';

class AuthApi implements InterfaceAuthApi {
  API_URL: typeof AUTH_API_URL;
  constructor(private ApiCallBehavior: InterfaceApiCaller) {
    this.API_URL = AUTH_API_URL;
  }

  login(loginForm: InterfaceAuthenticationRequest) {
    return this.call(this.API_URL.LOGIN(), loginForm);
  }

  signup(signupForm: InterfaceAuthenticationRequest) {
    return this.call(this.API_URL.SIGNUP(), signupForm);
  }

  logout() {
    return this.ApiCallBehavior.removeAuth();
  }

  private async call(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await this.ApiCallBehavior.post<InterfaceAuthApiResponse>(
      url,
      data,
      config,
    );
    return this.sucess(response.data);
  }

  private sucess(responseData: InterfaceAuthApiResponse) {
    return { message: responseData.message, result: true };
  }
}

export default AuthApi;
