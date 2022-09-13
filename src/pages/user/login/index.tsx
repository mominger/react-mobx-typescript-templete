import { memo, useCallback } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '@/hooks';
import './index.scss';

interface IProps {
  component: any;
}

const Login = (props: IProps) => {
  const { component } = props;
  const { userStore } = useStore();

  const login = useCallback(() => {
    userStore.login();
    alert('登录成功,渲染新页面');
  }, [userStore]);

  const loginComponent = () => (
    <div>
      <p>您打开的页面需要鉴权，请先登录</p>
      <input
        type="text"
        className="text-input"
        placeholder="请输入用户名"
        onChange={(e) => userStore.setUserName(e.target.value)}
      />
      <input
        type="password"
        className="text-pwd"
        placeholder="请输入密码"
        onChange={(e) => userStore.setPassword(e.target.value)}
      />
      <button className="login-btn" onClick={login}>
        登录
      </button>
    </div>
  );

  return <>{userStore.isLogin ? component : loginComponent()}</>;
};

export default memo(observer(Login));
