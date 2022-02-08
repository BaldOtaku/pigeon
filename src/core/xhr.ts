import { PigeonRequestConfig, PigeonPromise, PigeonResponse } from '../types';
import { parseHeaders } from '../utils/headers';
import { createError } from './error';

export default function xhr(config: PigeonRequestConfig): PigeonPromise {
  return new Promise((resolve, reject) => {
    const {
      url,
      headers,
      method = 'GET',
      data = null,
      responseType,
      timeout,
    } = config;

    const request = new XMLHttpRequest();

    if (responseType) {
      request.responseType = responseType;
    }

    if (timeout) {
      request.timeout = timeout;
    }

    request.open(method.toUpperCase(), url!, true);

    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request));
    };

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 0) {
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

      handleResponse(response);
    };

    request.ontimeout = function handleTimeout() {
      reject(createError('Timeout', config, null, request));
    };

    Object.keys(headers).forEach((name) => {
      request.setRequestHeader(name, headers[name]);
    });

    request.send(data);

    function handleResponse(response: PigeonResponse) {
      if (response.status >= 200 && response.status < 300) {
        resolve(response);
      } else {
        reject(createError(`errorCode ${response.status}`, config, null, request, response));
      }
    }
  });
}
