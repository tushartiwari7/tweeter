import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const defaultState = { loginState: false };

const AuthContext = createContext(defaultState);

export const AuthProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const resp = await axios.get(
        "https://my-json-server.typicode.com/rkapoor10/Twitter-API-user-tweets-endpoint/users"
      );
      setUsers(resp.data);
    })();
  });

  return (
    <AuthContext.Provider value={{ loginState, setLoginState, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
