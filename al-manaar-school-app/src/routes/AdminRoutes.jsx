import { Routes, Route } from "react-router-dom";
import AdminLogin from "../admin/AdminLogin";
import AdminDashboard from "../admin/AdminDashboard";
import ManageAdmissions from "../admin/ManageAdmissions";
import ManageAnnouncements from "../admin/ManageAnnouncements";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="admissions" element={<ManageAdmissions />} />
      <Route path="announcements" element={<ManageAnnouncements />} />
    </Routes>
  );
}

export default AdminRoutes;