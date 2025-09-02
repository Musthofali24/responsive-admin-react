import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ href, icon: Icon, text, badge, isSidebarOpen, size }) => {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          `flex items-center p-2 rounded-lg gap-2 transition-colors duration-200
          ${!isSidebarOpen ? "justify-center" : ""}
          ${
            isActive
              ? "bg-blue-600 text-white dark:bg-blue-500" // 🔹 aktif
              : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          }`
        }
      >
        <Icon size={size} />
        <span className={`me-3 ${isSidebarOpen ? "flex-1" : "hidden"}`}>
          {text}
        </span>
        {badge && (
          <span
            className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full ${badge.color} ${badge.darkColor}`}
          >
            {badge.text}
          </span>
        )}
      </NavLink>
    </li>
  );
};

export default LinkItem;
