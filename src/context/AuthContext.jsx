import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const defaultState = { loginState: false };

const AuthContext = createContext(defaultState);

export const AuthProvider = ({ children }) => {
  const currentState = localStorage.getItem("isLogin");
  const [loginState, setLoginState] = useState(
    currentState ? currentState : false
  );
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const {
        data: { profiles },
      } = await axios.get(
        "https://twitter-api-endpoint.herokuapp.com/api/profiles"
      );
      console.log(profiles);
      setUsers(profiles);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ loginState, setLoginState, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
