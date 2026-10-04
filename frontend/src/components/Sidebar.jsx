import "../styles/Navbar.css";


export default function Navbar({
  collapsed,
  setCollapsed,
}) {

  const userName =
    localStorage.getItem("userName") ||
    "User";

  const role =
    localStorage.getItem("role") ||
    "user";


  const firstLetter =
    userName
      .charAt(0)
      .toUpperCase();


  return (

    <header className="top-navbar">

      {/* =================================
          LEFT
      ================================== */}

      <div className="navbar-left">

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

          <span>
            ☰
          </span>

        </button>


        <div className="navbar-title">
          Digital Milk Management System
        </div>

      </div>


      {/* =================================
          RIGHT
      ================================== */}

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