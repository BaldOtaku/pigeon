import { PigenoRequestConfig } from './types';

export default function xhr(config: PigenoRequestConfig) {
  const { url, method = 'GET', data = null } = config;

  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);

  request.send(data);
}
