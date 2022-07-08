import http from './base/http';

//message
export const message = <T>(params: any = {}) =>
  http.get<T>('v1/message', params);
