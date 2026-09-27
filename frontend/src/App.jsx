import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import Members from './pages/Members/Members';
import AddMember from './pages/Members/AddMember';
import MemberDetails from './pages/Members/MemberDetails';

import MilkCollection from './pages/MilkCollection/MilkCollection';
import AddMilkCollection from './pages/MilkCollection/AddMilkCollection';

import MilkRates from './pages/Rates/MilkRates';

import Bills from './pages/Bills/Bills';
import BillDetails from './pages/Bills/BillDetails';

import Payments from './pages/Payments/Payments';
import Reports from './pages/Reports/Reports';

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

const ProtectedLayout = ({ children }) => (
  <ProtectedRoute>
    <Layout>
      {children}
    </Layout>
  </ProtectedRoute>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />

        {/* Members */}
        <Route
          path="/members"
          element={
            <ProtectedLayout>
              <Members />
            </ProtectedLayout>
          }
        />

        <Route
          path="/members/add"
          element={
            <ProtectedLayout>
              <AddMember />
            </ProtectedLayout>
          }
        />

        <Route
          path="/members/:id"
          element={
            <ProtectedLayout>
              <MemberDetails />
            </ProtectedLayout>
          }
        />

        {/* Milk Collection */}
        <Route
          path="/milk-collection"
          element={
            <ProtectedLayout>
              <MilkCollection />
            </ProtectedLayout>
          }
        />

        <Route
          path="/milk-collection/add"
          element={
            <ProtectedLayout>
              <AddMilkCollection />
            </ProtectedLayout>
          }
        />

        {/* Milk Rates */}
        <Route
          path="/rates"
          element={
            <ProtectedLayout>
              <MilkRates />
            </ProtectedLayout>
          }
        />

        {/* Bills */}
        <Route
          path="/bills"
          element={
            <ProtectedLayout>
              <Bills />
            </ProtectedLayout>
          }
        />

        <Route
          path="/bills/:id"
          element={
            <ProtectedLayout>
              <BillDetails />
            </ProtectedLayout>
          }
        />

        {/* Payments */}
        <Route
          path="/payments"
          element={
            <ProtectedLayout>
              <Payments />
            </ProtectedLayout>
          }
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={
            <ProtectedLayout>
              <Reports />
            </ProtectedLayout>
          }
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}