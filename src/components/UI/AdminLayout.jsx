import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AdminNav from "../AdminPanel/AdminNavigation/AdminNav";
import AdminHeader from "../AdminPanel/AdminHeader/AdminHeader";

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
    <div className="bg-[#121212]">
      <AdminHeader />
      <AdminNav />
      <Outlet />
    </div>
  );
}
