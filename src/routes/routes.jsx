import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/private/pages/Home';
import Error404 from '../pages/public/pages/Error';
import RetirarDinero from '../pages/private/pages/Retiros';
import TransferirDinero from '../pages/private/pages/Transferencia';

const isAuthenticated = () => {
  // return localStorage.getItem('authToken') !== null;
  return true
};

function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

function PrivateRoutes() {
  return (
    <Routes>
      <Route
        path="/Home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
       <Route
        path="/Retiro"
        element={
          <PrivateRoute>
            <RetirarDinero />
          </PrivateRoute>
        }
      />
      <Route
        path="/Transferencia"
        element={
          <PrivateRoute>
            <TransferirDinero />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Error404/>} />
    </Routes>
  );
}

export default PrivateRoutes;
