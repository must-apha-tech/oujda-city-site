import React from "react";
import babsidi from "../assets/images/babsidi.jpg";
import { Link } from "react-router-dom";
import babsidiabdlwahab from "../assets/images/babsidiabdlwahab.jpg";
import horseriding from "../assets/images/horseriding.jpg";
import oujdaWeather from "../assets/images/oujdaWeather.jpg";
const OujdaPresentation = () => {
  return (
    <div>
      {/* banner Section */}
      <section className="banner">
        <img src={babsidi} alt="Oujda Gate" />
        <h1>Oujda</h1>
        <p>The City of the Eastern Gate</p>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="description">
          <h2>About Oujda</h2>
          <p>
            Oujda, known as the "City of the Eastern Gate," is a cultural hub in
            Morocco with rich traditions, historical monuments, and vibrant
            markets. It serves as a gateway to both Morocco and Algeria,
            blending diverse influences.
          </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50237.46860578535!2d-1.94867783160741!3d34.684634148594405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7864984106d6ef%3A0x1d86b33244c4650!2sOujda!5e1!3m2!1sen!2sma!4v1768215664535!5m2!1sen!2sma" 
        width="600"
        height="450" 
        style={{border:0}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>

      </section>

      {/* Discover Section */}
    <section className="discover">
        <h2>Discover Oujda</h2>
        <div className="cards">
            <div className="card">
            <img src={babsidiabdlwahab} alt="Bab Sidi Abdelwahab Gate" />
            <Link to="/history" aria-label="Go to History">Learn More about oujda's history</Link>
            </div>
            <div className="card">
            <img src={horseriding} alt="tbourida" />
            <Link to="/culture" aria-label="Go to Culture">Learn More about oujda's culture</Link>
            </div>
            <div className="card">
            <img src={oujdaWeather} alt="climate" />
            <Link to="/climate" aria-label="Go to Climate">Learn More about oujda's climate</Link>
            </div>
        </div>
    </section>

    </div>
  );
};

export default OujdaPresentation;