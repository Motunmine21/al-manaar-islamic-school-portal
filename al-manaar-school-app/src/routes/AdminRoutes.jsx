import { Routes, Route } from "react-router-dom";
import AdminLogin from "../admin/AdminLogin";
import AdminDashboard from "../admin/AdminDashboard";
import ManageAdmissions from "../admin/ManageAdmissions";
import ManageAnnouncements from "../admin/ManageAnnouncements";
import AdminLayout from "../components/AdminLayout";

function AdminRoutes() {
  return (
    <Routes>
      {/* LOGIN (no sidebar) */}
      <Route path="login" element={<AdminLogin />} />

      {/* ALL OTHER ADMIN PAGES */}
      <Route
        path="dashboard"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />

      <Route
        path="admissions"
        element={
          <AdminLayout>
            <ManageAdmissions />
          </AdminLayout>
        }
      />

      <Route
        path="announcements"
        element={
          <AdminLayout>
            <ManageAnnouncements />
          </AdminLayout>
        }
      />
    </Routes>
  );
}

export default AdminRoutes;