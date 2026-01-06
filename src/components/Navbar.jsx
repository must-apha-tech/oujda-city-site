import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
          <img src={logo} alt="logo oujda" />
        </Link>
      </div>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div ref={menuRef} className={`menu ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/history" onClick={() => setOpen(false)}>History</Link>
        <Link to="/culture" onClick={() => setOpen(false)}>Culture</Link>
        <Link to="/climate" onClick={() => setOpen(false)}>Climate</Link>
      </div>
    </nav>
  );
}
