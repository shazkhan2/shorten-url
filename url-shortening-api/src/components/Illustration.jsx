import React from "react";
import illustrate from "../images/illustration-working.svg";
import "./Illustration.css";

export default function Illustration() {
  return (
    <section className="illustration-section">
      <article>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="primary-button">Get Started</button>
      </article>
      <img src={illustrate} alt="workstation" />
    </section>
  );
}
