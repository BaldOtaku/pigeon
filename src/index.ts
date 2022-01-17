import { PigeonRequestConfig } from './types';
import xhr from './xhr';
import { urlFormat, transformRequestBody } from './utils/transform';

function pigeon(config: PigeonRequestConfig) {
  processConfig(config);
  xhr(config);
}

function processConfig(config: PigeonRequestConfig) {
  if (config.method === 'get' || config.method === 'GET') {
    config.url = transformUrl(config);
  } else {
    config.data = transformRequestData(config);
  }
}

function transformUrl(config: PigeonRequestConfig) {
  return urlFormat(config.url, config.data);
}

function transformRequestData(config: PigeonRequestConfig) {
  return transformRequestBody(config.data);
}

export default pigeon;
