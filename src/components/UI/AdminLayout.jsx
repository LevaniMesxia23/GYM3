import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AdminNav from "../AdminPanel/AdminNavigation/AdminNav";

export default function AdminLayout() {
  const location = useLocation();
  const isLogined = !!sessionStorage.getItem("adminLogin");

  if (isLogined && location.pathname === "/admin/login") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (!isLogined && location.pathname !== "/admin/login") {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return (
    <div>
      <AdminNav />
      <Outlet />
    </div>
  );
}
