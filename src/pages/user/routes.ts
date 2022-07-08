import React from 'react';
import { ROUTE_URL } from '@/helper/constants';

const Login = React.lazy(
  () => import(/* webpackChunkName: "user_login" */ '@/pages/user/login'),
);

export default [
  {
    path: ROUTE_URL.USER_LOGIN,
    component: Login,
  },
];
