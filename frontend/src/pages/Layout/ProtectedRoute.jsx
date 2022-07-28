import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/en/page1" replace />;
  }

  return children;
}

export default ProtectedRoute;
