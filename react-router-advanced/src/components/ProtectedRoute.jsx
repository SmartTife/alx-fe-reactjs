import { Navigate } from 'react-router-dom';

const isAuthenticated = true; // change to false to simulate redirect

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
