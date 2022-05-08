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
      const responses = await Promise.all([
        axios.get(
          "https://my-json-server.typicode.com/rkapoor10/twitter-API-profiles-endpointOne/profiles"
        ),
        axios.get(
          "https://my-json-server.typicode.com/rkapoor10/twitter-API-profiles-endpointTwo/profiles"
        ),
      ]);
      const fetchedUsers = [...responses[0].data, ...responses[1].data];
      console.log({ fetchedUsers });
      setUsers(fetchedUsers);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ loginState, setLoginState, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
