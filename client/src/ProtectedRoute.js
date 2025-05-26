
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('authToken');

  // If no token → send back to login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // If token exists → show page
  return children;
}

export default ProtectedRoute;
