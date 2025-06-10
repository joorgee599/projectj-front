import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import { AuthProviders } from "../contexts/AuthProviders";
import AuthRouter from "./AuthRouter";
import UserRoute from "./UserRoutes";
import ProductRouter from "./ProductRouter";

const AppRouter = () => {
  const user = JSON.parse(localStorage.getItem("user")); // ← corregido
  const isAuthenticated = !!(user && user.token);

  return (
    <BrowserRouter>
      <AuthProviders>
        <Routes>
          {/* Si NO está autenticado, mostrar rutas de login */}
          {!isAuthenticated && (
            <>
              <Route path="/auth/*" element={<AuthRouter />} />
              <Route path="*" element={<Navigate to="/auth/login" />} />
              
            </>
          )}

          {/* Si SÍ está autenticado, mostrar rutas privadas */}
          {isAuthenticated && (
            <>
              <Route path="/user/*" element={<UserRoute />} />
              <Route path="/product/*" element={<ProductRouter/>} />
              
              <Route path="*" element={<Navigate to="/user" />} />
            </>
          )}
        </Routes>
      </AuthProviders>
    </BrowserRouter>
  );
};

export default AppRouter;
