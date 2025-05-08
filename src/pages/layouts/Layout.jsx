import axios from "axios";
import React from "react";
import { Outlet } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { logoutController } from "../../controllers/auth/AuthController";

const Layout = () => {
  const handleLogout = async (e) => {
    e.preventDefault();

    const response = await logoutController();
    if (response.success) {
      alert(response.message || "Cerrando sesión exitoso.");
      window.location.href = "/auth/login";
    } else {
      alert(response.message || "No se pudo cerra sesión.");
    }
  };
  return (
    <div>
      Layout
      <button className="sidebar-button-principal" onClick={handleLogout}>
        <span className="">x</span>
        <p className="mt-3">Salir</p>
      </button>
      <Outlet />
    </div>
  );
};

export default Layout;
