import { Route, Routes } from 'react-router-dom';
import { privateRoutes } from './RouterIndex';

import React from 'react';

export const RouterApp = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
