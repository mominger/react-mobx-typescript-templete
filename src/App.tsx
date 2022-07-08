import React from 'react';
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import router from '@/router';
import { useStore } from '@/helper/hooks';
import { withError } from '@/components';
import { ROUTE_URL } from '@/helper/constants';

import 'antd/dist/antd.min.css';
import './App.scss';

function App() {
  //init webstore
  const { webStore } = useStore();
  webStore.init(navigator.userAgent);

  const FallbackComponent = <div>loading.....</div>;

  return (
    <div className="app">
      <Router>
        <Suspense fallback={FallbackComponent}>
          <Routes>
            {router.routes.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={<route.component />}
                  key={route.path}
                ></Route>
              );
            })}
            <Route
              path="*"
              element={<Navigate to={ROUTE_URL.ROOT} replace />}
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default withError(App);
