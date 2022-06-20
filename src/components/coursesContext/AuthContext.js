import React, { createContext, useState } from "react";

export const authContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userLoggedIn = !!token;
  const loginHandler = () => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <authContext.Provider value={contextValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
