import { NavLink, useNavigate } from "react-router-dom";

function AdminSidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  const links = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Results", path: "/admin/results" },
    { name: "Manage Admissions", path: "/admin/manage-admissions" },
    { name: "Manage Announcements", path: "/admin/manage-announcements" },
    { name: "Messages", path: "/admin/messages" },
    { name: "Settings", path: "/admin/settings" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-64
          bg-deep-wine text-white
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gold">
            Al-Manaar Admin
          </h1>

          {/* Mobile Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col flex-1 p-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-gold text-navy-dark font-semibold"
                    : "hover:bg-navy-blue"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Logout */}
          <div className="mt-auto pt-6">
            <button
              onClick={handleLogout}
              className="
                w-full
                border
                border-gold
                text-gold
                py-3
                rounded-lg
                font-semibold
                transition
                hover:bg-gold
                hover:text-deep-wine
              "
            >
              Logout
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default AdminSidebar;