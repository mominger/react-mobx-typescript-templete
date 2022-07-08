import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Observer } from 'mobx-react-lite';
import { useStore } from '@/helper/hooks';

import { Page, Counter, Header } from '@/components';
import { ROUTE_URL } from '@/helper/constants';

import './index.scss';

interface IProps {}

const Home = (props: IProps) => {
  const { homeStore: store, userStore } = useStore();
  const navigate = useNavigate();

  return (
    <Observer>
      {() => (
        <Page store={store} className="home">
          <Header />

          <div className="container">
            <div className="title">Home</div>
            <Counter></Counter>
          </div>
          <p>message: {store.message}</p>

          <div>
            {userStore.isLogin ? (
              <p className="login">登录的账号名: {userStore.user.name}</p>
            ) : (
              <button onClick={() => navigate(ROUTE_URL.USER_LOGIN)}>
                go to Login page
              </button>
            )}
          </div>
          <br />
          <div>
            <button onClick={() => navigate(ROUTE_URL.NAV)}>
              go to Nav page
            </button>
          </div>
        </Page>
      )}
    </Observer>
  );
};

export default memo(Home);
