import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function RequireAuth({ children }) {
  const { loginState } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginState)
      navigate("/login", { replace: true, state: { from: location } });
  }, [loginState, navigate, location]);
  return children;
}
