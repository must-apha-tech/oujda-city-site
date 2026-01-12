import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo W.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="black">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Oujda logo" />
        </Link>
      </div>

      <button 
        className="menu-btn" 
        aria-label="Toggle navigation menu" 
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div ref={menuRef} className={`menu ${open ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/history" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>History</NavLink>
        <NavLink to="/culture" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Culture</NavLink>
        <NavLink to="/climate" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Climate</NavLink>
        <NavLink to="/About" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
      </div>
    </nav>
  );
}