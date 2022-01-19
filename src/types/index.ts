export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'trace' | 'TRACE'
| 'connect' | 'CONNECT';

export interface PigeonRequestConfig {
  url: string
  headers?: any
  method?: Method
  data?: string
  responseType?: XMLHttpRequestResponseType
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
