export function isDate(value: any): value is Date {
  return Object.prototype.toString.call(value) === '[object Date]';
}

export function isObject(value: any): value is Object {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function isArray(value: any): value is [] {
  return Array.isArray(value);
}

export function isGET(value: string) {
  return value === 'get' || value === 'GET';
}

export function isPOST(value: string) {
  return value === 'post' || value === 'POST';
}
