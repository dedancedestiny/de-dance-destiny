import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "../../assets/dance1.jpeg",
  "../../assets/dance2.jpeg",
  "../../assets/dance3.jpeg",
  "../../assets/dance4.jpeg"
];

function HeroSlider() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="hero-slider">

      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Dance Classes Chennai - DE Dance Destiny"
          className={`hero-slide ${i === index ? "active" : ""}`}
          loading="lazy"
        />
      ))}

    </div>
  );
}

export default HeroSlider;