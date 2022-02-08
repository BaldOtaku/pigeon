import { PigeonRequestConfig } from '../types';
import xhr from './xhr';
import { isGET } from '../utils/is';
import { formatUrl } from '../utils/url';
import { processHeader } from '../utils/headers';
import { transformRequestBody, transformResponse } from '../utils/data';

function dispatchRequest(config: PigeonRequestConfig) {
  processConfig(config);
  return xhr(config).then((res) => {
    res.data = transformResponse(res.data);
    return res;
  });
}

function processConfig(config: PigeonRequestConfig) {
  if (!config.method) {
    config.method = 'GET';
  }
  config.url = handleUrl(config);
  config.headers = handleHeader(config);
  config.data = handleRequestData(config);
}

function handleUrl(config: PigeonRequestConfig) {
  const { url, method, data } = config;
  if (isGET(method)) {
    return formatUrl(url!, data);
  }
  return url;
}

function handleRequestData(config: PigeonRequestConfig) {
  return transformRequestBody(config.data);
}

function handleHeader(config: PigeonRequestConfig) {
  return processHeader(config);
}

export default dispatchRequest;
