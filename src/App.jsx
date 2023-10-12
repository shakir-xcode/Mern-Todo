import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignupModal from "./components/SignupModal";
import LoginModal from "./components/LoginModal";
import AddTaskModal from "./components/AddTaskModal";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Navbar />
        <Home />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
