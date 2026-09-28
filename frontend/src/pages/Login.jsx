import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";
import "../styles/RoleToggle.css";

export default function Login() {
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Authentication can be connected to your backend here.
    // The selected role is available as: role
    console.log("Login role:", role);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">

          {/* LOGO */}
          <div className="login-logo">
            <div className="milk-icon">🥛</div>
            <h1>Digital Milk</h1>
            <p>Management System</p>
          </div>

          {/* ROLE TOGGLE */}
          <div className="role-section">
            <span className="role-label">Login as</span>

            <div className="role-toggle" role="tablist" aria-label="Login role">
              <button
                type="button"
                className={`role-option ${role === "admin" ? "active" : ""}`}
                onClick={() => setRole("admin")}
              >
                Admin
              </button>

              <button
                type="button"
                className={`role-option ${role === "user" ? "active" : ""}`}
                onClick={() => setRole("user")}
              >
                User
              </button>

              <button
                type="button"
                className={`role-option ${role === "farmer" ? "active" : ""}`}
                onClick={() => setRole("farmer")}
              >
                Farmer
              </button>
            </div>
          </div>

          {/* LOGIN FORM */}
          <form className="login-form" onSubmit={handleSubmit}>

            <div className="login-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="login-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-button">
              Login as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>

            <Link to="/register" className="create-account-btn">
              Create New Account
            </Link>
          </form>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}
