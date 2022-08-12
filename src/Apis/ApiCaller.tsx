import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { InterfaceApiCaller } from "./types";

/**
 * ApiCaller
 *
 * it is a wrapper for api call behavior to make api call
 * api call behavior ex) axios, fetch
 *
 * Api객체의 api 호출을 담당하는 클래스입니다.
 * api 호출 로직을 랩핑 ex) axios, fetch
 *
 * @interface InterfaceApiCaller
 * @member caller - api call behavior
 * @member token - token for api call
 */
class ApiCaller implements InterfaceApiCaller {
  caller: AxiosInstance;
  constructor(baseUrl: string, config?: AxiosRequestConfig) {
    const token = localStorage.getItem("token");
    this.caller = axios.create({
      ...config,
      baseURL: process.env.REACT_APP_API_BASE_URL,
      headers: {
        Authorization: !!token ? `Bearer ${token}` : "",
      },
    });
  }

  async get(url: string, config?: AxiosRequestConfig) {
    return await this.caller.get(url, config);
  }

  async post(url: string, data: any, config?: AxiosRequestConfig) {
    return await this.caller.post(url, data, config);
  }
  async put(url: string, data: any, config?: AxiosRequestConfig) {
    return await this.caller.put(url, data, config);
  }

  async delete(url: string, config?: AxiosRequestConfig) {
    return await this.caller.delete(url, config);
  }

  setToken(token: string) {
    this.caller = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  removeToken() {
    this.caller = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });
  }
}

export default ApiCaller;
