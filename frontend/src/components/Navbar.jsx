import "../styles/Navbar.css";

export default function Navbar({ collapsed, setCollapsed }) {

  const userName =
    localStorage.getItem("userName") || "User";

  const role =
    localStorage.getItem("role") || "user";

  return (
    <header className="top-navbar">

      {/* SIDEBAR TOGGLE */}

      <button
        className="sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? "☰" : "☰"}
      </button>


      {/* TITLE */}

      <div className="navbar-title">
        Digital Milk Management System
      </div>


      {/* USER */}

      <div className="navbar-user">

        <div className="navbar-user-info">

          <div className="navbar-user-name">
            {userName}
          </div>

          <div className="navbar-user-role">
            {role}
          </div>

        </div>


        <div className="navbar-avatar">
          {userName.charAt(0).toUpperCase()}
        </div>

      </div>

    </header>
  );
}