import { action, observable } from 'mobx';
import { UserApi } from '@/api';
import Storage from '@/helper/storage';

const USER_KEY = 'KEY_USER';

export default class UserStore implements PageStore {
  @observable user: User = {};
  @observable isLogin = false;

  @action
  onLoad = async () => {};

  @action
  onUnload = () => {};

  @action
  setUserName = (v: string) => {
    this.user.name = v;
  };

  @action
  setPassword = (v: string) => {
    this.user.password = v;
  };

  @action
  login = async () => {
    this.isLogin = true;
    //this.user = await UserApi.login<User>(this.user);
    Storage.setItem(USER_KEY, this.user);
  };
}
