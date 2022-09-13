import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useStore } from '@/hooks';

import { Page, Counter, Header } from '@/components';
import { ROUTE_URL } from '@/helper/constants';

import './index.scss';

interface IProps {}

const Home = (props: IProps) => {
  const { homeStore: store, userStore } = useStore();
  const navigate = useNavigate();

  return (
    <Page store={store} className="home">
      <div className="container">
        <div className="title">Home</div>
        <Counter></Counter>
      </div>
      <p>message: {store.message}</p>

      <div>
        {userStore.isLogin && (
          <p className="login">登录的账号名: {userStore.user.name}</p>
        )}
      </div>
      <br />
      <div>
        <button onClick={() => navigate(ROUTE_URL.NAV)}>go to Nav page</button>
      </div>
    </Page>
  );
};

export default observer(Home);
