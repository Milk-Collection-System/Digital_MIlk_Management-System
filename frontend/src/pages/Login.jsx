import { Link } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  // Keep your existing login/authentication logic here

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

          {/* LOGIN FORM */}
          <form className="login-form">

            {/* EMAIL */}
            <div className="login-field">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>


            {/* PASSWORD */}
            <div className="login-field">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>


            {/* FORGOT PASSWORD */}
            <div className="forgot-password">
              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>


            {/* LOGIN */}
            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>


            {/* CREATE ACCOUNT */}
            <Link
              to="/register"
              className="create-account-btn"
            >
              Create New Account
            </Link>

          </form>


          {/* BACK TO HOME */}
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