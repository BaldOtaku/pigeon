import { PigeonRequestConfig, PigeonResponse } from '../types';

export class PigeonError extends Error {
  isPigeonError: boolean;

  config: PigeonRequestConfig;

  code?: string | null;

  request?: any;

  response?: PigeonResponse;

  constructor(
    message: string,
    config: PigeonRequestConfig,
    code?: string | null,
    request?: any,
    response?: PigeonResponse,
  ) {
    super(message);

    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
    this.isPigeonError = true;
  }
}

export function createError(
  message: string,
  config: PigeonRequestConfig,
  code?: string | null,
  request?: any,
  response?: PigeonResponse,
) {
  const error = new PigeonError(message, config, code, request, response);
  return error;
}
