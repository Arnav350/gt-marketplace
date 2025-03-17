import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/items", label: "Items" },
    { path: "/services", label: "Services" },
    { path: "/users", label: "Users" },
    { path: "/messages", label: "Messages" },
  ];

  return (
    <nav className="bg-gray-800 p-3 sm:p-4">
      <div className="container mx-auto flex flex-wrap gap-2 sm:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-white px-2 sm:px-3 py-1 sm:py-2 rounded-md text-sm font-medium ${
              location.pathname === item.path ? "bg-gray-900" : "hover:bg-gray-700"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
