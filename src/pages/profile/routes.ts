import React from 'react';
import { ROUTE_URL } from '@/helper/constants';

const Profile = React.lazy(
  () => import(/* webpackChunkName: "profile" */ '@/pages/profile'),
);
const ProfileModify = React.lazy(
  () =>
    import(/* webpackChunkName: "profile_modify" */ '@/pages/profile/modify'),
);

export default [
  {
    path: ROUTE_URL.PROFILE,
    component: Profile,
  },
  {
    path: ROUTE_URL.PROFILE_MODIFY,
    component: ProfileModify,
  },
];
