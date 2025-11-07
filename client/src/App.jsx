import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import EventManagementPanel from "./components/EventManagementPanel";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/dashboard' element={<EventManagementPanel />} />
    </Routes>
  );
}

export default App;
