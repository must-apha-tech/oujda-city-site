import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/Logo pjt.png";

export default function Navbar() {
  const underlineRef = useRef(null);
  const menuRef = useRef(null); // reference to menu container
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // underline logic (same as before)
  useEffect(() => {
    const links = document.querySelectorAll(".menu a");
    const underline = underlineRef.current;

    links.forEach(link => link.classList.remove("active"));

    const activeLink = Array.from(links).find(
      link => link.getAttribute("href") === location.pathname
    );

    if (activeLink && underline) {
      underline.style.width = activeLink.offsetWidth + "px";
      underline.style.transform = `translateX(${activeLink.offsetLeft}px)`;
      activeLink.classList.add("active");
    }
  }, [location]);

  // close menu when clicking outside
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

      {/* Mobile menu button */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Menu links */}
      <div ref={menuRef} className={`menu ${open ? "open" : ""}`}>
        <span ref={underlineRef} className="underline"></span>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/history" onClick={() => setOpen(false)}>History</Link>
        <Link to="/culture" onClick={() => setOpen(false)}>Culture</Link>
        <Link to="/climate" onClick={() => setOpen(false)}>Climate</Link>
      </div>
    </nav>
  );
}
