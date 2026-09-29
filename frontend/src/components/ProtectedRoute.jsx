import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  allowedRoles,
}) {

  const token =
    localStorage.getItem("token");

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const role =
    localStorage.getItem("role");


  if (!token || !isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }


  if (
    allowedRoles &&
    !allowedRoles.includes(role)
  ) {

    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );

  }


  return children;
}