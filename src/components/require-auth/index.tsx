import { memo } from 'react';
import { useStore } from '@/hooks';
import Login from '@/pages/user/login';

interface IProps {
  children: any;
}

function RequireAuth(props: IProps) {
  const { children } = props;
  const { userStore } = useStore();

  if (userStore.isLogin) {
    return children;
  } else {
    return <Login component={children} />;
  }
}

export default memo(RequireAuth);
