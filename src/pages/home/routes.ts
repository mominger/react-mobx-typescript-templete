import React from 'react';
import { ROUTE_URL } from '@/helper/constants';

const Home = React.lazy(
  () => import(/* webpackChunkName: "home" */ '@/pages/home'),
);

export default [
  {
    path: `${ROUTE_URL.ROOT}`,
    component: Home,
  },
];
