import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Admissions", path: "/admin/admissions" },
    { name: "Announcements", path: "/admin/announcements" },
    { name: "Students", path: "/admin/students" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#6B0F1A] text-white p-6">
      
      {/* LOGO */}
      <h2 className="text-xl font-bold mb-10">Admin Panel</h2>

      {/* NAVIGATION */}
      <nav className="space-y-3">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-[#F4A261] text-black"
                  : "hover:bg-[#8A1C2B]"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="mt-10">
        <button className="w-full text-left px-4 py-2 hover:bg-[#8A1C2B] rounded-lg">
          Logout
        </button>
      </div>
    </aside>
  );
}