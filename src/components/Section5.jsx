import React from "react";
import "../styles/Section5.scss";
import Strings from "../assets/Strings";

const Section5 = () => {
  return (
    <section className="section section5">
      <div className="section5__content">
        <h2 className="section5__title">{Strings.useCases.title}</h2>
        <p className="section5__subtitle">{Strings.useCases.subtitle}</p>

        <div className="section5__timeline">
          {Strings.useCases.steps.map((step, index) => (
            <div className="timeline-step" key={index}>
              <div className="timeline-circle"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-description">{step.description}</p>
                {step.additional && (
                  <p className="timeline-additional">{step.additional}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
