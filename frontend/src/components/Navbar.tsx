import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const navItems = ["Home", "Search", "MyEvents"];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const activeItem = document.querySelector(".navbar-item.active") as HTMLElement; // Type Assertion ✅
    if (activeItem) {
      setIndicatorStyle({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
      });
    }
  }, [active]);

  return (
    <div className='navbar-body'>
      <ul className='navbar-list'>
        {navItems.map((item) => (
          <motion.li
            key={item}
            className={`navbar-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
            layout // Enables automatic FLIP-like animation
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {active === item && (
              <motion.div
                className="active-bg"
                layoutId="activeBg"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
              {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
