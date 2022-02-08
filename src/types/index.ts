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

export interface PigeonResponse<T=any> {
  status: number
  statusText: string
  data: T
  headers: any
  request: any
  config: PigeonRequestConfig
}

export interface PigeonPromise<T=any> extends Promise<PigeonResponse<T>> {}

export interface PigeonError {
  isPigeonError: boolean
  config: PigeonRequestConfig
  code?: string | null
  request?: any
  response?: PigeonResponse
}
