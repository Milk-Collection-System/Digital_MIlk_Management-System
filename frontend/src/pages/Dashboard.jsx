import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dashboardApi } from "../services/api";
import "../styles/Dashboard.css";

function Icon({ type }) {
  const icons = {
    users: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),

    farmer: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-5h6v5" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
      </svg>
    ),

    milk: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 2h8" />
        <path d="M9 2v5l-4 7a6 6 0 0 0 5.2 9h3.6A6 6 0 0 0 19 14l-4-7V2" />
        <path d="M7 13h10" />
      </svg>
    ),

    money: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M6 9h.01M18 15h.01" />
      </svg>
    ),

    payment: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        <path d="M16 13h.01" />
        <path d="M2 10h20" />
      </svg>
    ),

    plus: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),

    arrow: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),

    refresh: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 5v4h4" />
        <path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 19v-4h-4" />
      </svg>
    ),
  };

  return icons[type] || null;
}

function StatCard({ icon, title, value, subtitle, accent }) {
  return (
    <div className={`dm-stat-card ${accent || ""}`}>
      <div className="dm-stat-top">
        <div className="dm-stat-icon">
          <Icon type={icon} />
        </div>

        <span className="dm-stat-label">{title}</span>
      </div>

      <div className="dm-stat-value">{value}</div>

      {subtitle && (
        <div className="dm-stat-subtitle">
          {subtitle}
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const role = localStorage.getItem("role") || "user";
  const userName = localStorage.getItem("userName") || "User";

  const [stats, setStats] = useState({
    users: 0,
    farmers: 0,
    milk: 0,
    todayMilk: 0,
    todayAmount: 0,
    payments: 0,
    amount: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, [role]);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      let response;

      if (role === "admin") {
        response = await dashboardApi.adminStats();
      } else if (role === "farmer") {
        response = await dashboardApi.farmerStats();
      } else {
        response = await dashboardApi.userStats();
      }

      setStats({
        users: response.data?.users ?? 0,
        farmers: response.data?.farmers ?? 0,
        milk: response.data?.milk ?? 0,
        todayMilk: response.data?.todayMilk ?? 0,
        todayAmount: response.data?.todayAmount ?? 0,
        payments: response.data?.payments ?? 0,
        amount: response.data?.amount ?? 0,
      });
    } catch (err) {
      console.error("Dashboard error:", err);
      setError("Unable to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  const roleTitle =
    role === "admin"
      ? "Administrator"
      : role === "farmer"
        ? "Farmer"
        : "Collection Manager";

  if (loading) {
    return (
      <div className="dm-dashboard">
        <div className="dm-loading">
          <div className="dm-spinner"></div>
          <h3>Loading dashboard</h3>
          <p>Please wait while we load your milk management data.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dm-dashboard">
        <div className="dm-error">
          <div className="dm-error-icon">!</div>

          <h3>Something went wrong</h3>

          <p>{error}</p>

          <button className="dm-primary-btn" onClick={loadDashboard}>
            <Icon type="refresh" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dm-dashboard">

      {/* HEADER */}
      <div className="dm-dashboard-header">
        <div>
          <div className="dm-breadcrumb">
            Dashboard
          </div>

          <h1>
            Good to see you, {userName.split(" ")[0]} 👋
          </h1>

          <p>
            Here's what's happening with your milk collection today.
          </p>
        </div>

        <div className="dm-header-right">
          <span className="dm-role-badge">
            {roleTitle}
          </span>

          <button
            className="dm-refresh-btn"
            onClick={loadDashboard}
            title="Refresh dashboard"
          >
            <Icon type="refresh" />
          </button>
        </div>
      </div>

      {/* ADMIN */}
      {role === "admin" && (
        <>
          <div className="dm-section-title">
            <div>
              <h2>System Overview</h2>
              <p>Monitor your complete milk management operation.</p>
            </div>
          </div>

          <div className="dm-stats-grid">

            <StatCard
              icon="users"
              title="Total Users"
              value={stats.users}
              subtitle="Registered users"
              accent="blue"
            />

            <StatCard
              icon="farmer"
              title="Total Farmers"
              value={stats.farmers}
              subtitle="Active farmers"
              accent="green"
            />

            <StatCard
              icon="milk"
              title="Total Milk"
              value={`${stats.milk} L`}
              subtitle="All-time collection"
              accent="purple"
            />

            <StatCard
              icon="milk"
              title="Today's Milk"
              value={`${stats.todayMilk} L`}
              subtitle="Collected today"
              accent="orange"
            />

            <StatCard
              icon="money"
              title="Today's Collection"
              value={`₹${Number(stats.todayAmount).toLocaleString("en-IN")}`}
              subtitle="Today's value"
              accent="cyan"
            />

            <StatCard
              icon="payment"
              title="Total Payments"
              value={`₹${Number(stats.payments).toLocaleString("en-IN")}`}
              subtitle="Payment records"
              accent="pink"
            />

          </div>

          <QuickActions />
        </>
      )}

      {/* USER */}
      {role === "user" && (
        <>
          <div className="dm-section-title">
            <div>
              <h2>My Collection Overview</h2>
              <p>Track your farmers and daily milk collection.</p>
            </div>
          </div>

          <div className="dm-stats-grid">

            <StatCard
              icon="farmer"
              title="My Farmers"
              value={stats.farmers}
              subtitle="Farmers under management"
              accent="green"
            />

            <StatCard
              icon="milk"
              title="Total Milk"
              value={`${stats.milk} L`}
              subtitle="All-time collection"
              accent="purple"
            />

            <StatCard
              icon="milk"
              title="Today's Milk"
              value={`${stats.todayMilk} L`}
              subtitle="Collected today"
              accent="orange"
            />

            <StatCard
              icon="money"
              title="Today's Collection"
              value={`₹${Number(stats.todayAmount).toLocaleString("en-IN")}`}
              subtitle="Today's value"
              accent="cyan"
            />

          </div>

          <QuickActions />
        </>
      )}

      {/* FARMER */}
      {role === "farmer" && (
        <>
          <div className="dm-section-title">
            <div>
              <h2>My Milk Overview</h2>
              <p>Keep track of your milk deliveries and earnings.</p>
            </div>
          </div>

          <div className="dm-stats-grid">

            <StatCard
              icon="milk"
              title="Total Milk"
              value={`${stats.milk} L`}
              subtitle="All-time collection"
              accent="purple"
            />

            <StatCard
              icon="milk"
              title="Today's Milk"
              value={`${stats.todayMilk} L`}
              subtitle="Collected today"
              accent="orange"
            />

            <StatCard
              icon="money"
              title="Total Earnings"
              value={`₹${Number(stats.amount).toLocaleString("en-IN")}`}
              subtitle="Total milk earnings"
              accent="green"
            />

          </div>

          <div className="dm-farmer-highlight">
            <div className="dm-highlight-icon">
              <Icon type="milk" />
            </div>

            <div>
              <h3>Your milk collection</h3>
              <p>
                Your recorded milk deliveries and earnings will appear here.
              </p>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

function QuickActions() {
  return (
    <div className="dm-quick-section">

      <div className="dm-section-title">
        <div>
          <h2>Quick Actions</h2>
          <p>Common tasks you can access quickly.</p>
        </div>
      </div>

      <div className="dm-actions">

        <Link to="/milk-collection/add" className="dm-action-card">
          <div className="dm-action-icon">
            <Icon type="plus" />
          </div>

          <div>
            <strong>Record Milk</strong>
            <span>Add a new milk collection</span>
          </div>

          <Icon type="arrow" />
        </Link>

        <Link to="/milk-collection" className="dm-action-card">
          <div className="dm-action-icon">
            <Icon type="milk" />
          </div>

          <div>
            <strong>Milk Collections</strong>
            <span>View collection records</span>
          </div>

          <Icon type="arrow" />
        </Link>

        <Link to="/payments" className="dm-action-card">
          <div className="dm-action-icon">
            <Icon type="payment" />
          </div>

          <div>
            <strong>Payments</strong>
            <span>View payment information</span>
          </div>

          <Icon type="arrow" />
        </Link>

      </div>
    </div>
  );
}