import React from "react";
import "./Hero.css";

import img1 from "../../assets/dance1.jpeg";
import img2 from "../../assets/dance2.jpeg";
import img3 from "../../assets/dance3.jpeg";
import img4 from "../../assets/dance4.jpeg";

const gallery = [
  {
    image: img1,
    title: "Kids Dance Classes",
    text: "Fun dance training for kids to build confidence."
  },
  {
    image: img2,
    title: "Hip Hop Training",
    text: "Professional hip hop choreography training."
  },
  {
    image: img3,
    title: "Wedding Choreography",
    text: "Memorable wedding dance performances."
  },
  {
    image: img4,
    title: "Stage Performance",
    text: "Advanced stage performance training."
  }
];

function HeroGallery() {

  return (
    <section className="hero-gallery">

      <div className="gallery-container">

        {gallery.map((item, index) => (

          <div key={index} className="gallery-card">

            <img src={item.image} alt={item.title} />

            <div className="gallery-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HeroGallery;