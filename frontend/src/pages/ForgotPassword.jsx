import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setMessage(
      "If an account exists with this email, password reset instructions will be sent."
    );
  };

  return (
    <div className="forgot-page">

      <div className="forgot-container">

        <div className="forgot-card">

          {/* LOGO */}
          <div className="forgot-logo">

            <div className="milk-icon">
              🥛
            </div>

            <h1>Digital Milk</h1>

            <p>Reset Your Password</p>

          </div>


          <div className="forgot-info">
            Enter your registered email address and we will
            help you reset your password.
          </div>


          {/* ERROR */}
          {error && (
            <div className="forgot-error">
              {error}
            </div>
          )}


          {/* SUCCESS */}
          {message && (
            <div className="forgot-success">
              {message}
            </div>
          )}


          {/* FORM */}
          <form
            className="forgot-form"
            onSubmit={handleSubmit}
          >

            <div className="forgot-field">

              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter your registered email"
              />

            </div>


            <button
              type="submit"
              className="reset-button"
            >
              Send Reset Link
            </button>

          </form>


          {/* LOGIN */}
          <Link
            to="/login"
            className="forgot-login"
          >
            ← Back to Login
          </Link>


          {/* HOME */}
          <Link
            to="/"
            className="forgot-home"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}