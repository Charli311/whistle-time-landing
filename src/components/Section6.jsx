import React, { useState } from "react";
import "../styles/Section6.scss";
import Strings from "../assets/Strings";

const Section6 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section section6">
      <div className="section6__content">
        <h2 className="section6__title">{Strings.faq.title}</h2>

        <div className="section6__accordion">
          {Strings.faq.questions.map((item, index) => (
            <div
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-question">{item.question}</div>
              {activeIndex === index && (
                <div className="accordion-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
