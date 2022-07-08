import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import router from '@/router';

const Nav = () => {
  return (
    <div className="nav">
      <p className="center">选择任意页面点击测试</p>
      <nav className="link">
        {router.routes.map((route) => {
          return (
            <Link to={route.path} key={route.path}>
              {route.path}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
