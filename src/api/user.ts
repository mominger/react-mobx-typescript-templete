import http from './base/http';

//login
export const login = <T>(params: any) =>
  http.post<T>('v1/login', params, { timeout: 15000 });
