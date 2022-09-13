import React from 'react';
import { ROUTE_URL } from '@/helper/constants';

const Demo = React.lazy(
  () => import(/* webpackChunkName: "demo" */ '@/pages/demo'),
);

export default [
  {
    path: `${ROUTE_URL.ROOT}demo`,
    component: Demo,
  },
];
