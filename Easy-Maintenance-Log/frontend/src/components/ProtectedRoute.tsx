import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const token = localStorage.getItem('access_token');

  // If no token is found redirect to the login page.
  // The 'replace' prop replaces the current history entry so the user can't click back to bypass it.
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If the token exists, render the child routes requested
  return <Outlet />;
};