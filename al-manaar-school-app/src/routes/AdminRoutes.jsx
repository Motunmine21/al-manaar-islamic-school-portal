import { Routes, Route } from "react-router-dom";

import Login from "../admin/Login";
import Dashboard from "../admin/Dashboard";
import ManageAnnouncements from "../admin/ManageAnnouncements";
import ManageAdmissions from "../admin/ManageAdmissions";
import Messages from "../admin/Messages";
import Settings from "../admin/Settings";

import ProtectedRoute from "../components/ProtectedRoute";

function AdminRoutes() {
  return (
    <Routes>

      {/* PUBLIC ADMIN LOGIN */}
      <Route path="login" element={<Login />} />

      {/* PROTECTED ADMIN AREA */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="manageannouncements"
        element={
          <ProtectedRoute>
            <ManageAnnouncements />
          </ProtectedRoute>
        }
      />

      <Route
        path="manageadmissions"
        element={
          <ProtectedRoute>
            <ManageAdmissions />
          </ProtectedRoute>
        }
      />

      <Route
        path="messages"
        element={
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        }
      />

      <Route
        path="settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AdminRoutes;