import { action, observable, makeObservable } from 'mobx';
import { HomeApi } from '@/api';

export default class HomeStore implements PageStore {
  @observable message = '';

  constructor() {
    makeObservable(this);
  }

  @action
  onLoad = async () => {
    const message = await HomeApi.message<HomeMessage>();
    this.message = message.msg;
  };

  @action
  onUnload = () => {};
}
