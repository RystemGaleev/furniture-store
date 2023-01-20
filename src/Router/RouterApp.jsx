import { Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from './ProtectedRoutes';
import { privateRoutes } from './RouterIndex';
import { publicRoutes } from './RouterIndex';

export const RouterApp = () => {
  return (
    <Routes>
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
  );
};
