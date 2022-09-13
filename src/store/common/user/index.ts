import { action, observable, makeObservable } from 'mobx';
import { UserApi } from '@/api';
import Storage from '@/helper/storage';
import { KEY_LOCALE, LOCALE_CODE_DEFAULT, KEY_USER } from '@/helper/constants';
import i18n, { LOCALE_MAPPING } from '@/helper/i18n';
import { getNavigatorLocale } from '@/helper/util';

export default class UserStore {
  @observable user: User = {};
  @observable isLogin = false;
  @observable locale = '';
  @observable localeI18n = '';

  constructor() {
    makeObservable(this);
    this.init();
  }

  @action
  initLocale = () => {
    // read for setting in localstorage
    let locale: string;
    const v = Storage.getItem(KEY_LOCALE, -1);
    if (v) {
      locale = v;
    }
    // read for broswer
    else {
      locale = getNavigatorLocale();
    }

    this.setLocale(locale, false);
  };

  @action
  setLocale = (locale: string, iscache = true) => {
    //check the local if it was supported by header component
    let localeI18n = LOCALE_MAPPING[locale];
    if (!localeI18n) {
      locale = LOCALE_CODE_DEFAULT;
      localeI18n = LOCALE_MAPPING[locale];
    }
    this.locale = locale;
    this.localeI18n = localeI18n;

    iscache && Storage.setItem(KEY_LOCALE, this.locale);

    //set i18n locale
    i18n.locale(this.localeI18n);
  };

  @action
  init = () => {
    this.initLocale();
    this.initUser();
  };

  @action
  setUserName = (v: string) => {
    this.user.name = v;
  };

  @action
  setPassword = (v: string) => {
    this.user.password = v;
  };

  @action
  initUser = () => {
    const user = Storage.getItem(KEY_USER);
    if (user) {
      this.isLogin = true;
      this.user = user;
    }
  };

  @action
  login = async () => {
    this.isLogin = true;
    //this.user = await UserApi.login<User>(this.user);
    Storage.setItem(KEY_USER, this.user);
  };

  @action
  logout = async () => {
    this.isLogin = false;
    Storage.removeItem(KEY_USER);
  };
}
