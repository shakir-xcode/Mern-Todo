import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignupModal from "./components/SignupModal";
import LoginModal from "./components/LoginModal";
import AddTaskModal from "./components/AddTaskModal";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import UpdateTaskModal from "./components/UpdateTaskModal";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <SignupModal />
        <LoginModal />
        <AddTaskModal />
        <UpdateTaskModal />
        <Navbar />
        <Home />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
