import { useRef, useState } from "react";
import logo from "../assets/logo/Logo pjt.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const underlineRef = useRef(null);
    const [activeSection, setActiveSection] = useState(null);
    
  function moveUnderline(e) {
    const link = e.target;
    const underline = underlineRef.current;

    underline.style.width = link.offsetWidth + "px";
    underline.style.transform = `translateX(${link.offsetLeft}px)`;
  }
  

  return (
    <nav className="black">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo oujda" />
        </Link>
      </div> 

      <div className="menu">
        <span ref={underlineRef} className="underline"></span>

        <Link to="/" onClick={moveUnderline}>Home</Link>
        <Link to="/history" onClick={moveUnderline}>History</Link>
        <Link to="/culture" onClick={moveUnderline}>culture</Link>
        <Link to="/climate" onClick={moveUnderline}>climate</Link>
      </div>
    </nav>
  );
}
