export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'trace' | 'TRACE'
| 'connect' | 'CONNECT';

export interface PigeonRequestConfig {
  url?: string
  headers?: any
  method?: Method
  data?: string
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface PigeonResponse {
  status: number
  statusText: string
  data: any
  headers: any
  request: any
  config: PigeonRequestConfig
}

export interface PigeonPromise extends Promise<PigeonResponse> {
}

export interface PigeonError {
  isPigeonError: boolean
  config: PigeonRequestConfig
  code?: string | null
  request?: any
  response?: PigeonResponse
}

export interface Pigeon {
  request(config?: PigeonRequestConfig): PigeonPromise
  get(url: string, config?: PigeonRequestConfig): PigeonPromise
  delete(url: string, config?: PigeonRequestConfig): PigeonPromise
  head(url: string, config?: PigeonRequestConfig): PigeonPromise
  options(url: string, config?: PigeonRequestConfig): PigeonPromise
  post(url: string, data?: any, config?: PigeonRequestConfig): PigeonPromise
  put(url: string, data?: any, config?: PigeonRequestConfig): PigeonPromise
  patch(url: string, data?: any, config?: PigeonRequestConfig): PigeonPromise
}

export interface PigeonInstance extends Pigeon {
  (config: PigeonRequestConfig): PigeonPromise
}
