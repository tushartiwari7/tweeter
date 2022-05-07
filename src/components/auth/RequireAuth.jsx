import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function RequireAuth({ children }) {
  const { loginState } = useAuth();
  const location = useLocation();
  console.log(location);
  return loginState ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
