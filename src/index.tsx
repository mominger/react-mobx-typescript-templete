import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Store, StoreProvider } from '@/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const strictMode = process.env.REACT_APP_STRICTMODE === 'true';
const Root = (
  <StoreProvider value={Store}>
    <App />
  </StoreProvider>
);

root.render(
  (strictMode && <React.StrictMode>{Root}</React.StrictMode>) || <>{Root}</>,
);

reportWebVitals();
