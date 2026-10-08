import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Dashboard from "./pages/Dashboard";

import MilkCollection from "./pages/MilkCollection/MilkCollection";
import AddMilkCollection from "./pages/MilkCollection/AddMilkCollection";

import Payments from "./pages/Payments/Payments";
import Reports from "./pages/Reports/Reports";


/* =========================================
   MAIN APPLICATION LAYOUT
========================================= */

function Layout({ children }) {

  const [collapsed, setCollapsed] = useState(false);

  const role =
    (localStorage.getItem("role") || "farmer")
      .toLowerCase();

  const isFarmer = role === "farmer";

  return (
    <div
      className={`app-shell ${
        !isFarmer && collapsed
          ? "sidebar-collapsed"
          : ""
      } ${
        isFarmer
          ? "farmer-layout"
          : ""
      }`}
    >

      {/* =================================
          SIDEBAR
          Only Admin gets sidebar
      ================================== */}

      {!isFarmer && (
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      )}


      {/* =================================
          MAIN AREA
      ================================== */}

      <div className="main-area">

        <Navbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          hideSidebar={isFarmer}
        />

        <main className="content">
          {children}
        </main>

      </div>

    </div>
  );
}


/* =========================================
   PROTECTED LAYOUT
========================================= */

function ProtectedLayout({
  children,
  allowedRoles,
}) {

  return (
    <ProtectedRoute
      allowedRoles={allowedRoles}
    >
      <Layout>
        {children}
      </Layout>
    </ProtectedRoute>
  );
}


/* =========================================
   APP
========================================= */

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ================================
            PUBLIC PAGES
        ================================= */}

        <Route
          path="/"
          element={
            <Navigate
              to="/home"
              replace
            />
          }
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />


        {/* ================================
            DASHBOARD
            ADMIN + FARMER
        ================================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedLayout
              allowedRoles={[
                "admin",
                "farmer",
              ]}
            >
              <Dashboard />
            </ProtectedLayout>
          }
        />


        {/* ================================
            MILK COLLECTION
            ADMIN + FARMER
        ================================= */}

        <Route
          path="/milk-collection"
          element={
            <ProtectedLayout
              allowedRoles={[
                "admin",
                "farmer",
              ]}
            >
              <MilkCollection />
            </ProtectedLayout>
          }
        />


        {/* ================================
            ADD MILK COLLECTION
            ADMIN ONLY
        ================================= */}

        <Route
          path="/milk-collection/add"
          element={
            <ProtectedLayout
              allowedRoles={[
                "admin",
              ]}
            >
              <AddMilkCollection />
            </ProtectedLayout>
          }
        />


        {/* ================================
            PAYMENTS
            ADMIN + FARMER
        ================================= */}

        <Route
          path="/payments"
          element={
            <ProtectedLayout
              allowedRoles={[
                "admin",
                "farmer",
              ]}
            >
              <Payments />
            </ProtectedLayout>
          }
        />


        {/* ================================
            REPORTS
            ADMIN ONLY
        ================================= */}

        <Route
          path="/reports"
          element={
            <ProtectedLayout
              allowedRoles={[
                "admin",
              ]}
            >
              <Reports />
            </ProtectedLayout>
          }
        />


        {/* ================================
            UNKNOWN URL
        ================================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}