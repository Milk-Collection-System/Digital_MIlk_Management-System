import { Link } from "react-router-dom";

import { useTheme } from "../ThemeContext";

import "../styles/Home.css";



const features = [

  {

    number: "01",

    title: "Member Management",

    text: "Maintain complete farmer and member profiles with contact details and collection history.",

    icon: "people",

  },

  {

    number: "02",

    title: "Milk Collection",

    text: "Record daily milk quantity, date, time and milk type with accurate digital entries.",

    icon: "milk",

  },

  {

    number: "03",

    title: "Quality Testing",

    text: "Record FAT, SNF and LCT values to maintain reliable milk quality information.",

    icon: "test",

  },

  {

    number: "04",

    title: "Rate Management",

    text: "Manage milk rates and calculate collection amounts accurately according to quality.",

    icon: "rate",

  },

  {

    number: "05",

    title: "Bills & Payments",

    text: "Keep payment records organized and generate clear billing information for members.",

    icon: "bill",

  },

  {

    number: "06",

    title: "Reports & Insights",

    text: "Understand collection, quality, member and payment information through useful reports.",

    icon: "report",

  },

];



function Icon({ type }) {

  const common = {

    width: 24,

    height: 24,

    viewBox: "0 0 24 24",

    fill: "none",

    stroke: "currentColor",

    strokeWidth: 1.8,

    strokeLinecap: "round",

    strokeLinejoin: "round",

  };



  if (type === "people") {

    return (

      <svg {...common}>

        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />

        <circle cx="9" cy="7" r="4" />

        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />

        <path d="M16 3.13a4 4 0 0 1 0 7.75" />

      </svg>

    );

  }



  if (type === "milk") {

    return (

      <svg {...common}>

        <path d="M9 3h6" />

        <path d="M10 3v3l-2 3v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9l-2-3V3" />

        <path d="M8 9h8" />

        <path d="M9 15c1.2-1.3 2.5-1.3 3.5 0 1-1.3 2.3-1.3 3.5 0" />

      </svg>

    );

  }



  if (type === "test") {

    return (

      <svg {...common}>

        <path d="M9 3h6" />

        <path d="M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3" />

        <path d="M7 16h10" />

      </svg>

    );

  }



  if (type === "rate") {

    return (

      <svg {...common}>

        <circle cx="12" cy="12" r="9" />

        <path d="M15 8.5c-.7-.7-1.7-1-3-1-1.7 0-3 .8-3 2s1.1 1.8 3 2c1.9.2 3 .8 3 2s-1.3 2-3 2c-1.3 0-2.3-.3-3-1" />

        <path d="M12 6v12" />

      </svg>

    );

  }



  if (type === "bill") {

    return (

      <svg {...common}>

        <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />

        <path d="M9 8h6" />

        <path d="M9 12h6" />

        <path d="M9 16h3" />

      </svg>

    );

  }



  return (

    <svg {...common}>

      <path d="M4 19V5" />

      <path d="M4 19h17" />

      <path d="M8 16v-4" />

      <path d="M12 16V8" />

      <path d="M16 16V5" />

      <path d="M20 16v-7" />

    </svg>

  );

}



export default function Home() {

  const { darkMode, toggleTheme } = useTheme();



  // ================= HERO DASHBOARD VALUES =================

  const totalMilkCollection = "1,248";

  const averageFat = "3.5";

  const currentRate = "40.80";



  return (

    <div className="home-page">



      {/* ================= NAVBAR ================= */}

      <nav className="home-navbar">

        <Link to="/" className="brand">



          <img

            src="/milk-logo.png"

            alt="Digital Milk Management System"

            className="brand-logo"

          />



          <div className="brand-text">

            <strong>Digital Milk</strong>

            <span>Management System</span>

          </div>

        </Link>



        <div className="home-nav-links">



          <a href="#home" className="nav-link active">

            Home

          </a>



          <a href="#features" className="nav-link">

            Features

          </a>



          <a href="#workflow" className="nav-link">

            How It Works

          </a>



          <a href="#about" className="nav-link">

            About

          </a>



          <button

            type="button"

            className="theme-toggle"

            onClick={toggleTheme}

            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}

            aria-label="Toggle theme"

          >

            <span>{darkMode ? "☀" : "☾"}</span>

          </button>



          <Link to="/login" className="nav-login">

            Login

          </Link>



        </div>

      </nav>





      {/* ================= HERO ================= */}

      <main>



        <section id="home" className="hero-section">



          <div className="hero-content">



            <div className="hero-label">

              <span className="label-dot"></span>

              DIGITAL DAIRY MANAGEMENT

            </div>



            <h1>

              Smarter Milk

              <br />

              <span>Collection.</span>

              <br />

              Better Management.

            </h1>



            <p className="hero-description">

              A simple digital platform for managing farmers,

              milk collection, quality testing, rates, bills

              and payments — all in one place.

            </p>



            <div className="hero-actions">



              <Link to="/login" className="hero-primary">

                Get Started

                <span>→</span>

              </Link>



              <a href="#features" className="hero-secondary">

                Explore Features

              </a>



            </div>



            <div className="hero-trust">



              <div>

                <span className="check">✓</span>

                Digital Records

              </div>



              <div>

                <span className="check">✓</span>

                Accurate Collection

              </div>



              <div>

                <span className="check">✓</span>

                Easy Management

              </div>



            </div>



          </div>





          {/* ================= HERO VISUAL ================= */}

          <div className="hero-visual">
            <div className="hero-logo-wrap">
              <img
                src="/milk-logo.png"
                alt="Digital Milk Management System Logo"
                className="hero-logo"
              />
            </div>
          </div>



        </section>





        {/* ================= QUICK STATS ================= */}

        <section className="quick-stats">



          <div className="quick-stat">



            <div className="stat-icon green">

              <Icon type="people" />

            </div>



            <div>

              <strong>86+</strong>

              <span>Registered Members</span>

            </div>



          </div>





          <div className="quick-stat">



            <div className="stat-icon blue">

              <Icon type="milk" />

            </div>



            <div>

              <strong>1,248 L</strong>

              <span>Today's Collection</span>

            </div>



          </div>





          <div className="quick-stat">



            <div className="stat-icon orange">

              <Icon type="test" />

            </div>



            <div>

              <strong>3.5%</strong>

              <span>Average FAT</span>

            </div>



          </div>





          <div className="quick-stat">



            <div className="stat-icon purple">

              <Icon type="rate" />

            </div>



            <div>

              <strong>₹40.80</strong>

              <span>Current Rate / L</span>

            </div>



          </div>



        </section>





        {/* ================= FEATURES ================= */}

        <section id="features" className="features-section">



          <div className="section-intro">



            <div className="section-label">

              WHAT THE SYSTEM OFFERS

            </div>



            <h2>

              Everything your milk center

              <span> needs.</span>

            </h2>



            <p>

              From the first milk entry of the day to payment

              records and reports, keep your daily operations

              organized digitally.

            </p>



          </div>





          <div className="features-grid">



            {features.map((feature) => (

              <article className="feature-card" key={feature.number}>



                <div className="feature-top">



                  <div className="feature-icon">

                    <Icon type={feature.icon} />

                  </div>



                  <span className="feature-number">

                    {feature.number}

                  </span>



                </div>



                <h3>{feature.title}</h3>



                <p>{feature.text}</p>



                <div className="feature-line"></div>



              </article>

            ))}



          </div>



        </section>





        {/* ================= WORKFLOW ================= */}

        <section id="workflow" className="workflow-section">



          <div className="workflow-heading">



            <div className="section-label">

              SIMPLE DAILY WORKFLOW

            </div>



            <h2>

              From milk collection

              <br />

              <span>to payment.</span>

            </h2>



            <p>

              A clear digital process helps reduce manual

              records and keeps important information together.

            </p>



          </div>





          <div className="workflow">



            <div className="workflow-item">



              <div className="workflow-number">01</div>



              <div className="workflow-icon">

                <Icon type="people" />

              </div>



              <h3>Member</h3>

              <p>Register farmer details</p>



            </div>





            <div className="workflow-connector"></div>





            <div className="workflow-item">



              <div className="workflow-number">02</div>



              <div className="workflow-icon">

                <Icon type="milk" />

              </div>



              <h3>Collection</h3>

              <p>Record milk quantity</p>



            </div>





            <div className="workflow-connector"></div>





            <div className="workflow-item">



              <div className="workflow-number">03</div>



              <div className="workflow-icon">

                <Icon type="test" />

              </div>



              <h3>Quality</h3>

              <p>Record FAT & SNF</p>



            </div>





            <div className="workflow-connector"></div>





            <div className="workflow-item">



              <div className="workflow-number">04</div>



              <div className="workflow-icon">

                <Icon type="rate" />

              </div>



              <h3>Rate</h3>

              <p>Calculate amount</p>



            </div>





            <div className="workflow-connector"></div>





            <div className="workflow-item">



              <div className="workflow-number">05</div>



              <div className="workflow-icon">

                <Icon type="bill" />

              </div>



              <h3>Payment</h3>

              <p>Maintain payment records</p>



            </div>



          </div>



        </section>





        {/* ================= ABOUT ================= */}

        <section id="about" className="about-section">



          <div className="about-panel">



            <div className="about-logo">

              <img

                src="/milk-logo.png"

                alt="Digital Milk Management System"

              />

            </div>



            <div className="about-content">



              <div className="section-label">

                ABOUT DIGITAL MILK

              </div>



              <h2>

                Bringing traditional milk

                <span> management into the digital age.</span>

              </h2>



              <p>

                Milk collection centers handle important information

                every day — farmer details, milk quantity, quality,

                rates and payments. Managing these records manually

                can become difficult as the number of members grows.

              </p>



              <p>

                Digital Milk Management System provides a centralized

                platform to organize these activities and make daily

                milk management easier, faster and more reliable.

              </p>



              <div className="about-points">



                <div>

                  <span>✓</span>

                  Centralized member records

                </div>



                <div>

                  <span>✓</span>

                  Accurate milk entries

                </div>



                <div>

                  <span>✓</span>

                  Quality information

                </div>



                <div>

                  <span>✓</span>

                  Organized payments

                </div>



              </div>



            </div>



          </div>



        </section>





        {/* ================= CTA ================= */}

        <section className="cta-section">



          <div className="cta-content">



            <div className="cta-logo">

              <img

                src="/milk-logo.png"

                alt="Digital Milk Management System"

              />

            </div>



            <div>



              <div className="section-label">

                READY TO GET STARTED?

              </div>



              <h2>

                Make your milk collection

                <span> smarter.</span>

              </h2>



              <p>

                Start managing your dairy operations with

                a simple and organized digital system.

              </p>



              <Link to="/login" className="cta-button">

                Open Management System

                <span>→</span>

              </Link>



            </div>



          </div>



        </section>



      </main>





      {/* ================= FOOTER ================= */}

      <footer className="home-footer">



        <div className="footer-top">



          <div className="footer-brand">



            <Link to="/" className="brand">



              <img

                src="/milk-logo.png"

                alt="Digital Milk Management System"

                className="brand-logo"

              />



              <div className="brand-text">

                <strong>Digital Milk</strong>

                <span>Management System</span>

              </div>



            </Link>



            <p>

              Smart digital management for modern

              milk collection centers.

            </p>



          </div>





          <div className="footer-column">



            <h4>Navigate</h4>



            <a href="#home">Home</a>

            <a href="#features">Features</a>

            <a href="#workflow">How It Works</a>

            <a href="#about">About</a>



          </div>





          <div className="footer-column">



            <h4>System</h4>



            <a href="#features">Members</a>

            <a href="#features">Collection</a>

            <a href="#features">Quality Testing</a>

            <Link to="/login">Login</Link>



          </div>



        </div>





        <div className="footer-bottom">



          <span>

            © 2026 Digital Milk Management System

          </span>



          <span>

            Smart Dairy • Better Tomorrow

          </span>



        </div>



      </footer>



    </div>

  );

}
