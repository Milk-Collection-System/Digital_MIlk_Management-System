import { Link } from 'react-router-dom';
import '../styles/Home.css';


export default function Home() {
  return (
    <div className="home-page">
      <nav className="home-navbar">
        <div className="home-logo">
          🥛 Digital Milk
        </div>

        <div className="home-nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">🥛 Smart Milk Collection System</span>

          <h1>
            Digital Milk
            <br />
            <span>Management System</span>
          </h1>

          <p>
            Manage milk collection, farmers, milk testing, rates,
            bills and payments in one simple system.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="primary-btn">
              Get Started →
            </Link>

            <a href="#features" className="secondary-btn">
              Explore Features
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="milk-card">
            <div className="milk-icon">🥛</div>
            <h3>Milk Collection</h3>
            <p>Simple • Fast • Digital</p>

            <div className="milk-stats">
              <div>
                <strong>FAT</strong>
                <span>3.5%</span>
              </div>

              <div>
                <strong>SNF</strong>
                <span>8.5%</span>
              </div>

              <div>
                <strong>Rate</strong>
                <span>₹40.80</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-heading">
          <span>FEATURES</span>
          <h2>Everything You Need</h2>
          <p>
            Manage your daily milk collection center efficiently.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👨‍🌾</div>
            <h3>Farmer Management</h3>
            <p>
              Store and manage farmer/member information easily.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🥛</div>
            <h3>Milk Collection</h3>
            <p>
              Record daily milk quantity and collection details.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧪</div>
            <h3>Milk Testing</h3>
            <p>
              Record FAT, SNF and LCT values for every collection.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Rate Calculation</h3>
            <p>
              Calculate milk rates and collection amounts automatically.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧾</div>
            <h3>Bills & Payments</h3>
            <p>
              Generate periodic bills and maintain payment records.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Reports</h3>
            <p>
              View useful collection and payment reports.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div>
          <span>ABOUT THE SYSTEM</span>
          <h2>Making Milk Collection Digital</h2>
          <p>
            Digital Milk Management System helps milk collection
            centers maintain farmer records, daily milk entries,
            milk quality information, rates, bills and payments
            digitally.
          </p>
        </div>

        <div className="about-flow">
          <div>👨‍🌾 Farmer</div>
          <span>→</span>
          <div>🥛 Collection</div>
          <span>→</span>
          <div>🧪 Testing</div>
          <span>→</span>
          <div>💰 Payment</div>
        </div>
      </section>

      <footer className="home-footer">
        <div>🥛 Digital Milk Management System</div>
        <p>© 2026 Digital Milk Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}