import { memo } from 'react';
import { Header } from '../..';
import { Outlet } from 'react-router-dom';
import './index.scss';

function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default memo(HeaderLayout);
