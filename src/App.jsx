import React, { useState, createContext } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupModal from "./components/SignupModal";
import LoginModal from "./components/LoginModal";
import AddTaskModal from "./components/AddTaskModal";

export const LoginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <SignupModal />
        <LoginModal />
        <AddTaskModal />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
