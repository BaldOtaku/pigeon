export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'trace' | 'TRACE'
| 'connect' | 'CONNECT';

export interface BuibuiRequestConfig {
  url: string
  header?: string
  method?: Method
  data?: string
}
