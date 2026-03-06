import React from "react";
import "./Hero.css";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      itemScope
      itemType="https://schema.org/SportsActivityLocation"
    >
      {/* SEO Hidden Content */}
      <h1 className="seo-hidden" itemProp="name">
        DE Dance Destiny – Professional Dance Classes in Chennai
      </h1>

      {/* Background Slider */}
      <HeroSlider />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        <p className="hero-quote">
          Ignite Passion • Move
        </p>

        <h2 className="hero-title">
          Chennai’s Most <span>Energetic</span> Dance Academy
        </h2>

        <p className="hero-subtitle">
          Kids • Adults • Hip Hop • Wedding Choreography • Stage Performance
        </p>

        <div className="hero-buttons">

          <a
            href="https://wa.me/918754470020"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn primary"
          >
            Book Free Trial Class
          </a>

          <a href="#services" className="hero-btn secondary">
            Explore Programs
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;