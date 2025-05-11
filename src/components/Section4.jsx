import React from "react";
import "../styles/Section4.scss";
import Strings from "../assets/Strings";

const Section4 = () => {
  return (
    <section className="section section4">
      <div className="section4__content">
        <h2 className="section4__title">{Strings.features.title}</h2>
        <p className="section4__subtitle">{Strings.features.subtitle}</p>

        <div className="section4__grid">
          {Strings.features.items.map((item, index) => (
            <div className="feature-card" key={index}>
              <h3 className="feature-card__title">{item.title}</h3>
              <p className="feature-card__description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
