import { createContext, useContext, useState } from "react";

const defaultState = { loginState: false };

const AuthContext = createContext(defaultState);

export const AuthProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(false);
  return (
    <AuthContext.Provider value={{ loginState, setLoginState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
