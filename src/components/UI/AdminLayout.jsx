import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AdminNav from '../AdminPanel/AdminNavigation/AdminNav';

export default function AdminLayout() {
  const location = useLocation();
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    const loginStatus = sessionStorage.getItem('adminLogin');
    setIsLogined(!!loginStatus);
  }, []);

  if (!isLogined) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return (
    <div>
      <AdminNav />
      <Outlet />
    </div>
  );
}
