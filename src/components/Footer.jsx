import logo from "../assets/logo/logo W.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2>Contact Us</h2>
          <p>
            <a href="mailto:">have some questions?</a><br />
          </p>
          <p>
            <a href="#">about us</a>
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
