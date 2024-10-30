import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from '../AdminPanel/AdminNavigation/AdminNav'

export default function AdminLayout() {
  const [isLogined, setIslogined] = useState(false)
  
  return (
    <div>
      <AdminNav />
      <Outlet />
    </div>
  )
}
