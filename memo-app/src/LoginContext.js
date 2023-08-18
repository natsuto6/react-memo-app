import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
