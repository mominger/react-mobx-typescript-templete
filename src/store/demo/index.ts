import { action, observable, makeObservable } from 'mobx';

export default class DemoStore implements PageStore {
  @observable testName = '';
  @observable b = '';

  constructor() {
    makeObservable(this);
  }

  getName = () => {};

  @action
  onLoad = async () => {};

  @action
  onUnload = () => {};
}
