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
  header?: any
  method?: Method
  data?: string
}
