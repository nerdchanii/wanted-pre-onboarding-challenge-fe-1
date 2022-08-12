import { AxiosError } from "axios";
import {
  InterfaceApiCaller,
  InterfaceAuthenticationRequest,
  InterfaceErrorResponseData,
  InterfaceUserApi,
} from "./types";

class UserApi implements InterfaceUserApi {
  prefixPath: string;
  constructor(private ApiCallBehavior: InterfaceApiCaller) {
    this.prefixPath = "/users";
  }

  url(path: string): string {
    return this.prefixPath + path;
  }

  async login({ email, password }: InterfaceAuthenticationRequest) {
    try {
      const response = await this.ApiCallBehavior.post(this.url("/login"), {
        email,
        password,
      });
      const { token, message } = response.data;
      return { result: true, message, token };
    } catch (e) {
      const { response } = e as AxiosError;
      if (response) {
        const { details } = response.data as InterfaceErrorResponseData;
        return { message: details, result: false, token: null };
      }
    }
  }

  async signup({ email, password }: InterfaceAuthenticationRequest) {
    try {
      const response = await this.ApiCallBehavior.post(this.url("/create"), {
        email,
        password,
      });
      const { token, message } = response.data;
      return { result: true, message, token };
    } catch (e) {
      const { response } = e as AxiosError;
      if (response) {
        const { details } = response.data as InterfaceErrorResponseData;
        return { message: details, result: false, token: null };
      }
    }
  }
}

export default UserApi;
