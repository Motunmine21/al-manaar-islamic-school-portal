import { Routes, Route } from "react-router-dom";

import Login from "../admin/Login";
import Dashboard from "../admin/Dashboard";
import Results from "../admin/Results";
import ManageAnnouncements from "../admin/ManageAnnouncements";
import ManageAdmissions from "../admin/ManageAdmissions";
import Messages from "../admin/Messages";
import Settings from "../admin/Settings";

import ProtectedRoute from "../components/ProtectedRoute";
import AdminLayout from "../components/AdminLayout";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="results" element={<Results />} />
        <Route
          path="manage-announcements"
          element={<ManageAnnouncements />}
        />
        <Route
          path="manage-admissions"
          element={<ManageAdmissions />}
        />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;