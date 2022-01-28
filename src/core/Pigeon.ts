import { PigeonRequestConfig, Method } from '../types';
import dispatchRequest from './dispatchRequest';

export default class Pigeon {
  request(config: PigeonRequestConfig) {
    return dispatchRequest(config);
  }

  get(url: string, config?: PigeonRequestConfig) {
    return this.requestMethodWithoutData('GET', url, config || {});
  }

  delete(url: string, config?: PigeonRequestConfig) {
    return this.requestMethodWithoutData('DELETE', url, config || {});
  }

  head(url: string, config?: PigeonRequestConfig) {
    return this.requestMethodWithoutData('HEAD', url, config || {});
  }

  options(url: string, config?: PigeonRequestConfig) {
    return this.requestMethodWithoutData('OPTIONS', url, config || {});
  }

  post(url: string, data?: any, config?: PigeonRequestConfig) {
    return this.requestMethodWithData('POST', url, data || {}, config || {});
  }

  put(url: string, data?: any, config?: PigeonRequestConfig) {
    return this.requestMethodWithData('PUT', url, data || {}, config || {});
  }

  patch(url: string, data?: any, config?: PigeonRequestConfig) {
    return this.requestMethodWithData('PATCH', url, data || {}, config || {});
  }

  requestMethodWithoutData(method: Method, url: string, config: PigeonRequestConfig) {
    return this.request({
      ...config,
      url,
      method,
    });
  }

  requestMethodWithData(method: Method, url: string, data: any, config: PigeonRequestConfig) {
    return this.request({
      ...config,
      url,
      method,
      data,
    });
  }
}
