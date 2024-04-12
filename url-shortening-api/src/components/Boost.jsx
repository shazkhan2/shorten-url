import React from 'react';
import bgMobile from "../images/bg-boost-mobile.svg";
import bgDesktop from "../images/bg-boost-desktop.svg";

function Boost() {
  return (
    <>
      <section>
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt='' />
        </picture>
        <h2>
          Boost your links today
        </h2>
        <button>Get started</button>
      </section>
    </>
  )
}

export default Boost;
