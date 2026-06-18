import { Routes, Route } from "react-router-dom";

import Login from "../admin/Login";
import Dashboard from "../admin/Dashboard";
import Announcements from "../admin/Announcements";
import Admissions from "../admin/Admissions";
import Messages from "../admin/Messages";
import Settings from "../admin/Settings";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="announcements" element={<Announcements />} />
      <Route path="admissions" element={<Admissions />} />
      <Route path="messages" element={<Messages />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}

export default AdminRoutes;