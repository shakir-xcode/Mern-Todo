import React, { useState, useContext } from "react";

const AuthContext = React.createContext();

export default function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    _id: "6524c66f880bf9d5a0da06ed",
    email: "new101@gmail.com",
    username: "new101",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [message, setMessage] = useState("please wait");
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    message,
    setMessage,
    isLoading,
    setIsLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
