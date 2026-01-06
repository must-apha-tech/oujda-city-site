import logo from "../assets/logo/logo W.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2>Oujda City</h2>
          <p>
            Explore Oujda’s history, culture, and climate. Find places
            and experiences from local perspective.
          </p>
        </div>

        <div className="footer-contact">
  <h3>Project Team</h3>
  <p>
    This site was created by the Digital Development Full Stack 201 group.
  </p>
  <p>
    Project work for a group competition with other classe.
  </p>
  <p>
    Supervised by English teacher Sara and Mr. Khloufi.
  </p>
  <p>
    Team members:
  </p>
  <p>
    • Member 1<br />
    • Member 2<br />
    • Member 3<br />
    • Member 4
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
