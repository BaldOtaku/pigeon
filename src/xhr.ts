import { BuibuiRequestConfig } from './types';

export default function xhr(config: BuibuiRequestConfig) {
  const { url, method = 'GET', data = null } = config;

  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);

  request.send(data);
}
