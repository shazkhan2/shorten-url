import React from "react";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";
import "./Statistics.css";

export default function Statistics() {
  return (
    <section className="statistics-container">
      <svg width="100%" height="10" className="background-line">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="hsl(180, 66%, 49%)" />
      </svg>
      <div className="statistics-header">
        <h2>Advanced statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="cards-container">
        <article>
          <img src={brand} alt="brand" />
          <h3>Brand recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>
        <article>
          <img src={detailed} alt="detailed" />
          <h3> Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>
        <article>
          <img src={fully} alt="fully" />
          <h3> Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </article>
      </div>
    </section>
  );
}
