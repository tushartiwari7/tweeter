import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function RequireAuth({ children }) {
  const { loginState } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  console.log("location");
  return loginState
    ? children
    : navigate("/login", { replace: true, state: { from: location } });
}
