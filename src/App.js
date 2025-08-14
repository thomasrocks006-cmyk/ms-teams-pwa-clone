import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Teams from "./pages/Teams";
import Chat from "./pages/Chat";
import Calendar from "./pages/Calendar";
import Calls from "./pages/Calls";
import Files from "./pages/Files";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/teams" />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/calls" element={<Calls />} />
              <Route path="/files" element={<Files />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;