import { PigeonRequestConfig } from '../types';
import { isObject, isGET } from './is';

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
  const { method = 'GET', headers = {}, data } = config;

  normalizeHeaderName(headers, 'content-type');
  if (isObject(data) && !isGET(method) && !headers['content-type']) {
    headers['content-type'] = 'application/json;charset=UTF-8';
  }

  return headers;
}

export function parseHeaders(headers: string) {
  const paresd = Object.create(null);
  if (!headers) {
    return paresd;
  }
  headers.split('\r\n').forEach((row) => {
    let [key, value] = row.split(':');
    key = key.trim().toLowerCase();
    if (!key) {
      return;
    }
    value = value && value.trim();
    paresd[key] = value;
  });
  return paresd;
}
