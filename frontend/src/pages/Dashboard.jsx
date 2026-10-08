import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { dashboardApi } from "../services/api";
import "../styles/Dashboard.css";


/* =========================================================
   DASHBOARD
========================================================= */

export default function Dashboard() {

  const role =
    (localStorage.getItem("role") || "farmer").toLowerCase();

  const userName =
    localStorage.getItem("userName") || "User";


  /* =========================================================
     STATS
  ========================================================= */

  const [stats, setStats] = useState({

    /* Admin */
    users: 0,
    farmers: 0,

    /* Milk */
    milk: 0,
    todayMilk: 0,

    /* Earnings */
    todayAmount: 0,
    amount: 0,

    /* Payments */
    payments: 0,

    /* Farmer statistics */
    avgFat: 0,
    todayFat: 0,

    avgRate: 0,
    todayRate: 0,

    collectionDays: 0,
  });


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  /* =========================================================
     LOAD DASHBOARD DATA
  ========================================================= */

  const loadDashboard = async () => {

    try {

      setLoading(true);
      setError("");

      let response;


      if (role === "admin") {

        response = await dashboardApi.adminStats();

      } else {

        response = await dashboardApi.farmerStats();

      }


      const data = response?.data || {};


      setStats({

        /* Admin */
        users: data.users ?? 0,
        farmers: data.farmers ?? 0,

        /* Milk */
        milk: data.milk ?? 0,
        todayMilk: data.todayMilk ?? 0,

        /* Earnings */
        todayAmount: data.todayAmount ?? 0,
        amount: data.amount ?? 0,

        /* Payments */
        payments: data.payments ?? 0,

        /* Farmer statistics */
        avgFat: data.avgFat ?? 0,
        todayFat: data.todayFat ?? 0,

        avgRate: data.avgRate ?? 0,
        todayRate: data.todayRate ?? 0,

        collectionDays: data.collectionDays ?? 0,

      });

    } catch (err) {

      console.error("Dashboard error:", err);

      setError(
        "Unable to load dashboard data."
      );

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {

    loadDashboard();

  }, [role]);


  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {

    return (

      <div className="dashboard-page">

        <div className="dashboard-loading">

          <div className="loading-spinner"></div>

          <h3>
            Loading Dashboard
          </h3>

          <p>
            Please wait while we load your milk
            management data...
          </p>

        </div>

      </div>

    );

  }


  /* =========================================================
     ERROR
  ========================================================= */

  if (error) {

    return (

      <div className="dashboard-page">

        <div className="dashboard-error">

          <div className="error-icon">
            !
          </div>

          <h3>
            Unable to Load Dashboard
          </h3>

          <p>
            {error}
          </p>

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


  /* =========================================================
     ADMIN DASHBOARD
  ========================================================= */

  if (role === "admin") {

    return (

      <div className="dashboard-page">


        {/* ================================
            ADMIN HEADER
        ================================= */}

        <div className="dashboard-header">

          <div>

            <span className="dashboard-badge">
              ADMIN PANEL
            </span>

            <h1>
              Dashboard
            </h1>

            <p>
              Welcome back, {userName}.
              Here's your milk management overview.
            </p>

          </div>


          <button
            className="dashboard-btn refresh"
            onClick={loadDashboard}
          >
            ↻ Refresh
          </button>

        </div>


        {/* ================================
            ADMIN STATISTICS
        ================================= */}

        <div className="stats-grid">


          {/* USERS */}

          <div className="dashboard-stat-card">

            <div className="stat-card-top">

              <div>

                <p className="stat-title">
                  Total Users
                </p>

                <h2 className="stat-value">
                  {stats.users}
                </h2>

              </div>

              <div className="stat-icon-box users">
                <span className="stat-icon">
                  👥
                </span>
              </div>

            </div>

            <div className="stat-subtitle">
              Registered system users
            </div>

          </div>


          {/* FARMERS */}

          <div className="dashboard-stat-card">

            <div className="stat-card-top">

              <div>

                <p className="stat-title">
                  Total Farmers
                </p>

                <h2 className="stat-value">
                  {stats.farmers}
                </h2>

              </div>

              <div className="stat-icon-box farmers">
                <span className="stat-icon">
                  👨‍🌾
                </span>
              </div>

            </div>

            <div className="stat-subtitle">
              Active milk suppliers
            </div>

          </div>


          {/* TOTAL MILK */}

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
                <span className="stat-icon">
                  🥛
                </span>
              </div>

            </div>

            <div className="stat-subtitle">
              Total milk collected
            </div>

          </div>


          {/* TODAY MILK */}

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
                <span className="stat-icon">
                  📦
                </span>
              </div>

            </div>

            <div className="stat-subtitle">
              Milk collected today
            </div>

          </div>


          {/* TODAY COLLECTION */}

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
                <span className="stat-icon">
                  💰
                </span>
              </div>

            </div>

            <div className="stat-subtitle">
              Today's collection value
            </div>

          </div>


          {/* PAYMENTS */}

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
                <span className="stat-icon">
                  💳
                </span>
              </div>

            </div>

            <div className="stat-subtitle">
              Total farmer payments
            </div>

          </div>

        </div>


        {/* ================================
            ADMIN LOWER SECTION
        ================================= */}

        <div className="dashboard-content-grid">


          {/* SYSTEM OVERVIEW */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>

                <h3>
                  System Overview
                </h3>

                <p>
                  Current milk management statistics
                </p>

              </div>

              <div className="panel-icon">
                📊
              </div>

            </div>


            <div className="overview-content">


              <div className="overview-item">

                <div className="overview-icon">
                  👥
                </div>

                <div>

                  <strong>
                    {stats.users}
                  </strong>

                  <span>
                    Total Users
                  </span>

                </div>

              </div>


              <div className="overview-item">

                <div className="overview-icon">
                  👨‍🌾
                </div>

                <div>

                  <strong>
                    {stats.farmers}
                  </strong>

                  <span>
                    Total Farmers
                  </span>

                </div>

              </div>


              <div className="overview-item">

                <div className="overview-icon">
                  🥛
                </div>

                <div>

                  <strong>
                    {stats.milk} L
                  </strong>

                  <span>
                    Total Milk
                  </span>

                </div>

              </div>


              <div className="overview-item">

                <div className="overview-icon">
                  💰
                </div>

                <div>

                  <strong>
                    ₹{stats.todayAmount}
                  </strong>

                  <span>
                    Today's Collection
                  </span>

                </div>

              </div>


            </div>

          </div>


          {/* QUICK ACTIONS */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>

                <h3>
                  Quick Actions
                </h3>

                <p>
                  Frequently used options
                </p>

              </div>

              <div className="panel-icon">
                ⚡
              </div>

            </div>


            <div className="quick-actions">


              <Link
                to="/milk-collection/add"
                className="quick-action"
              >

                <span>
                  🥛
                </span>

                <div>

                  <strong>
                    Add Milk Collection
                  </strong>

                  <small>
                    Record today's milk
                  </small>

                </div>

              </Link>


              <Link
                to="/milk-collection"
                className="quick-action"
              >

                <span>
                  📋
                </span>

                <div>

                  <strong>
                    View Collections
                  </strong>

                  <small>
                    Check collection records
                  </small>

                </div>

              </Link>


              <Link
                to="/payments"
                className="quick-action"
              >

                <span>
                  💳
                </span>

                <div>

                  <strong>
                    Payments
                  </strong>

                  <small>
                    Manage farmer payments
                  </small>

                </div>

              </Link>


              <Link
                to="/reports"
                className="quick-action"
              >

                <span>
                  📈
                </span>

                <div>

                  <strong>
                    Reports
                  </strong>

                  <small>
                    View system reports
                  </small>

                </div>

              </Link>


            </div>

          </div>

        </div>


        {/* ADMIN INFO */}

  <div className="dashboard-info">

<div className="panel-icon">
  <img
    src="/milk-logo.png"
    alt="Milk"
  />
</div>
  <div>
    <h3>
      Digital Milk Management System
    </h3>

    <p>
      Keep track of your milk collection,
      FAT, milk rate, earnings and payment
      records digitally.
    </p>
  </div>

</div>


      </div>

    );

  }


  /* =========================================================
     FARMER DASHBOARD
  ========================================================= */

  return (

    <div className="dashboard-page">


      {/* ================================
          FARMER HEADER
      ================================= */}

      <div className="dashboard-header">

        <div>

          <span className="dashboard-badge">
            FARMER PANEL
          </span>

          <h1>
            My Dashboard
          </h1>

          <p>
            Welcome back, {userName}.
            Here's your milk collection summary.
          </p>

        </div>


        <button
          className="dashboard-btn refresh"
          onClick={loadDashboard}
        >
          ↻ Refresh
        </button>

      </div>


      {/* ================================
          FARMER STATISTICS
      ================================= */}

      <div className="stats-grid">


        {/* TOTAL MILK */}

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

              <span className="stat-icon">
                🥛
              </span>

            </div>

          </div>

          <div className="stat-subtitle">
            Total milk supplied
          </div>

        </div>


        {/* TODAY MILK */}

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

              <span className="stat-icon">
                📦
              </span>

            </div>

          </div>

          <div className="stat-subtitle">
            Today's milk supply
          </div>

        </div>


        {/* TOTAL EARNINGS */}

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

              <span className="stat-icon">
                💰
              </span>

            </div>

          </div>

          <div className="stat-subtitle">
            Total earnings from milk supply
          </div>

        </div>


        {/* AVERAGE FAT */}

        <div className="dashboard-stat-card">

          <div className="stat-card-top">

            <div>

              <p className="stat-title">
                Average FAT
              </p>

              <h2 className="stat-value">
                {stats.avgFat}%
              </h2>

            </div>

            <div className="stat-icon-box farmers">

              <span className="stat-icon">
                🧪
              </span>

            </div>

          </div>

          <div className="stat-subtitle">
            Average milk FAT
          </div>

        </div>


        {/* AVERAGE RATE */}

        <div className="dashboard-stat-card">

          <div className="stat-card-top">

            <div>

              <p className="stat-title">
                Average Rate
              </p>

              <h2 className="stat-value">
                ₹{stats.avgRate}/L
              </h2>

            </div>

            <div className="stat-icon-box collection">

              <span className="stat-icon">
                💵
              </span>

            </div>

          </div>

          <div className="stat-subtitle">
            Average milk rate
          </div>

        </div>


        {/* COLLECTION DAYS */}

        <div className="dashboard-stat-card">

          <div className="stat-card-top">

            <div>

              <p className="stat-title">
                Collection Days
              </p>

              <h2 className="stat-value">
                {stats.collectionDays}
              </h2>

            </div>

            <div className="stat-icon-box users">

              <span className="stat-icon">
                📅
              </span>

            </div>

          </div>

          <div className="stat-subtitle">
            Days supplied milk
          </div>

        </div>


      </div>


      {/* ================================
          FARMER LOWER SECTION
      ================================= */}

      <div className="dashboard-content-grid">


        {/* MILK COLLECTION */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <div>

              <h3>
                Milk Collection
              </h3>

              <p>
                Manage your daily milk supply records.
              </p>

            </div>

            <div className="panel-icon">
              🥛
            </div>

          </div>


          <div className="quick-actions">


            <Link
              to="/milk-collection"
              className="quick-action"
            >

              <span>
                📋
              </span>

              <div>

                <strong>
                  My Milk Records
                </strong>

                <small>
                  View your collection history
                </small>

              </div>

            </Link>


            <Link
              to="/payments"
              className="quick-action"
            >

              <span>
                💳
              </span>

              <div>

                <strong>
                  My Payments
                </strong>

                <small>
                  View your payment details
                </small>

              </div>

            </Link>


          </div>

        </div>


        {/* TODAY'S SUMMARY */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <div>

              <h3>
                Today's Summary
              </h3>

              <p>
                Your current collection information.
              </p>

            </div>

            <div className="panel-icon">
              📊
            </div>

          </div>


          <div className="overview-content">


            {/* TODAY MILK */}

            <div className="overview-item">

              <div className="overview-icon">
                🥛
              </div>

              <div>

                <strong>
                  {stats.todayMilk} L
                </strong>

                <span>
                  Today's Milk
                </span>

              </div>

            </div>


            {/* TODAY FAT */}

            <div className="overview-item">

              <div className="overview-icon">
                🧪
              </div>

              <div>

                <strong>
                  {stats.todayFat}%
                </strong>

                <span>
                  Today's FAT
                </span>

              </div>

            </div>


            {/* TODAY RATE */}

            <div className="overview-item">

              <div className="overview-icon">
                💵
              </div>

              <div>

                <strong>
                  ₹{stats.todayRate}/L
                </strong>

                <span>
                  Today's Rate
                </span>

              </div>

            </div>


            {/* TODAY EARNINGS */}

            <div className="overview-item">

              <div className="overview-icon">
                💰
              </div>

              <div>

                <strong>
                  ₹{stats.todayAmount}
                </strong>

                <span>
                  Today's Earnings
                </span>

              </div>

            </div>


          </div>

        </div>


      </div>


      {/* ================================
          FARMER INFO
      ================================= */}

      <div className="dashboard-info">

        <div className="info-icon">
          🥛
        </div>

        <div>

          <h3>
            Digital Milk Management System
          </h3>

          <p>
            Keep track of your milk collection,
            FAT, milk rate, earnings and payment
            records digitally.
          </p>

        </div>

      </div>


    </div>

  );

}