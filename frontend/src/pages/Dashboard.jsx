import { useEffect, useState } from "react";
import { dashboardApi } from "../services/api";
import "../styles/Dashboard.css";

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

  useEffect(() => {
    loadDashboard();
  }, [role]);

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-loading">
          <div className="loading-spinner"></div>
          <h3>Loading Dashboard</h3>
          <p>Please wait while we load your data...</p>
        </div>
      </div>
    );
  }

  /* =========================
     ERROR
  ========================= */

  if (error) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-error">
          <div className="error-icon">!</div>

          <h3>Unable to Load Dashboard</h3>

          <p>{error}</p>

          <button
            className="dashboard-btn primary"
            onClick={loadDashboard}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     ADMIN DASHBOARD
  ========================= */

  if (role === "admin") {
    return (
      <div className="dashboard-page">

        <div className="dashboard-header">
          <div>
            <span className="dashboard-badge">
              ADMIN PANEL
            </span>

            <h1>Dashboard</h1>

            <p>
              Welcome back, {userName}. Here's your milk
              management overview.
            </p>
          </div>

          <button
            className="dashboard-btn refresh"
            onClick={loadDashboard}
          >
            ↻ Refresh
          </button>
        </div>

        <div className="stats-grid">

          <div className="dashboard-stat-card">
            <div className="stat-card-top">
              <div>
                <p className="stat-title">Total Users</p>
                <h2 className="stat-value">{stats.users}</h2>
              </div>

              <div className="stat-icon-box users">
                <span className="stat-icon">👥</span>
              </div>
            </div>

            <div className="stat-subtitle">
              Registered system users
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-card-top">
              <div>
                <p className="stat-title">Total Farmers</p>
                <h2 className="stat-value">{stats.farmers}</h2>
              </div>

              <div className="stat-icon-box farmers">
                <span className="stat-icon">👨‍🌾</span>
              </div>
            </div>

            <div className="stat-subtitle">
              Active milk suppliers
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-card-top">
              <div>
                <p className="stat-title">Total Milk</p>
                <h2 className="stat-value">
                  {stats.milk} L
                </h2>
              </div>

              <div className="stat-icon-box milk">
                <span className="stat-icon">🥛</span>
              </div>
            </div>

            <div className="stat-subtitle">
              Total milk collected
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-card-top">
              <div>
                <p className="stat-title">Today's Milk</p>
                <h2 className="stat-value">
                  {stats.todayMilk} L
                </h2>
              </div>

              <div className="stat-icon-box todayMilk">
                <span className="stat-icon">📦</span>
              </div>
            </div>

            <div className="stat-subtitle">
              Milk collected today
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-card-top">
              <div>
                <p className="stat-title">
                  Today's Collection
                </p>

                <h2 className="stat-value">
                  ₹{stats.todayAmount}
                </h2>
              </div>

              <div className="stat-icon-box collection">
                <span className="stat-icon">💰</span>
              </div>
            </div>

            <div className="stat-subtitle">
              Today's collection value
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-card-top">
              <div>
                <p className="stat-title">
                  Total Payments
                </p>

                <h2 className="stat-value">
                  ₹{stats.payments}
                </h2>
              </div>

              <div className="stat-icon-box payments">
                <span className="stat-icon">💳</span>
              </div>
            </div>

            <div className="stat-subtitle">
              Total farmer payments
            </div>
          </div>

        </div>

        <div className="dashboard-content-grid">

          <div className="dashboard-panel">

            <div className="panel-header">
              <div>
                <h3>System Overview</h3>
                <p>Current system statistics</p>
              </div>

              <div className="panel-icon">
                📊
              </div>
            </div>

            <div className="overview-content">

              <div className="overview-item">
                <div className="overview-icon">👥</div>

                <div>
                  <strong>{stats.users}</strong>
                  <span>Total Users</span>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">👨‍🌾</div>

                <div>
                  <strong>{stats.farmers}</strong>
                  <span>Total Farmers</span>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">🥛</div>

                <div>
                  <strong>{stats.milk} L</strong>
                  <span>Total Milk</span>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">💰</div>

                <div>
                  <strong>₹{stats.todayAmount}</strong>
                  <span>Today's Collection</span>
                </div>
              </div>

            </div>
          </div>

          <div className="dashboard-panel">

            <div className="panel-header">
              <div>
                <h3>Quick Actions</h3>
                <p>Frequently used options</p>
              </div>

              <div className="panel-icon">
                ⚡
              </div>
            </div>

            <div className="quick-actions">

              <a
                href="/milk-collection/add"
                className="quick-action"
              >
                <span>🥛</span>

                <div>
                  <strong>Add Milk Collection</strong>
                  <small>
                    Record today's milk
                  </small>
                </div>
              </a>

              <a
                href="/milk-collection"
                className="quick-action"
              >
                <span>📋</span>

                <div>
                  <strong>View Collections</strong>
                  <small>
                    Check collection records
                  </small>
                </div>
              </a>

              <a
                href="/payments"
                className="quick-action"
              >
                <span>💳</span>

                <div>
                  <strong>Payments</strong>
                  <small>
                    Manage farmer payments
                  </small>
                </div>
              </a>

              <a
                href="/reports"
                className="quick-action"
              >
                <span>📈</span>

                <div>
                  <strong>Reports</strong>
                  <small>
                    View system reports
                  </small>
                </div>
              </a>

            </div>
          </div>

        </div>

        <div className="dashboard-info">

          <div className="info-icon">
            🥛
          </div>

          <div>
            <h3>
              Digital Milk Management System
            </h3>

            <p>
              Manage farmers, milk collection,
              payments and reports from one place.
            </p>
          </div>

        </div>

      </div>
    );
  }

  /* =========================
     USER DASHBOARD
  ========================= */

  if (role === "user") {
    return (
      <div className="dashboard-page">

        <div className="dashboard-header">
          <div>
            <span className="dashboard-badge">
              USER PANEL
            </span>

            <h1>Dashboard</h1>

            <p>
              Welcome back, {userName}.
            </p>
          </div>

          <button
            className="dashboard-btn refresh"
            onClick={loadDashboard}
          >
            ↻ Refresh
          </button>
        </div>

        <div className="stats-grid">

          <div className="dashboard-stat-card">
            <div className="stat-card-top">
              <div>
                <p className="stat-title">My Farmers</p>
                <h2 className="stat-value">
                  {stats.farmers}
                </h2>
              </div>

              <div className="stat-icon-box farmers">
                <span className="stat-icon">👨‍🌾</span>
              </div>
            </div>

            <div className="stat-subtitle">
              Farmers under management
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-card-top">
              <div>
                <p className="stat-title">Total Milk</p>
                <h2 className="stat-value">
                  {stats.milk} L
                </h2>
              </div>

              <div className="stat-icon-box milk">
                <span className="stat-icon">🥛</span>
              </div>
            </div>

            <div className="stat-subtitle">
              Total collected milk
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-card-top">
              <div>
                <p className="stat-title">Today's Milk</p>
                <h2 className="stat-value">
                  {stats.todayMilk} L
                </h2>
              </div>

              <div className="stat-icon-box todayMilk">
                <span className="stat-icon">📦</span>
              </div>
            </div>

            <div className="stat-subtitle">
              Collected today
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-card-top">
              <div>
                <p className="stat-title">
                  Today's Collection
                </p>

                <h2 className="stat-value">
                  ₹{stats.todayAmount}
                </h2>
              </div>

              <div className="stat-icon-box collection">
                <span className="stat-icon">💰</span>
              </div>
            </div>

            <div className="stat-subtitle">
              Today's collection value
            </div>
          </div>

        </div>

        <div className="dashboard-panel">

          <div className="panel-header">
            <div>
              <h3>My Collection</h3>

              <p>
                Manage your farmers and milk
                collection records.
              </p>
            </div>

            <div className="panel-icon">
              🥛
            </div>
          </div>

          <div className="user-dashboard-message">
            <span>💡</span>

            <div>
              <strong>
                Start managing your milk collection
              </strong>

              <p>
                Use the menu to add farmers,
                record milk collection and
                manage payments.
              </p>
            </div>
          </div>

        </div>

      </div>
    );
  }

  /* =========================
     FARMER DASHBOARD
  ========================= */

  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <div>
          <span className="dashboard-badge">
            FARMER PANEL
          </span>

          <h1>My Dashboard</h1>

          <p>
            Welcome back, {userName}.
          </p>
        </div>

        <button
          className="dashboard-btn refresh"
          onClick={loadDashboard}
        >
          ↻ Refresh
        </button>
      </div>

      <div className="stats-grid">

        <div className="dashboard-stat-card">
          <div className="stat-card-top">

            <div>
              <p className="stat-title">
                Total Milk
              </p>

              <h2 className="stat-value">
                {stats.milk} L
              </h2>
            </div>

            <div className="stat-icon-box milk">
              <span className="stat-icon">🥛</span>
            </div>

          </div>

          <div className="stat-subtitle">
            Total milk supplied
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-card-top">

            <div>
              <p className="stat-title">
                Today's Milk
              </p>

              <h2 className="stat-value">
                {stats.todayMilk} L
              </h2>
            </div>

            <div className="stat-icon-box todayMilk">
              <span className="stat-icon">📦</span>
            </div>

          </div>

          <div className="stat-subtitle">
            Today's milk supply
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-card-top">

            <div>
              <p className="stat-title">
                Total Earnings
              </p>

              <h2 className="stat-value">
                ₹{stats.amount}
              </h2>
            </div>

            <div className="stat-icon-box payments">
              <span className="stat-icon">💰</span>
            </div>

          </div>

          <div className="stat-subtitle">
            Total earnings
          </div>
        </div>

      </div>

    </div>
  );
}