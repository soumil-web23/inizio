// src/components/InsightArena.jsx
import React, { useState, useEffect, useRef } from "react";
import "./InsightArena.css";

const InsightArena = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // References to slider elements
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);
  const slider4Ref = useRef(null);
  const slider5Ref = useRef(null);

  // Sample data for cards
  const speakerCards = [
    { title: "Amit Priyadarshan", description: "CEO, Caliche Technologies", image: "src/assets_team/skull.png" },
    { title: "Vandana Srivastava", description: "STPI, Director", image: "src/assets_team/skull.png" },
    { title: "Nir Eyal", description: "Investor and Author" ,image: "src/assets_team/skull.png"},
    { title: "Khalid Wani", description: "TEDx Speaker, Serial Entrepreneur" ,image: "src/assets_team/skull.png"},
    { title: "Aditya Arora", description: "Padma Shri Nominee " ,image: "src/assets_team/skull.png"},
    { title: "Vedang Patel", description: "Co-Founder, The Souled Store" ,image: "src/assets_team/skull.png"},
    { title: "Satanik Roy", description: "Co-Founder, HyperXchange" ,image: "src/assets_team/skull.png"},
    { title: "David Gogoi", description: "CEO, Zerund" ,image: "src/assets_team/skull.png"},
    { title: "Karan Shah", description: "Founder and Director, IIDE" ,image: "src/assets_team/skull.png"},
  ];


  const partnerCards = [
    { title: "SBI", image: "src/assets_team/assets_sponsors/SBI.jpg" },
    { title: "GAIL", image: "src/assets_team/assets_sponsors/Gail.jpg" },
    { title: "Arista", image: "src/assets_team/assets_sponsors/arista.jpg"},
    { title: "The Assam Tribune", image: "src/assets_team/assets_sponsors/assam_tribune.jpg" },
    { title: "BIPL", image: "src/assets_team/assets_sponsors/bipl.jpg"},
    { title: "Baskin Robbins", image: "src/assets_team/assets_sponsors/br.jpg"},
    { title: "Canara Bank", image: "src/assets_team/assets_sponsors/canara.jpg"},
    { title: "Dominos", image: "src/assets_team/assets_sponsors/dominos.jpg"},
    { title: "Fat Belly", image: "src/assets_team/assets_sponsors/fat_belly.jpg"},
    { title: "G Plus", image: "src/assets_team/assets_sponsors/g_plus.jpg"},
    { title: "Gratia Technologies", image: "src/assets_team/assets_sponsors/gratia.jpg"},
    { title: "Bank of Baroda", image: "src/assets_team/assets_sponsors/BOB.jpg"},
    { title: "Indian Bank", image: "src/assets_team/assets_sponsors/indian_bank.jpg"},
    { title: "Indian Oil", image: "src/assets_team/assets_sponsors/indian_oil.jpg"},
    { title: "Kuber Techno Craft", image: "src/assets_team/assets_sponsors/kuber.jpg"},
    { title: "NEHHDC", image: "src/assets_team/assets_sponsors/nehhdc.jpg"},
    { title: "NGC Broadband", image: "src/assets_team/assets_sponsors/ngc.jpg"},
    { title: "OIL India", image: "src/assets_team/assets_sponsors/OIL.jpg"},
    { title: "Press information bureau", image: "src/assets_team/assets_sponsors/pib.jpg"},
    { title: "Pizza Hut", image: "src/assets_team/assets_sponsors/pizza_hut.jpg"},
    { title: "Prag News", image: "src/assets_team/assets_sponsors/prag_news.jpg"},
    { title: "Royal Enfield", image: "src/assets_team/assets_sponsors/royal_enfield.jpg"},
    { title: "Souled Store", image: "src/assets_team/assets_sponsors/souled_store.jpg"},
    { title: "SP singla constructions", image: "src/assets_team/assets_sponsors/sp_singla.jpg"},
    { title: "Zoomcar", image: "src/assets_team/assets_sponsors/zoomcar.jpg"},

  ];

  const generateCards = (cards) => (
    cards.map((card, index) => (
      <div 
        key={index} 
        className="card-container" 
        style={{ backgroundImage: `url(${card.image})` }}
      >
        <div className="card-content">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </div>
    ))
  );

  

  useEffect(() => {
    console.log("InsightArena component mounted!");
    setIsLoaded(true);
  }, []);

  return (
    <div className="insight-arena">
      <div className="header">
        <h1>
          insight arena:
          <br />
          where visionaries
          <br />
          take the stage
        </h1>
        <p className="tagline">
          SPEAKER EXPRESS - INSIGHTS FROM THE BEST IN THE GAME!
        </p>
        <div className="description">
          <p>
            Fast-track your learning with industry giants, startup founders, and
            thought leaders.
          </p>
          <p>
            This isn't just another talk—it's a masterclass on the future.
            Buckle up and get ready to be inspired!
          </p>
        </div>
      </div>
      <div className="container">
        <div className="section">
          {/* First row - Left to Right */}
          <div className="slider-container">
            <div className="slider slider-ltr" ref={slider1Ref}>
              {generateCards(speakerCards)}
              {generateCards(speakerCards)}{" "}
              {/* Duplicate for continuous effect */}
            </div>
          </div>
          {/* Second row - Right to Left */}
          <div className="slider-container">
            <div className="slider slider-rtl" ref={slider2Ref}>
              {generateCards(speakerCards)}
              {generateCards(speakerCards)}{" "}
              {/* Duplicate for continuous effect */}
            </div>
          </div>
        </div>
      </div>
      <div className="partner-section">
        <div className="container">
          <div className="partner-header">
            <h2>
              power partners:
              <br />
              the backbone of
              <br />
              innovation
            </h2>
            <p className="tagline">
              OUR SPONSORS - THE DRIVING FORCE BEHIND INZIO!
            </p>
            <div className="description">
              <p>
                Powering the dream! INZIO wouldn't be possible without the
                support of our visionary sponsors. These changemakers fuel
                innovation, and together, we're shaping the future of
                entrepreneurship.
              </p>
            </div>
          </div>
          <div className="section">
            {/* First row - Left to Right */}
            <div className="slider-container">
              <div className="slider slider-ltr" ref={slider3Ref}>
                {generateCards(partnerCards)}
                {generateCards(partnerCards)}{" "}
                {/* Duplicate for continuous effect */}
              </div>
            </div>
            {/* Second row - Right to Left */}
            <div className="slider-container">
              <div className="slider slider-rtl" ref={slider4Ref}>
                {generateCards(partnerCards)}
                {generateCards(partnerCards)}{" "}
                {/* Duplicate for continuous effect */}
              </div>
            </div>
            {/* Third row - Left to Right */}
            <div className="slider-container">
              <div className="slider slider-ltr" ref={slider5Ref}>
                {generateCards(partnerCards)}
                {generateCards(partnerCards)}{" "}
                {/* Duplicate for continuous effect */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightArena;
