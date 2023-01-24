import { Route, Routes, useLocation } from 'react-router-dom';
import { ProtectedRoutes } from './ProtectedRoutes';
import { privateRoutes } from './RouterIndex';
import { publicRoutes } from './RouterIndex';

import { AnimatePresence } from 'framer-motion';
export const RouterApp = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<ProtectedRoutes>{route.element}</ProtectedRoutes>}
          />
        ))}
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};
