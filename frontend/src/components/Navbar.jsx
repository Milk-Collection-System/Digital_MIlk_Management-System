export default function Navbar() {

  const role =
    localStorage.getItem("role") || "user";

  const userName =
    localStorage.getItem("userName") || "User";

  return (
    <header className="topbar">

      <strong>
        Digital Milk Management System
      </strong>

      <div className="topbar-user">

        <span>
          {userName}
        </span>

        <span className="role-badge">
          {role}
        </span>

      </div>

    </header>
  );
}