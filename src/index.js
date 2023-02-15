import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './i18n';

import App from './App';
import { Loader } from './components/Loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loader />}>
    <HashRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HashRouter>
  </Suspense>,
);
