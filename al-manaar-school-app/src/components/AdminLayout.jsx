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

      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 shadow-sm px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden mr-4 text-2xl text-deep-wine"
            >
              ☰
            </button>

            <h2 className="text-xl font-bold text-navy-dark">
              Admin Dashboard
            </h2>
          </div>

          <div className="hidden md:block text-sm text-gray-500">
            Al-Manaar School Portal
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;