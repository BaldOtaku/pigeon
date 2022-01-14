import { BiubiuRequestConfig } from './types';
import xhr from './xhr';
import { urlFormat, transformRequestBody } from './utils/transform';

function biubiu(config: BiubiuRequestConfig) {
  processConfig(config);
  xhr(config);
}

function processConfig(config: BiubiuRequestConfig) {
  if (config.method === 'get' || config.method === 'GET') {
    config.url = transformUrl(config);
  } else {
    config.data = transformRequestData(config);
  }
}

function transformUrl(config: BiubiuRequestConfig) {
  return urlFormat(config.url, config.data);
}

function transformRequestData(config: BiubiuRequestConfig) {
  return transformRequestBody(config.data);
}

export default biubiu;
