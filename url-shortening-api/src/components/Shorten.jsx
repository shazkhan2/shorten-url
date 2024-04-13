import React, { useState } from 'react';
import bgDesktop from "../images/bg-shorten-desktop.svg";
import bgMobile from "../images/bg-shorten-mobile.svg";

export default function Shorten() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a valid URL!");
      return;
    }

    try {
      const response = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: text }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <section>
        <picture>
          <source media='(min-width: 768px)' srcSet={bgDesktop} />
          <img src={bgMobile} alt='Background' />
        </picture> 

        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            placeholder='Shorten a link here...'
            value={text}
            onChange={handleChange}       
          />
          <button type='submit'>
            Shorten it!
          </button>
        </form>
      </section>
    </>
  );
}
