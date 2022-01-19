import { PigeonRequestConfig, PigeonPromise, PigeonResponse } from './types';
import { parseHeaders } from './utils/headers';

export default function xhr(config: PigeonRequestConfig): PigeonPromise {
  return new Promise((resolve) => {
    const {
      url,
      headers,
      method = 'GET',
      data = null,
      responseType,
    } = config;

    const request = new XMLHttpRequest();

    if (responseType) {
      request.responseType = responseType;
    }

    request.open(method.toUpperCase(), url, true);

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return;
      }
      const responseHeaders = request.getAllResponseHeaders();
      const responseData = responseType !== 'text' ? request.response : request.responseText;
      const response: PigeonResponse = {
        config,
        request,
        status: request.status,
        statusText: request.statusText,
        headers: parseHeaders(responseHeaders),
        data: responseData,
      };

      resolve(response);
    };

    Object.keys(headers).forEach((name) => {
      request.setRequestHeader(name, headers[name]);
    });

    request.send(data);
  });
}
