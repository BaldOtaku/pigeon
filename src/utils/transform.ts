import { isObject } from './validate';

export function transformRequestBody(data: any) {
  if (isObject(data)) {
    return JSON.stringify(data);
  }
  return data;
}
