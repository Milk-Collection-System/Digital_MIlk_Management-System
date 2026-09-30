import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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


const Layout = ({ children }) => (
  <div className="app-shell">

    <Sidebar />

    <div className="main-area">

      <Navbar />

      <main className="content">
        {children}
      </main>

    </div>

  </div>
);


const ProtectedLayout = ({
  children,
  allowedRoles,
}) => (
=======
const ProtectedLayout = ({ children, allowedRoles }) => (
  <ProtectedRoute allowedRoles={allowedRoles}>
    <Layout>
      {children}
    </Layout>
  </ProtectedRoute>
);


export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =====================
            ROOT
        ====================== */}

        <Route
          path="/"
          element={
            <Navigate
              to="/home"
              replace
            />
          }
        />


        {/* =====================
            PUBLIC
        ====================== */}

        {/* Main website */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Optional /home URL */}
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


        {/* =====================
            DASHBOARD
        ====================== */}

        <Route
          path="/dashboard"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />


        {/* =====================
            MILK COLLECTION
        ====================== */}

        <Route
          path="/milk-collection"
          element={
            <ProtectedLayout
              allowedRoles={[
                "admin",
                "user",
                "farmer",
              ]}
            >
              <MilkCollection />
            </ProtectedLayout>
          }
        />

        <Route
          path="/milk-collection/add"
          element={
            <ProtectedLayout
              allowedRoles={[
                "admin",
                "user",
              ]}
            >
              <AddMilkCollection />
            </ProtectedLayout>
          }
        />


        {/* =====================
            PAYMENTS
        ====================== */}

        <Route
          path="/payments"
          element={
            <ProtectedLayout>
              <Payments />
            </ProtectedLayout>
          }
        />


        {/* =====================
            REPORTS
        ====================== */}

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


        {/* =====================
            UNKNOWN URL
        ====================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/home"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}