import React, { useState, useEffect } from "react";

import back from "../assets/imagesClimate/back.jpg";

import rain from "../assets/imagesClimate/rain.jpg";

import rbe from "../assets/imagesClimate/rbe.jpg";

import khf from "../assets/imagesClimate/khf.jpg";
import bacg from "../assets/imagesClimate/bacg.jpg";

function Climate() {

const [currentView, setCurrentView] = useState('home');

const [week, setWeek] = useState([]);

const [today, setToday] = useState(null);


useEffect(() => {

const shouldShowWeather = localStorage.getItem('SHOW_WEATHER_NOW');

if (shouldShowWeather === 'YES') {

  localStorage.removeItem('SHOW_WEATHER_NOW');

  setCurrentView('weather');

}



const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('page') === 'weather') {

  setCurrentView('weather');

}




window.updateAppView = (view) => {

  setCurrentView(view);

};

}, []);


useEffect(() => {

if (currentView === 'weather') {

  fetch(

    "https://api.open-meteo.com/v1/forecast?latitude=34.68&longitude=-1.91&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Africa/Casablanca"

  )

    .then((res) => res.json())

    .then((data) => {

      setToday(data.current_weather);

      const days = data.daily.time.map((date, i) => ({

        date,

        max: data.daily.temperature_2m_max[i],

        min: data.daily.temperature_2m_min[i],

        code: data.daily.weathercode[i],

      }));

      setWeek(days);

    });

}

}, [currentView]);


const exploreButton = () => {

localStorage.setItem('SHOW_WEATHER_NOW', 'YES');

if (window.updateAppView) {

  window.updateAppView('weather');

}

const event = new CustomEvent('goToWeatherPage');

window.dispatchEvent(event);

window.history.pushState({}, '', '?page=weather');

document.documentElement.setAttribute('data-page', 'weather');

};


const backButton = () => {

setCurrentView('home');

window.history.pushState({}, '', '/');

};


if (currentView === 'weather') {

return (

  <div className="weather-page">

    



    <h1 className="title">Oujda's Weather</h1>



    {today && (

      <div className="today">

        <span className="today-icon">🌤️</span>

        <h2>{today.temperature}°C</h2>

        <p style={{ fontSize: "30px", fontWeight: "bold" }}>Today</p>

      </div>

    )}

    <button

      onClick={backButton}

      style={{
         position: 'fixed',
    top: '150px',
    right: '25px',
    padding: '12px 25px',
    backgroundColor: '#d37a30ff',
    color: 'white',
    border: '2px solid #b66a0eff',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: '1000',
    

        

      }}

    >

      Back to Climate Page

    </button>



    <div className="week">

      {week.map((d, i) => {

        const getIcon = (code) => {

          if (code < 3) return "☀️";

          if (code < 50) return "⛅";

          if (code < 70) return "🌧️";

          return "🌩️";

        };

        return (

          <div className="day-card" key={i}>

            <p className="date">

              {new Date(d.date).toLocaleDateString("en-US", {

                weekday: "long",

              })}

            </p>

            <span className="icon">{getIcon(d.code)}</span>

            <p>

              {d.max}° / {d.min}°

            </p>

          </div>

        );

      })}

    </div>

  </div>

);

}


return (

<div className="hero">

    <div className="overlay" />



    <div className="content"  style={{

          backgroundImage: `url(${bacg})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          

        }}>

      <p className="small-text">Feel the Atmosphere of Oujda</p>

      <h1>

        Where Oujda’s Weather, <br /> Shapes Your Day

      </h1>

      <p className="desc">

        From golden sunny mornings to cool evening breezes,

        discover today’s weather in Oujda and plan your day with confidence.

      </p>



      <button className="btn" onClick={exploreButton}>

        ☀ Explore Today’s Weather

      </button>

    </div>



    <div className="krotat-ltah">

     


          {/* TBDALWLA */}
            <div className="twopgs">
              <div className="karta">

        <div className="karta-sghira" style={{

          backgroundImage: `url(${khf})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          borderRadius: "25px",

         width: "900px",
          height: "600px",

        }}>

          <span className="smia-korta"><h1> Autumn in oujda 🍂</h1></span>

        </div>

        <div className="karta-kbira" style={{

          backgroundImage: `url(${khf})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          borderRadius: "25px",

        }}>

          <div className="content-kbira">

            <div className="tasuura-kbira" style={{

              backgroundColor: "rgba(255, 255, 255, 0.8)",

              padding: "20px",

              borderRadius: "10px",

              margin: "10px",

            }}>

              <p>
                Autumn is characterized by a gradual decrease in temperatures compared to summer and represents the main rainy season of the year. Rainfall is often irregular and may occur as heavy showers, sometimes accompanied by thunderstorms. This is caused by the return of atmospheric disturbances and the weakening of Saharan influence, making autumn an important season for water resource renewal

              </p>

            </div>

            <div className="kteb-kbira">

              {/* <h1>🍂 Autumn</h1> */}

            </div>

          </div>

        </div>

      </div>


      <div className="karta">

        <div className="karta-sghira" style={{

          backgroundImage: `url(${rain})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          borderRadius: "25px",

          width: "900px",
          height: "600px",
        }}>

          <span className="smia-korta"><h1> Winter in Oujda❄️</h1></span>

        </div>

        <div className="karta-kbira" style={{

          backgroundImage: `url(${rain})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          borderRadius: "25px",

        }}>

          <div className="content-kbira">

            <div className="tasuura-kbira" style={{

              backgroundColor: "rgba(255, 255, 255, 0.8)",

              padding: "30px",

              borderRadius: "10px",

              margin: "10px",

            }}>

              <p>
                Winter in the city of Oujda is relatively cold, especially at night, with temperatures sometimes dropping to around 5°C or lower. Rainfall is generally low to moderate, and light frost may occasionally occur due to low temperatures, reflecting the continental influence on the region’s climate

              </p>

            </div>

            

          </div>

        </div>

      </div>

            </div>
              {/* TBDAZAWJA */}
              <div className="twopgs">
                <div className="karta">

        <div className="karta-sghira" style={{

          backgroundImage: `url(${rbe})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          borderRadius: "25px",

         width: "900px",
          height: "600px",

        }}>

          <span className="smia-korta"><h1> Spring in oujda🌸</h1></span>

        </div>

        <div className="karta-kbira" style={{

          backgroundImage: `url(${rbe})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          borderRadius: "25px"

        }}>

          <div className="content-kbira">

            <div className="tasuura-kbira" style={{

              backgroundColor: "rgba(255, 255, 255, 0.8)",

              padding: "20px",

              borderRadius: "10px",

              margin: "10px",

            }}>

              <p>
                Spring in the city of Oujda is characterized by moderate temperatures, generally ranging between 15°C and 25°C. However, it is considered a transitional season marked by relative atmospheric instability. This is due to the interaction between mild air masses and residual cold or hot influences, which may cause light rainfall and variable winds, leading to changing weather conditions during this season
                </p>

            </div>

            <div className="kteb-kbira">

              {/* <h1>🌸 Spring</h1> */}

            </div>

          </div>

        </div>

      </div>


      



      <div className="karta">

        <div className="karta-sghira" style={{

          backgroundImage: `url(${back})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          borderRadius: "25px",

         width: "900px",
          height: "600px",

        }}>

          <span className="smia-korta"><h1> Summer in Oujda☀️</h1></span>

        </div>

        <div className="karta-kbira" style={{

          backgroundImage: `url(${back})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          borderRadius: "25px",

        }}>

          <div className="content-kbira">

            <div className="tasuura-kbira" style={{

              backgroundColor: "rgba(255, 255, 255, 0.8)",

              padding: "20px",

              borderRadius: "10px",

              margin: "10px"

            }}>

              <p>
                Summer in Oujda is known for very high temperatures and a dry climate. Temperatures often exceed 35°C and may reach up to 40°C during heat waves. This is mainly due to the dominance of hot Saharan air masses and high atmospheric pressure, resulting in an almost complete absence of rainfall and high evaporation rates
                .</p>

            </div>

            <div className="kteb-kbira">

              {/* <h1>☀️ Summer</h1> */}

            </div>

          </div>

        </div>

      </div>
              </div>

      
           {/* tsalikarta */}

    </div>

  </div>

);

}

export default Climate;
