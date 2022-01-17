import { PigeonRequestConfig } from './types';

export default function xhr(config: PigeonRequestConfig) {
  const { url, method = 'GET', data = null } = config;

  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);

  request.send(data);
}
