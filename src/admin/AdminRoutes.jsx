import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import ProjectList from './pages/ProjectList';
import Project from './pages/Project';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import ProtectedAdminRoute from './components/auth/ProtectedAdminRoute';
import ProjectDetails from './pages/ProjectDetails';
import CmsSections from './pages/CmsSections';
import NotFound from './pages/NotFound'; // create if not exists

export default function AdminRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Protected */}
      <Route
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="project/:id?" element={<Project />} />
        <Route path="project/:id/:slug" element={<ProjectDetails />} />
        <Route path="project-list" element={<ProjectList />} />
        <Route path="page/:slug" element={<Homepage />} />
        <Route path="cms/:slug" element={<CmsSections />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
