import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Register.css";
import "../styles/RoleToggle.css";
import { authApi } from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [role, setRole] = useState("user");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");


    const {
      fullName,
      email,
      phone,
      address,
      password,
      confirmPassword,
    } = formData;


    if (
      !fullName ||
      !email ||
      !phone ||
      !address ||
      !password ||
      !confirmPassword
    ) {

      setError(
        "Please fill in all fields."
      );

      return;
    }


    if (password.length < 6) {

      setError(
        "Password must be at least 6 characters."
      );

      return;
    }


    if (password !== confirmPassword) {

      setError(
        "Passwords do not match."
      );

      return;
    }


    setLoading(true);


    try {

      await authApi.register({

        fullName,
        email,
        phone,
        address,
        password,

        role:
          role.toUpperCase(),

      });


      alert(
        `${role.charAt(0).toUpperCase() + role.slice(1)}
account created successfully!`
      );


      navigate("/login");

    } catch (error) {

      console.error(
        "Registration error:",
        error
      );

      const message =
        error?.response?.data?.message ||
        "Unable to create account.";

      setError(message);

    } finally {

      setLoading(false);

    }
  };


  /* =========================
     EYE ICON
  ========================= */

  const EyeIcon = ({
    hidden = false,
  }) => {

    if (hidden) {

      return (
        <svg
          className="password-eye-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <path
            d="M3 3L21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M10.58 10.58C10.21 10.95 10 11.45 10 12C10 13.1 10.9 14 12 14C12.55 14 13.05 13.79 13.42 13.42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M9.88 4.24C10.57 4.08 11.28 4 12 4C17.5 4 21 12 21 12C20.52 13.1 19.85 14.18 19 15.15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M6.61 6.61C4.27 8.24 3 12 3 12C3 12 6.5 20 12 20C13.64 20 15.1 19.49 16.36 18.72"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

        </svg>
      );
    }


    return (
      <svg
        className="password-eye-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          d="M3 12C3 12 6.5 4 12 4C17.5 4 21 12 21 12C21 12 17.5 20 12 20C6.5 20 3 12 3 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="2"
        />

      </svg>
    );
  };


  return (

    <div className="register-page">

      <div className="register-container">

        <div className="register-card">

          <div className="register-logo">

            <div className="milk-icon">
              🥛
            </div>

            <h1>
              Create Account
            </h1>

            <p>
              Join Digital Milk Management System
            </p>

          </div>


          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            {/* ROLE */}

            <div className="role-section">

              <label className="role-label">
                Account Type
              </label>

              <div className="role-toggle">

                {["admin", "user", "farmer"].map(
                  (item) => (

                    <button
                      key={item}
                      type="button"
                      className={`role-option ${
                        role === item
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setRole(item)
                      }
                    >
                      {item.charAt(0).toUpperCase() +
                        item.slice(1)}
                    </button>

                  )
                )}

              </div>

            </div>


            {/* NAME */}

            <div className="register-field">

              <label htmlFor="fullName">
                Full Name
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
                required
              />

            </div>


            {/* EMAIL */}

            <div className="register-field">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

            </div>


            {/* PHONE + ADDRESS */}

            <div className="register-two-column">

              <div className="register-field">

                <label htmlFor="phone">
                  Mobile Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                />

              </div>


              <div className="register-field">

                <label htmlFor="address">
                  Address
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                  autoComplete="street-address"
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="register-two-column">

              <div className="register-field">

                <label htmlFor="password">
                  Password
                </label>

                <div className="password-input-wrapper">

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(
                        (previous) => !previous
                      )
                    }
                  >

                    <span className="password-toggle-divider" />

                    <EyeIcon
                      hidden={showPassword}
                    />

                    <span className="password-toggle-text">
                      {showPassword
                        ? "Hide"
                        : "Show"}
                    </span>

                  </button>

                </div>

              </div>


              {/* CONFIRM */}

              <div className="register-field">

                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <div className="password-input-wrapper">

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm password"
                    value={
                      formData.confirmPassword
                    }
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        (previous) =>
                          !previous
                      )
                    }
                  >

                    <span className="password-toggle-divider" />

                    <EyeIcon
                      hidden={
                        showConfirmPassword
                      }
                    />

                    <span className="password-toggle-text">
                      {showConfirmPassword
                        ? "Hide"
                        : "Show"}
                    </span>

                  </button>

                </div>

              </div>

            </div>


            {/* ERROR */}

            {error && (

              <div className="register-error">
                {error}
              </div>

            )}


            {/* SUBMIT */}

            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >

              {loading
                ? "Creating Account..."
                : `Create ${
                    role.charAt(0).toUpperCase() +
                    role.slice(1)
                  } Account`}

            </button>

          </form>


          <div className="register-login">

            Already have an account?{" "}

            <Link to="/login">
              Login
            </Link>

          </div>


          <div className="register-back">

            <Link to="/">
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}