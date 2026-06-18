import { Routes, Route } from "react-router-dom";

import Login from "../admin/Login";
import Dashboard from "../admin/Dashboard";
import Announcements from "../admin/Announcements";
import Admissions from "../admin/Admissions";
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
        path="announcements"
        element={
          <ProtectedRoute>
            <Announcements />
          </ProtectedRoute>
        }
      />

      <Route
        path="admissions"
        element={
          <ProtectedRoute>
            <Admissions />
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