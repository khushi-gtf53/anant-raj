// AdminLayout.jsx
import React, { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import LeftSidebar from '../components/header/LeftSidebar';
import RightSidebar from '../components/header/RightSidebar';
import { ToastContainer } from 'react-toastify';

const AdminLayout = () => {
  const location = useLocation();
  const { id, slug } = useParams(); // Get both params

  const isLoginPage = location.pathname === '/admin/login';
  const hasProjectId = Boolean(id);

  useEffect(() => {
    document.body.className = 'admin-body';
  }, []);

  return (
    <>
      {!isLoginPage && <Header onLogout={() => {
        localStorage.removeItem('adminToken');
        window.location.href = '/admin/login';
      }} />}
      
      {!isLoginPage && <LeftSidebar />}
      
      {/* Pass slug so RightSidebar knows which tab is active */}
      {!isLoginPage && hasProjectId && <RightSidebar projectId={id} activeSlug={slug} />}

      <ToastContainer position="top-right" autoClose={1000} />

      <main
        className={
          !isLoginPage
            ? `px-[50px] ${hasProjectId ? 'ml-[80px] mr-[80px]' : 'ml-[80px]'}`
            : ''
        }
      >
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
