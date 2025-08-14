import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { name: "Teams", path: "/teams", icon: "👥" },
  { name: "Chat", path: "/chat", icon: "💬" },
  { name: "Calendar", path: "/calendar", icon: "📅" },
  { name: "Calls", path: "/calls", icon: "📞" },
  { name: "Files", path: "/files", icon: "📁" },
  { name: "Profile", path: "/profile", icon: "👤" },
  { name: "Settings", path: "/settings", icon: "⚙️" },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/teams-logo.svg" alt="Teams Logo" />
      </div>
      <nav>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className="nav-link"
            activeclassname="active"
          >
            <span className="icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;