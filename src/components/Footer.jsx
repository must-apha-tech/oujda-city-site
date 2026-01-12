import logo from "../assets/logo/logo W.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2>Contact Us</h2>
          <p>
            <a href="mailto:">Have some questions?</a><br />
          </p>
          <p>
            <Link to="/About" >About</Link>    
          </p>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Oujda logo" />
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Oujda City. All rights reserved.
      </div>
    </footer>
  );
}
