import { createContext } from 'react';
import WebStore from './common/web';
import HomeStore from './home';
import UserStore from './user';
import { configure } from 'mobx';

configure({
  enforceActions: 'never',
});

export const Store = {
  webStore: new WebStore(),
  homeStore: new HomeStore(),
  userStore: new UserStore(),
};

export const storeContext = createContext(Store);
export const StoreProvider = storeContext.Provider;
