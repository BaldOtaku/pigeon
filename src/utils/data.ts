import { isObject } from './is';

export function transformRequestBody(data: any) {
  if (isObject(data)) {
    return JSON.stringify(data);
  }
  return data;
}

export function transformResponse(data: any) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (error) {
      // do nothing
    }
  }
  return data;
}
