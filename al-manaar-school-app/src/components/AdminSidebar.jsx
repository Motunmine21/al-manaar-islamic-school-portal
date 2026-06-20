import { NavLink } from "react-router-dom";

function AdminSidebar({ isOpen, setIsOpen }) {
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
        `}
      >
        <div className="p-6 border-b border-white/20">
          <h1 className="text-2xl font-bold text-gold">
            Al-Manaar Admin
          </h1>
        </div>

        <nav className="p-4 space-y-2">
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
        </nav>
      </aside>
    </>
  );
}
export default AdminSidebar;