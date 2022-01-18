import { PigeonRequestConfig } from '../types';
import { isObject, isGET } from './validate';

function normalizeHeaderName(header: any, normalizedName: string) {
  if (!header) {
    return;
  }
  Object.keys(header).forEach((name) => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      header[normalizedName] = header[name];
      delete header[name];
    }
  });
}

export function processHeader(config: PigeonRequestConfig) {
  const { method = 'GET', header = {}, data } = config;

  normalizeHeaderName(header, 'content-type');
  if (isObject(data) && !isGET(method) && !header['content-type']) {
    header['content-type'] = 'application/json;charset=UTF-8';
  }

  return header;
}
