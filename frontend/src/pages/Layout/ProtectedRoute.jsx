import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/page1/en" replace />;
  }

  return children;
}

export default ProtectedRoute;
