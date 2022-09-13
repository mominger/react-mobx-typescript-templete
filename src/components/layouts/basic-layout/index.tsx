import { memo } from 'react';
import { Header, Footer } from '../..';
import { Outlet } from 'react-router-dom';
import './index.scss';

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default memo(BasicLayout);
