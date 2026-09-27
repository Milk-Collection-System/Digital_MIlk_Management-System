import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Registration backend can be connected here later.
    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="register-page">

      <div className="register-container">

        <div className="register-card">

          {/* LOGO */}
          <div className="register-logo">
            <div className="milk-icon">🥛</div>

            <h1>Digital Milk</h1>

            <p>Create New Account</p>
          </div>


          {/* ERROR */}
          {error && (
            <div className="register-error">
              {error}
            </div>
          )}


          {/* FORM */}
          <form
            className="register-form"
            onSubmit={handleRegister}
          >

            {/* FULL NAME */}
            <div className="register-field">

              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

            </div>


            {/* EMAIL */}
            <div className="register-field">

              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

            </div>


            {/* PHONE */}
            <div className="register-field">

              <label>Mobile Number</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />

            </div>


            {/* PASSWORD */}
            <div className="register-field">

              <label>Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
              />

            </div>


            {/* CONFIRM PASSWORD */}
            <div className="register-field">

              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />

            </div>


            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="register-button"
            >
              Create Account
            </button>

          </form>


          {/* LOGIN LINK */}
          <div className="already-account">
            Already have an account?

            <Link to="/login">
              Login
            </Link>
          </div>


          {/* HOME */}
          <Link
            to="/"
            className="register-back-home"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}