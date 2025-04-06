import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  {
    name: "Home",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Search",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    name: "MyEvents",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Profile",
    icon: (
      <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" fill="none">
        {/* Top cap shape */}
        <path d="M10 12C13.785 12 16.958 14.214 17.784 18H2.216C3.042 14.214 6.215 12 10 12Z" />
        {/* Circular head */}
        <path d="M6 6C6 3.794 7.794 2 10 2s4 1.794 4 4-1.794 4-4 4S6 8.206 6 6Z" />
        {/* Outer border */}
        <path d="M13.758 10.673C15.124 9.574 16 7.89 16 6C16 2.686 13.314 0 10 0C6.686 0 4 2.686 4 6C4 7.89 4.876 9.574 6.242 10.673C2.583 12.048 0 15.445 0 20H20C20 15.445 17.417 12.048 13.758 10.673Z" />
      </svg>
    ),
  }
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");

  const navigate = useNavigate();

  const handleNavClick = (itemName: string) => {
    setActive(itemName);
    // Navigate based on the selected item
    switch (itemName) {
      case "Home":
        navigate("/");
        break;
      case "Search":
        navigate("/search");
        break;
      case "MyEvents":
        navigate("/events"); // adjust route as needed
        break;
      case "Profile":
        navigate("/profile"); // adjust route as needed
        break;
      default:
        break;
    }
  };

  return (
    <div className="navbar-body">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <div
            key={item.name}
            className={`navbar-item ${active === item.name ? "active" : ""}`}
            onClick={() => handleNavClick(item.name)}
          >
            <div className="navbar-icon">{item.icon}</div>
            <div className="navbar-text">{item.name}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
