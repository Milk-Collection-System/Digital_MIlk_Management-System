import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role") || "user";

  const logout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");

    navigate("/login");
  };

  const adminLinks = [
    ["/dashboard", "Dashboard"],
    ["/users", "Users"],
    ["/farmers", "Farmers"],
    ["/milk-collection", "Milk Collection Data"],
    ["/payment-receipts", "Payment Receipts"],
    ["/payments", "Payment Data"],
    ["/reports", "Reports"],
  ];

  const userLinks = [
    ["/dashboard", "Dashboard"],
    ["/farmers", "My Farmers"],
    ["/milk-collection", "Milk Collection"],
    ["/payment-receipts", "Payment Receipts"],
    ["/payments", "Payment Data"],
  ];

  const farmerLinks = [
    ["/dashboard", "Dashboard"],
    ["/milk-collection", "My Milk Collection"],
    ["/payment-receipts", "Payment Receipts"],
    ["/payments", "My Payments"],
  ];

  let links = userLinks;

  if (role === "admin") {
    links = adminLinks;
  }

  if (role === "farmer") {
    links = farmerLinks;
  }

  return (
    <aside className="sidebar">

      <div className="brand">
        🥛 Digital Milk
      </div>

      <nav className="nav flex-column pt-3">

        {links.map(([to, label]) => (

          <NavLink
            key={to}
            to={to}
            className="nav-link px-3 py-2"
          >
            <span>{label}</span>
          </NavLink>

        ))}

      </nav>

      <div className="sidebar-account">

        <div className="account-role">
          {role.toUpperCase()}
        </div>

        <button
          type="button"
          onClick={logout}
          className="logout-button"
        >
          Logout
        </button>

      </div>

    </aside>
  );
}