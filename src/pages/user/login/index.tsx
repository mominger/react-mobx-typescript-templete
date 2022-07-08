import { memo, useCallback } from 'react';
import { Observer } from 'mobx-react-lite';
import { useStore } from '@/helper/hooks';
import { useNavigate } from 'react-router-dom';
import { Page } from '@/components';

import './index.scss';

const Login = () => {
  const navigate = useNavigate();
  const { userStore: store } = useStore();

  const login = useCallback(() => {
    store.login();
    alert('登录成功,返回首页！');
    navigate(-1);
  }, [store, navigate]);

  return (
    <Observer>
      {() => (
        <Page store={store} className="login">
          <div>
            <input
              type="text"
              className="text-input"
              placeholder="请输入用户名"
              onChange={(e) => store.setUserName(e.target.value)}
            />
            <input
              type="password"
              className="text-pwd"
              placeholder="请输入密码"
              onChange={(e) => store.setPassword(e.target.value)}
            />
            <button className="login-btn" onClick={login}>
              登录
            </button>
          </div>
        </Page>
      )}
    </Observer>
  );
};

export default memo(Login);
