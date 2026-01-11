import React from "react";

function About() {
  return (
    <div className="about-page" style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#d37a30" }}>
        About Us
      </h1>

      <div className="contact-info" style={{ marginBottom: "40px" }}>
        <p><strong>Email:</strong> digitaldev201@school.com</p>
        <p><strong>Phone:</strong> +212 600 000 000</p>
        <p><strong>Address:</strong> Oujda, Oriental, Morocco</p>
      </div>

      <div className="project-description" style={{ lineHeight: "1.8", fontSize: "18px", color: "#333" }}>
        <h2 style={{ marginBottom: "20px", color: "#b66a0e" }}>Project Team</h2>
        <p>
          This site was created by the <strong>Digital Development Full Stack 201 group</strong>.
        </p>
        <p>
          It represents project work for a group competition with other classes.
        </p>
        <p>
          Supervised by English teacher <strong>Ms. Hassaine Hajar</strong> and <strong>Mr. Khloufi Abdelkrim</strong>.
        </p>
      </div>
    </div>
  );
}

export default About;