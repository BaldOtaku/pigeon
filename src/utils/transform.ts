import { isDate, isObject, isArray } from './validate';

export function urlFormat(url: string, data?: any) {
  if (!data || !isObject(data)) {
    return url;
  }

  const params: string[] = [];

  Object.keys(data).forEach((key) => {
    let value = data[key];
    if (isDate(value)) {
      value = value.toISOString();
    } else if (isObject(value) || isArray(value)) {
      value = JSON.stringify(value);
    }
    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  });

  const serializedParams = params.join('&');

  if (serializedParams) {
    url += (url.includes('?') ? '&' : '?') + serializedParams;
  }
  return url;
}

export function transformRequestBody(data: any) {
  if (isObject(data)) {
    return JSON.stringify(data);
  }
  return data;
}
