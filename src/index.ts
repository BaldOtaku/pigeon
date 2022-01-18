import { PigeonRequestConfig } from './types';
import xhr from './xhr';
import { isGET } from './utils/validate';
import { formatUrl } from './utils/url';
import { processHeader } from './utils/headers';
import { transformRequestBody } from './utils/transform';

function pigeon(config: PigeonRequestConfig) {
  processConfig(config);
  xhr(config);
}

function processConfig(config: PigeonRequestConfig) {
  if (!config.method) {
    config.method = 'GET';
  }
  config.url = handleUrl(config);
  config.header = handleHeader(config);
  config.data = handleRequestData(config);
}

function handleUrl(config: PigeonRequestConfig) {
  const { url, method, data } = config;
  if (isGET(method)) {
    return formatUrl(url, data);
  }
  return url;
}

function handleRequestData(config: PigeonRequestConfig) {
  return transformRequestBody(config.data);
}

function handleHeader(config: PigeonRequestConfig) {
  return processHeader(config);
}

export default pigeon;
