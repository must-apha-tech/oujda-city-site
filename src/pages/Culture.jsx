import React from "react";
import "../styles/Culture.css";

import reggadaImage from "../assets/images/reggada2.jpeg"
import babouch from "../assets/images/babouch.jpeg";
import berkoukch from "../assets/images/berkoukch.jpeg";
import bakbouka from "../assets/images/bakbouka.jpeg";
import Karan from "../assets/images/karan.jpeg";
import tbouridaImage from "../assets/images/tbourida.jpeg";

const OujdaCultureCenterRight = () => {
  return (
    <div className="culture-center-container">
      {/* Header */}
      <header className="culture-header">
        <div className="header-content">
          <h1 className="main-title">Cultural Heritage of Oujda</h1>
          <p className="header-subtitle">
            Discover the rich traditions of Eastern Morocco
          </p>
          <div className="header-divider"></div>
        </div>
      </header>

      {/* Food Section */}
      <section className="culture-section food-section" >
        <div className="section-wrapper">
          <div className="content-left">
            <div className="section-header">
              <span className="section-number">01</span>
              <h2 className="section-title" style={{color:"brown"}}>Traditional Cuisine</h2>
              <p className="section-subtitle">Flavors that tell stories</p>
            </div>

            <div className="content-details">
              <div>
                <div
                  style={{ display: "flex", marginBottom: "50px" }}
                  id="karan"
                >
                  <img
                    src={Karan}
                    style={{
                      height: "300px",
                      
                      marginRight: "200px",
                    }}
                  />
                  <div className="description">
                    <h5
                      style={{
                        borderLeft: "1px solid blue",
                        fontSize: "30px",
                        paddingLeft: "7px",
                      }}
                    >
                      Karan
                    </h5>
                    <p className="images-description">
                     Karan is a popular street food from Oujda, in eastern Morocco.
It’s made mainly from chickpea flour and baked into a soft, thick savory flan.
People usually eat it in bread like a sandwich, with cumin and sometimes harissa.

                    </p>
                  </div>
                </div>
              </div>

              <div className="category-item">
                <div
                  style={{ display: "flex", marginBottom: "50px" }}
                  id="babouch"
                >
                  <img
                    src={babouch}
                    style={{
                      height: "300px",
                      
                      marginRight: "200px",
                    }}
                  />
                  <div className="description">
                    <h5
                      style={{
                        borderLeft: "4px solid blue",
                        fontSize: "30px",
                        paddingLeft: "7px",
                      }}
                    >
                      Babouch
                    </h5>
                    <p className="images-description">
                      Babbouche (الببوش) in Oujda is a traditional street food made from snails cooked in a hot, spicy herbal broth.
It’s popular in cold weather, sold by street vendors, and is believed to help digestion and relieve colds.

                    </p>
                  </div>
                </div>
              </div>

              <div className="category-item">
                <div
                  style={{ display: "flex", marginBottom: "50px" }}
                  id="bakbouka"
                >
                  <img
                    src={bakbouka}
                    style={{
                      height: "300px",
                      
                      marginRight: "200px",
                    }}
                  />
                  <div className="description">
                    <h5
                      style={{
                        borderLeft: "4px solid blue",
                        fontSize: "30px",
                        paddingLeft: "7px",
                      }}
                    >
                      Bakbouka
                    </h5>
                    <p className="images-description">
                      Bakbouka Oujdia is a traditional dish from Oujda in eastern Morocco.
It is made from sheep’s stomach (tripe) stuffed with a tasty mixture and cooked.
It is usually prepared during Eid and special celebrations.

                    </p>
                  </div>
                </div>
              </div>

              <div className="category-item">
                <div
                  style={{ display: "flex", marginBottom: "50px" }}
                  id="berkoukch"
                >
                  <img
                    src={berkoukch}
                    style={{
                      height: "300px",
                
                      marginRight: "200px",
                    }}
                  />
                  <div className="description">
                    <h5
                      style={{
                        borderLeft: "4px solid blue",
                        fontSize: "30px",
                        paddingLeft: "7px",
                      }}
                    >
                      Berkoukesh
                    </h5>
                    <p className="images-description">
                     Berkoukesh (بركوكش) is a traditional Moroccan dish from Oujda and eastern Morocco.
It’s a warm, hearty meal, often made in cold weather or for family gatherings.

                    </p>
                  </div>
                </div>
              </div>

              <div className="cultural-note">
                <h4>Cultural Significance</h4>
                <p>
                  Oujdi cuisine reflects the city's position as a cultural
                  crossroads, blending Berber, Arab, and Andalusian influences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clothing Section */}
      <section className="culture-section clothing-section" >
        <div className="section-wrapper reverse">
          <div className="content-left">
            <div className="section-header">
              <span className="section-number">02</span>
              <h2 className="section-title" style={{color:"brown"}}>Traditional Clothing</h2>
              <p className="section-subtitle">Elegance in every thread</p>
            </div>

            <div className="content-details">
              <div className="category-grid">
                <div className="grid-item">
                  <div className="item-content">
                    <h3>Oujdi Caftan</h3>
                    <p>
                      Exquisite gold embroidery on vibrant fabrics, worn for
                      weddings and ceremonies.
                    </p>
                  </div>
                </div>

                <div className="grid-item">
                  <div className="item-content">
                    <h3 >Jellaba</h3>
                    <p>
                      Traditional long robe in wool or cotton, featuring subtle
                      decorative elements.
                    </p>
                  </div>
                </div>

                <div className="grid-item">
                  <div className="item-content">
                    <h3>el blouza</h3>
                    <p>
                      Blouza Oujdia is a traditional women’s outfit from Oujda, worn at weddings and special occasions.

                    </p>
                  </div>
                </div>

                <div className="grid-item">
                  <div className="item-content">
                    <h3>Burnous</h3>
                    <p>
                      White wool cloak symbolizing prestige and tradition among
                      men.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="image-right">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Traditional Moroccan clothing"
                className="main-image"
              />
              <div className="image-overlay">
                <div className="overlay-text">
                  <h4>Textile Art</h4>
                  <p>Handwoven with precision</p>
                </div>
              </div>
            </div>
            <div className="image-description">
              <p>
                Traditional Oujdi attire showcasing intricate embroidery and
                vibrant colors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="culture-section music-section">
        <div className="section-wrapper">
          <div className="content-left">
            <div className="section-header">
              <span className="section-number">03</span>
              <h2 className="section-title" style={{color:"brown"}}>Music & Rhythms</h2>
              <p className="section-subtitle">The heartbeat of Oujda</p>
            </div>

            <div className="content-details">
              <div className="highlight-card">
                <div className="card-header">
                  <h3>the Reggada</h3>
                </div>
                <p>
                  A traditional warrior dance from Eastern Morocco's Oujda
                  region. Created by Berber tribes of the Beni Snassen
                  mountains, it represents courage and unity through
                  synchronized foot stomping, shoulder movements, and ritual
                  handling of traditional rifles.
                </p>
              </div>

              <div className="instruments">
                <h4>Traditional Instruments</h4>
                <div className="instrument-list">
                  <div className="instrument-item">
                    <span className="instrument-name">Gasba</span>
                    <span className="instrument-desc">Reed flute</span>
                  </div>
                  <div className="instrument-item">
                    <span className="instrument-name">Derbouka</span>
                    <span className="instrument-desc">Goblet drum</span>
                  </div>
                  <div className="instrument-item">
                    <span className="instrument-name">Oud</span>
                    <span className="instrument-desc">Pear-shaped lute</span>
                  </div>
                  <div className="instrument-item">
                    <span className="instrument-name">Qraqeb</span>
                    <span className="instrument-desc">Metal castanets</span>
                  </div>
                </div>
              </div>

              <div className="cultural-info">
                <h4>Musical Diversity</h4>
                <p>
                  Oujda's music scene includes Gharnati (Andalusian), Aïta
                  (folk), and spiritual Sufi music, each with its own cultural
                  significance.
                </p>
              </div>
            </div>
          </div>

          <div className="image-right">
            <div className="image-container">
              <img
                src={reggadaImage}
                alt="Traditional Moroccan music"
                className="main-image"
              />
              <div className="image-overlay">
                <div className="overlay-text">
                  <h4>Musical Heritage</h4>
                  <p>Rhythms of tradition</p>
                </div>
              </div>
            </div>
            <div className="image-description">
              <p>
                Traditional musicians performing Rai music in Oujda's cultural
                venues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tbourida Section */}
      <section className="culture-section tbourida-section">
        <div className="section-wrapper reverse">
          <div className="content-left">
            <div className="section-header">
              <span className="section-number">04</span>
              <h2 className="section-title" style={{color:"brown"}}>Tbourida</h2>
              <p className="section-subtitle">Equestrian art form</p>
            </div>

            <div className="content-details">
              <div className="definition-box">
                <h3>Traditional Fantasia</h3>
                <p>
                  Spectacular equestrian performance where riders in traditional
                  attire charge in synchronized formation while firing muskets.
                </p>
              </div>

              <div className="ritual-steps">
                <h4>Performance Sequence</h4>
                <ul>
                  <li>
                    <strong>Preparation</strong> - Riders and horses adorned in
                    traditional gear
                  </li>
                  <li>
                    <strong>Parade</strong> - Display of costumes and weapons
                  </li>
                  <li>
                    <strong>Charge</strong> - Synchronized gallop at full speed
                  </li>
                  <li>
                    <strong>Firing</strong> - Simultaneous musket discharge
                  </li>
                  <li>
                    <strong>Return</strong> - Organized retreat in formation
                  </li>
                </ul>
              </div>

              <div className="significance-box">
                <h4>UNESCO Recognition</h4>
                <p>
                  Recognized as Intangible Cultural Heritage in 2021, Tbourida
                  represents bravery, unity, and Amazigh identity.
                </p>
              </div>
            </div>
          </div>

          <div className="image-right">
            <div className="image-container">
              <img
                src={tbouridaImage}
                alt="Traditional Moroccan equestrian performance"
                className="main-image"
              />
              <div className="image-overlay">
                <div className="overlay-text">
                  <h4>Equestrian Art</h4>
                  <p>Centuries-old tradition</p>
                </div>
              </div>
            </div>
            <div className="image-description">
              <p>
                Tbourida performance during cultural festivals in Eastern
                Morocco
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OujdaCultureCenterRight;
