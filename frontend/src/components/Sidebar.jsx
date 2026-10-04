import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar({ collapsed, setCollapsed }) {
  const navigate = useNavigate();

  const role = localStorage.getItem("role") || "user";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");

    navigate("/login");
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* LOGO */}

      <div className="sidebar-logo">

        <div className="logo-icon">
          🥛
        </div>

        {!collapsed && (
          <div className="logo-text">
            Digital Milk
          </div>
        )}

      </div>


      {/* MENU */}

      <nav className="sidebar-menu">

        {!collapsed && (
          <div className="menu-section-title">
            MAIN MENU
          </div>
        )}


        <NavLink
          to="/dashboard"
          title="Dashboard"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-link-icon">▦</span>

          {!collapsed && (
            <span>Dashboard</span>
          )}
        </NavLink>


        <NavLink
          to="/users"
          title="Users"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-link-icon">👥</span>

          {!collapsed && (
            <span>Users</span>
          )}
        </NavLink>


        <NavLink
          to="/farmers"
          title="Farmers"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-link-icon">👨‍🌾</span>

          {!collapsed && (
            <span>Farmers</span>
          )}
        </NavLink>


        <NavLink
          to="/milk-collection"
          title="Milk Collection"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-link-icon">🥛</span>

          {!collapsed && (
            <span>Milk Collection</span>
          )}
        </NavLink>


        <NavLink
          to="/payments"
          title="Payments"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-link-icon">₹</span>

          {!collapsed && (
            <span>Payments</span>
          )}
        </NavLink>


        <NavLink
          to="/receipts"
          title="Receipts"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-link-icon">▤</span>

          {!collapsed && (
            <span>Receipts</span>
          )}
        </NavLink>


        <NavLink
          to="/reports"
          title="Reports"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-link-icon">▥</span>

          {!collapsed && (
            <span>Reports</span>
          )}
        </NavLink>


        {/* ADMIN */}

        {role === "admin" && !collapsed && (
          <>
            <div className="menu-section-title admin-title">
              ADMINISTRATION
            </div>

            <div className="role-badge">
              <span>●</span>
              ADMIN
            </div>
          </>
        )}

      </nav>


      {/* LOGOUT */}

      <div className="sidebar-bottom">

        <button
          className="logout-button"
          title="Logout"
          onClick={handleLogout}
        >
          <span className="logout-icon">
            ↪
          </span>

          {!collapsed && (
            <span>Logout</span>
          )}

        </button>

      </div>

    </aside>
  );
}