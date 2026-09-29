import { useEffect, useState } from "react";
import { dashboardApi } from "../services/api";

export default function Dashboard() {

  const role =
    localStorage.getItem("role") || "user";

  const userName =
    localStorage.getItem("userName") || "User";

  const [stats, setStats] = useState({
    users: 0,
    farmers: 0,
    milk: 0,
    todayMilk: 0,
    todayAmount: 0,
    payments: 0,
    amount: 0,
  });

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  useEffect(() => {
    loadDashboard();
  }, [role]);


  const loadDashboard = async () => {

    try {

      setLoading(true);
      setError("");

      let response;

      if (role === "admin") {

        response =
          await dashboardApi.adminStats();

      } else if (role === "farmer") {

        response =
          await dashboardApi.farmerStats();

      } else {

        response =
          await dashboardApi.userStats();

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

      console.error(
        "Dashboard error:",
        err
      );

      setError(
        "Unable to load dashboard data."
      );

    } finally {

      setLoading(false);

    }
  };


  /* =====================================
     LOADING
  ===================================== */

  if (loading) {

    return (
      <div className="container-fluid">

        <h2 className="page-title">
          Dashboard
        </h2>

        <div className="card p-4">
          Loading dashboard...
        </div>

      </div>
    );
  }


  /* =====================================
     ERROR
  ===================================== */

  if (error) {

    return (
      <div className="container-fluid">

        <h2 className="page-title">
          Dashboard
        </h2>

        <div className="alert alert-danger">
          {error}
        </div>

        <button
          className="btn btn-primary"
          onClick={loadDashboard}
        >
          Try Again
        </button>

      </div>
    );
  }


  /* =====================================
     ADMIN DASHBOARD
  ===================================== */

  if (role === "admin") {

    return (

      <div className="container-fluid">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>

            <h2 className="page-title mb-1">
              Admin Dashboard
            </h2>

            <p className="text-muted mb-0">
              Welcome, {userName}
            </p>

          </div>

        </div>


        <div className="row g-3">


          {/* USERS */}

          <div className="col-12 col-sm-6 col-lg-4">

            <div className="card h-100 p-4">

              <div className="text-muted">
                Total Users
              </div>

              <h2 className="mt-2 mb-0">
                {stats.users}
              </h2>

            </div>

          </div>


          {/* FARMERS */}

          <div className="col-12 col-sm-6 col-lg-4">

            <div className="card h-100 p-4">

              <div className="text-muted">
                Total Farmers
              </div>

              <h2 className="mt-2 mb-0">
                {stats.farmers}
              </h2>

            </div>

          </div>


          {/* TOTAL MILK */}

          <div className="col-12 col-sm-6 col-lg-4">

            <div className="card h-100 p-4">

              <div className="text-muted">
                Total Milk Collected
              </div>

              <h2 className="mt-2 mb-0">
                {stats.milk} L
              </h2>

            </div>

          </div>


          {/* TODAY MILK */}

          <div className="col-12 col-sm-6 col-lg-4">

            <div className="card h-100 p-4">

              <div className="text-muted">
                Today's Milk
              </div>

              <h2 className="mt-2 mb-0">
                {stats.todayMilk} L
              </h2>

            </div>

          </div>


          {/* TODAY COLLECTION */}

          <div className="col-12 col-sm-6 col-lg-4">

            <div className="card h-100 p-4">

              <div className="text-muted">
                Today's Collection
              </div>

              <h2 className="mt-2 mb-0">
                ₹{stats.todayAmount}
              </h2>

            </div>

          </div>


          {/* PAYMENTS */}

          <div className="col-12 col-sm-6 col-lg-4">

            <div className="card h-100 p-4">

              <div className="text-muted">
                Total Payments
              </div>

              <h2 className="mt-2 mb-0">
                ₹{stats.payments}
              </h2>

            </div>

          </div>

        </div>


        {/* ADMIN INFORMATION */}

        <div className="card p-4 mt-4">

          <h5 className="mb-3">
            System Overview
          </h5>

          <p className="text-muted mb-0">

            As an administrator, you can monitor
            users, farmers, milk collection and
            payment information across the system.

          </p>

        </div>

      </div>
    );
  }


  /* =====================================
     USER DASHBOARD
  ===================================== */

  if (role === "user") {

    return (

      <div className="container-fluid">

        <h2 className="page-title mb-1">
          User Dashboard
        </h2>

        <p className="text-muted mb-4">
          Welcome, {userName}
        </p>


        <div className="row g-3">


          {/* MY FARMERS */}

          <div className="col-12 col-sm-6 col-lg-3">

            <div className="card h-100 p-4">

              <div className="text-muted">
                My Farmers
              </div>

              <h2 className="mt-2 mb-0">
                {stats.farmers}
              </h2>

            </div>

          </div>


          {/* MY MILK */}

          <div className="col-12 col-sm-6 col-lg-3">

            <div className="card h-100 p-4">

              <div className="text-muted">
                My Total Milk
              </div>

              <h2 className="mt-2 mb-0">
                {stats.milk} L
              </h2>

            </div>

          </div>


          {/* TODAY MILK */}

          <div className="col-12 col-sm-6 col-lg-3">

            <div className="card h-100 p-4">

              <div className="text-muted">
                Today's Milk
              </div>

              <h2 className="mt-2 mb-0">
                {stats.todayMilk} L
              </h2>

            </div>

          </div>


          {/* TODAY AMOUNT */}

          <div className="col-12 col-sm-6 col-lg-3">

            <div className="card h-100 p-4">

              <div className="text-muted">
                Today's Collection
              </div>

              <h2 className="mt-2 mb-0">
                ₹{stats.todayAmount}
              </h2>

            </div>

          </div>

        </div>


        <div className="card p-4 mt-4">

          <h5>
            My Collection
          </h5>

          <p className="text-muted mb-0">

            You can manage your farmers and
            record milk collections for your
            farmers from the menu.

          </p>

        </div>

      </div>
    );
  }


  /* =====================================
     FARMER DASHBOARD
  ===================================== */

  return (

    <div className="container-fluid">

      <h2 className="page-title mb-1">
        Farmer Dashboard
      </h2>

      <p className="text-muted mb-4">
        Welcome, {userName}
      </p>


      <div className="row g-3">


        {/* TOTAL MILK */}

        <div className="col-12 col-sm-6 col-lg-4">

          <div className="card h-100 p-4">

            <div className="text-muted">
              My Total Milk
            </div>

            <h2 className="mt-2 mb-0">
              {stats.milk} L
            </h2>

          </div>

        </div>


        {/* TODAY MILK */}

        <div className="col-12 col-sm-6 col-lg-4">

          <div className="card h-100 p-4">

            <div className="text-muted">
              Today's Milk
            </div>

            <h2 className="mt-2 mb-0">
              {stats.todayMilk} L
            </h2>

          </div>

        </div>


        {/* EARNINGS */}

        <div className="col-12 col-sm-6 col-lg-4">

          <div className="card h-100 p-4">

            <div className="text-muted">
              Total Earnings
            </div>

            <h2 className="mt-2 mb-0">
              ₹{stats.amount}
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}