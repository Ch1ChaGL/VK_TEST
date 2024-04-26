import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '.';
import MainLayout from '../components/layout/MainLayout';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <MainLayout>
              <route.component />
            </MainLayout>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
