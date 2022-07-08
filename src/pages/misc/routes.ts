import React from 'react';
import { ROUTE_URL } from '@/helper/constants';

const NotFount = React.lazy(
  () => import(/* webpackChunkName: "404" */ '@/pages/misc/404'),
);
const Nav = React.lazy(
  () => import(/* webpackChunkName: "404" */ '@/pages/misc/nav'),
);

export default [
  {
    path: ROUTE_URL.NOT_FOUND,
    component: NotFount,
  },
  {
    path: ROUTE_URL.NAV,
    component: Nav,
  },
];
