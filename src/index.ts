import { PigenoRequestConfig } from './types';
import xhr from './xhr';
import { urlFormat, transformRequestBody } from './utils/transform';

function pigeno(config: PigenoRequestConfig) {
  processConfig(config);
  xhr(config);
}

function processConfig(config: PigenoRequestConfig) {
  if (config.method === 'get' || config.method === 'GET') {
    config.url = transformUrl(config);
  } else {
    config.data = transformRequestData(config);
  }
}

function transformUrl(config: PigenoRequestConfig) {
  return urlFormat(config.url, config.data);
}

function transformRequestData(config: PigenoRequestConfig) {
  return transformRequestBody(config.data);
}

export default pigeno;
