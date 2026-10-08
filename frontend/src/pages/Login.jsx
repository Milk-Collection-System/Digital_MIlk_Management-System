import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";
import { authApi } from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("admin");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  // =========================
  // LOGIN
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await authApi.login({
        email: formData.email,
        password: formData.password,

        // Backend expects ADMIN / FARMER
        role: role.toUpperCase(),
      });

      const data = response.data;

      // =========================
      // SAVE LOGIN INFORMATION
      // =========================

      localStorage.setItem("token", data.token);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", data.role.toLowerCase());
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("userName", data.fullName);
      localStorage.setItem("userEmail", data.email);

      // =========================
      // DASHBOARD
      // =========================

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error("Login error:", error);

      const message =
        error?.response?.data?.message ||
        "Invalid email, password or account type.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // ROLE NAME
  // =========================

  const roleName =
    role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-card">

          {/* =========================
              LOGO
          ========================= */}

          <div className="login-logo">

            <div className="login-logo-image">
              <img
                src="/milk-logo.png"
                alt="Digital Milk Management System"
              />
            </div>

            <h1>Digital Milk</h1>

            <p>Management System</p>

          </div>


          {/* =========================
              ROLE SELECT
          ========================= */}

          <div className="role-section">

            <span className="role-label">
              Login as
            </span>

            <div
              className="role-toggle"
              role="tablist"
              aria-label="Login role"
            >

              {/* ADMIN */}

              <button
                type="button"
                className={`role-option ${
                  role === "admin" ? "active" : ""
                }`}
                onClick={() => {
                  setRole("admin");
                  setError("");
                }}
              >
                <span className="role-icon">
                  ⚙
                </span>

                <span>Admin</span>
              </button>


              {/* FARMER */}

              <button
                type="button"
                className={`role-option ${
                  role === "farmer" ? "active" : ""
                }`}
                onClick={() => {
                  setRole("farmer");
                  setError("");
                }}
              >
                <span className="role-icon">
                  🐄
                </span>

                <span>Farmer</span>
              </button>

            </div>

          </div>


          {/* =========================
              LOGIN FORM
          ========================= */}

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}

            <div className="login-field">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* PASSWORD */}

            <div className="login-field">

              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>


            {/* FORGOT PASSWORD */}

            <div className="forgot-password">

              <Link to="/forgot-password">
                Forgot Password?
              </Link>

            </div>


            {/* ERROR */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              {loading
                ? "Logging in..."
                : `Login as ${roleName}`}

              {!loading && (
                <span className="login-arrow">
                  →
                </span>
              )}

            </button>


            {/* CREATE ACCOUNT */}

            <Link
              to="/register"
              className="create-account-btn"
            >
              Create New Account
            </Link>

          </form>


          {/* BACK HOME */}

          <Link
            to="/"
            className="back-home"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}