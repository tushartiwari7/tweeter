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
  const [userDetails, setUserDetails] = useState({});
  const getLoginDetails = async () => {
    try {
      const { data } = await axios.get(
        "https://my-json-server.typicode.com/rkapoor10/Twitter-API-user-tweets-endpoint/users"
      );
      const loginDetails = data[0];
      const { email, password } = loginDetails;
      setUserDetails({ email, password });
      return data[0];
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    (async () => {
      const {
        data: { profiles },
      } = await axios.get(
        "https://twitter-api-endpoint.herokuapp.com/api/profiles"
      );
      setUsers(profiles);
      getLoginDetails();
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{ loginState, setLoginState, users, userDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
