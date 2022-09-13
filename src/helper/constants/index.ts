export * from './cacheKey';

export enum ROUTE_URL {
  ROOT = '/', //root
  USER_LOGIN = '/user/login',
  PROFILE = '/profile',
  PROFILE_MODIFY = '/profile/modify',
  NOT_FOUND = '/404',
  NAV = '/nav',
}

export const LOCALE_CODE = {
  ZH: 'zh-cn',
  EN: 'en-gb',
};
export const LOCALE_CODE_DEFAULT = 'en-gb';
