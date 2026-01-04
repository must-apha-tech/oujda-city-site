import { useRef, useEffect, useState, use } from "react";
import logo from "../assets/logo/Logo pjt.png";

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
        <a href="#hero">
          <img src={logo} alt="logo oujda" />
        </a>
      </div>

      <div className="menu">
        <span ref={underlineRef} className="underline"></span>

        <a href="#hero" onClick={moveUnderline}>Hero</a>
        <a href="#about" onClick={moveUnderline}>About</a>
        <a href="#weather" onClick={moveUnderline}>Weather</a>
        <a href="#places" onClick={moveUnderline}>Places</a>
        <a href="#culture" onClick={moveUnderline}>Culture</a>
        <a href="#contact" onClick={moveUnderline}>Contact</a>
      </div>
    </nav>
  );
}
