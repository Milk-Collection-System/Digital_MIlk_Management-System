import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import "../styles/Home.css";

export default function Home() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}
      <nav className="home-navbar">

        <Link to="/" className="home-logo">
          <span className="logo-icon">🥛</span>
          <span>Digital Milk</span>
        </Link>

       <div className="home-nav-links">

  <a href="#home" className="nav-tab active">
    Home
  </a>

  <a href="#features" className="nav-tab">
    Features
  </a>

  <a href="#about" className="nav-tab">
    About
  </a>

  {/* THEME TOGGLE */}
  <button
    type="button"
    className="theme-toggle"
    onClick={toggleTheme}
    aria-label="Toggle theme"
    title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
  >
    <span className="theme-icon">
      {darkMode ? "☀️" : "🌙"}
    </span>

    <span className="theme-toggle-text">
      {darkMode ? "Light" : "Dark"}
    </span>
  </button>

  <Link to="/login" className="login-btn">
    Login
  </Link>

</div>

      </nav>


      {/* ================= HERO ================= */}
      <section id="home" className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            <span>🥛</span>
            Smart Milk Collection System
          </div>

          <h1>
            Digital Milk
            <br />
            <span>Management System</span>
          </h1>

          <p className="hero-description">
            Manage milk collection, farmers, milk testing,
            rates, bills and payments — all in one simple
            digital system.
          </p>

          <div className="hero-buttons">

            <Link to="/login" className="primary-btn">
              Get Started
              <span>→</span>
            </Link>

            <a href="#features" className="secondary-btn">
              Explore Features
            </a>

          </div>

          <div className="hero-highlights">

            <div>
              <span>✓</span>
              Easy to use
            </div>

            <div>
              <span>✓</span>
              Digital records
            </div>

            <div>
              <span>✓</span>
              Fast management
            </div>

          </div>

        </div>


        {/* ================= DASHBOARD PREVIEW ================= */}
        <div className="hero-visual">

          <div className="visual-glow"></div>

          <div className="milk-card">

            <div className="milk-card-header">

              <div>
                <small>TODAY'S OVERVIEW</small>
                <h3>Milk Collection</h3>
              </div>

              <div className="milk-card-icon">
                🥛
              </div>

            </div>


            <div className="collection-value">
              <strong>1,248</strong>
              <span>L</span>
            </div>

            <div className="collection-growth">
              <span>↑ 12.5%</span>
              <small>vs yesterday</small>
            </div>


            <div className="card-divider"></div>


            <div className="milk-stats">

              <div className="milk-stat">
                <div className="stat-symbol">👨‍🌾</div>

                <div>
                  <strong>86</strong>
                  <span>Farmers</span>
                </div>
              </div>


              <div className="milk-stat">
                <div className="stat-symbol">🧪</div>

                <div>
                  <strong>3.5%</strong>
                  <span>Avg FAT</span>
                </div>
              </div>


              <div className="milk-stat">
                <div className="stat-symbol">₹</div>

                <div>
                  <strong>40.80</strong>
                  <span>Rate / L</span>
                </div>
              </div>

            </div>


            <div className="collection-progress">

              <div className="progress-header">
                <span>Daily Collection Target</span>
                <strong>78%</strong>
              </div>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>

              <small>
                1,248 L collected of 1,600 L target
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="home-stats">

        <div className="home-stat-card">
          <span className="home-stat-icon">👨‍🌾</span>

          <div>
            <strong>86+</strong>
            <span>Registered Farmers</span>
          </div>
        </div>


        <div className="home-stat-card">
          <span className="home-stat-icon">🥛</span>

          <div>
            <strong>1,248 L</strong>
            <span>Daily Collection</span>
          </div>
        </div>


        <div className="home-stat-card">
          <span className="home-stat-icon">🧪</span>

          <div>
            <strong>3.5%</strong>
            <span>Average FAT</span>
          </div>
        </div>


        <div className="home-stat-card">
          <span className="home-stat-icon">💰</span>

          <div>
            <strong>₹40.80</strong>
            <span>Current Rate</span>
          </div>
        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section id="features" className="features-section">

        <div className="section-heading">

          <span>POWERFUL FEATURES</span>

          <h2>
            Everything You Need
          </h2>

          <p>
            Manage your complete milk collection center
            from one simple digital platform.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">👨‍🌾</div>

            <h3>Farmer Management</h3>

            <p>
              Store and manage farmer or member information,
              collection history and payment details.
            </p>

            <span className="feature-link">
              Manage farmers →
            </span>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🥛</div>

            <h3>Milk Collection</h3>

            <p>
              Record daily milk quantity and maintain
              accurate collection records.
            </p>

            <span className="feature-link">
              Track collection →
            </span>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🧪</div>

            <h3>Milk Testing</h3>

            <p>
              Record FAT, SNF and LCT values for every
              milk collection.
            </p>

            <span className="feature-link">
              Check quality →
            </span>
          </div>


          <div className="feature-card">
            <div className="feature-icon">💰</div>

            <h3>Rate Calculation</h3>

            <p>
              Calculate milk rates and collection amounts
              accurately.
            </p>

            <span className="feature-link">
              Calculate rates →
            </span>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🧾</div>

            <h3>Bills & Payments</h3>

            <p>
              Generate periodic bills and maintain
              payment records efficiently.
            </p>

            <span className="feature-link">
              Manage payments →
            </span>
          </div>


          <div className="feature-card">
            <div className="feature-icon">📊</div>

            <h3>Reports & Analytics</h3>

            <p>
              View useful collection, farmer and
              payment reports.
            </p>

            <span className="feature-link">
              View reports →
            </span>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section">

        <div className="about-content">

          <span className="section-label">
            ABOUT THE SYSTEM
          </span>

          <h2>
            Making Milk Collection
            <span> Digital & Simple</span>
          </h2>

          <p>
            Digital Milk Management System helps milk
            collection centers maintain farmer records,
            daily milk entries, milk quality information,
            rates, bills and payments digitally.
          </p>

          <div className="about-points">

            <div>
              <span>✓</span>
              Centralized farmer records
            </div>

            <div>
              <span>✓</span>
              Accurate milk collection
            </div>

            <div>
              <span>✓</span>
              Easy billing and payments
            </div>

            <div>
              <span>✓</span>
              Useful management reports
            </div>

          </div>

        </div>


        <div className="about-flow">

          <div className="flow-card">
            <span>👨‍🌾</span>
            <strong>Farmer</strong>
            <small>Registration</small>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-card">
            <span>🥛</span>
            <strong>Collection</strong>
            <small>Milk Entry</small>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-card">
            <span>🧪</span>
            <strong>Testing</strong>
            <small>Quality Check</small>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-card">
            <span>💰</span>
            <strong>Payment</strong>
            <small>Billing</small>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="home-cta">

        <div>

          <span>READY TO GO DIGITAL?</span>

          <h2>
            Manage your milk collection
            <br />
            <strong>smarter and faster.</strong>
          </h2>

          <p>
            Start managing your collection center
            with a simple digital system.
          </p>

          <Link to="/login" className="primary-btn">
            Get Started
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="home-footer">

        <div className="footer-main">

          <Link to="/" className="home-logo">
            <span className="logo-icon">🥛</span>
            <span>Digital Milk</span>
          </Link>

          <p>
            Smart digital management for modern
            milk collection centers.
          </p>

        </div>


        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>

          <Link to="/login">
            Login
          </Link>

        </div>


        <div className="footer-bottom">
          © 2026 Digital Milk Management System.
          All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}