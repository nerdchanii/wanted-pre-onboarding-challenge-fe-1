import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { InterfaceApiCaller } from './types';

/**
 * *ApiCaller*
 *
 *
 * Api객체의 api 호출을 담당하는 클래스입니다.
 *
 * api 호출 로직을 랩핑해서 역할을 부여합니다.
 *
 * @interface InterfaceApiCaller
 * @member caller - api call behavior
 * @member token - token for api call
 */
class ApiCaller implements InterfaceApiCaller {
  caller: AxiosInstance;

  /**
   * Constructor for ApiCaller
   * @interface InterfaceApiCaller
   * @memberof ApiCaller
   * @param {string} baseURL - base url for api call
   * @param {AxiosRequestConfig} config - axios config
   */
  constructor(baseURL: string, config?: AxiosRequestConfig) {
    const token = localStorage.getItem('token');
    this.caller = axios.create({
      baseURL,
      ...config,
      headers: {
        ...config?.headers,
        Authorization: token ? token : '',
      },
    });
  }

  /**
   * Get method for api call
   * @interface InterfaceApiCaller
   * @generic T - return type of api call
   * @param url - api url
   * @param config -= axios config
   * @returns {Promise<T>} - return type of api call
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return await this.caller.get(url, config);
  }

  /**
   * Post method for apid call
   * @interface InterfaceApiCaller
   * @generic T - return type of api call
   * @param {string} token - token for api call
   * @returns {void}
   * @memberof ApiCaller
   */
  async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return await this.caller.post(url, data, config);
  }

  /**
   * Put method for api call
   * @interface InterfaceApiCaller
   * @generic T - return type of api call
   * @param {string} url - api url
   * @param {any} data  - data for api call
   * @param {AxiosRequestConfig} config - axios config
   * @returns {Promise<T>} - return type of api call
   */
  async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return await this.caller.put(url, data, config);
  }

  /**
   * Delete method for api call
   * @interface InterfaceApiCaller
   * @generic T - return type of api call
   * @param url - api url
   * @param config - axios config
   * @returns {Promise<T>} - return type of api call
   */
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return await this.caller.delete(url, config);
  }

  private interceptor(
    onFulfilled?: (value: any) => any,
    onRejected?: (reason: any) => any,
  ) {
    this.caller.interceptors.response.use(onFulfilled, onRejected);
  }

  /**
   * set token for api call
   * @param auth
   * @returns {void}
   * @memberof ApiCaller
   */
  setAuth<T>(auth: T): void {
    if (typeof auth === 'string') {
      this.caller.defaults.headers.common['Authorization'] = auth;
      localStorage.setItem('token', auth);
    }
    /** JWT토큰이 아닐 경우 */
  }

  /**
   * remove token for api call
   * @returns {void}
   * @memberof ApiCaller
   * @example
   * apiCaller.removeAuth();
   */
  removeAuth(): void {
    localStorage.removeItem('token');
    this.caller.defaults.headers.common['Authorization'] = '';
  }
}

export default ApiCaller;
