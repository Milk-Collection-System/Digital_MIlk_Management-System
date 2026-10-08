import "../styles/Navbar.css";

export default function Navbar({
  collapsed,
  setCollapsed,
  hideSidebar = false,
}) {

  const userName =
    localStorage.getItem("userName") || "User";

  const role =
    (localStorage.getItem("role") || "farmer")
      .toLowerCase();

  const firstLetter =
    userName.charAt(0).toUpperCase();

  return (
    <header
      className={`top-navbar ${
        hideSidebar ? "farmer-navbar" : ""
      }`}
    >

      {/* LEFT SIDE */}
      <div className="navbar-left">

        {/* Hamburger ONLY for Admin */}
        {!hideSidebar && (
          <button
            type="button"
            className="sidebar-toggle"
            onClick={() =>
              setCollapsed(!collapsed)
            }
            title={
              collapsed
                ? "Expand sidebar"
                : "Collapse sidebar"
            }
          >
            ☰
          </button>
        )}

        <div className="navbar-title">
          Digital Milk Management System
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="navbar-right">

        <div className="navbar-user-info">

          <div className="navbar-user-name">
            {userName}
          </div>

          <div className="navbar-user-role">
            {role}
          </div>

        </div>

        <div className="navbar-avatar">
          {firstLetter}
        </div>

      </div>

    </header>
  );
}