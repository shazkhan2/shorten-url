import React, { useState } from "react";
import "./Shorten.css";

export default function Shorten() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a valid URL!");
      return;
    }

    try {
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: text }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
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
    <section className="shorten-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={text}
          onChange={handleChange}
          className="shorten-input"
        />
        <button type="submit" className="shorten-button">
          Shorten it!
        </button>
      </form>
    </section>
  );
}
