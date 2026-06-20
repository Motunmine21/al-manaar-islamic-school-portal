import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

 function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow-sm p-4 flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden mr-4 text-2xl"
          >
            ☰
          </button>

          <h2 className="text-xl font-semibold text-navy-dark">
            Admin Dashboard
          </h2>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AdminLayout;