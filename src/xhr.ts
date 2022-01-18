import { PigeonRequestConfig } from './types';

export default function xhr(config: PigeonRequestConfig) {
  const {
    url,
    header,
    method = 'GET',
    data = null,
  } = config;

  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);

  Object.keys(header).forEach((name) => {
    request.setRequestHeader(name, header[name]);
  });

  request.send(data);
}
