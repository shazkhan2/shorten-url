import React, { useState } from "react";
import "./Shorten.css";
import CopyToClipboardButton from "./CopyToClipboardButton";

export default function Shorten() {
  const [text, setText] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleCopySuccess = () => {
    console.log("URL copied successfully!"); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a valid URL!");
      return;
    }

    let processedUrl = text.trim();
    if (!processedUrl.startsWith("http://") && !processedUrl.startsWith("https://")) {
      processedUrl = "https://" + processedUrl;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("url", processedUrl);

      const response = await fetch("http://localhost:3000/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      setShortenedUrls([...shortenedUrls, data.shortenedUrl]);
      setText(""); 
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
      <div className="shortened-urls">
        {shortenedUrls.map((url, index) => (
          <div key={index} className="shortened-url">
            <p>{url}</p>
            <CopyToClipboardButton fullUrl={text} shortenedUrl={url} onSuccess={handleCopySuccess} />
          </div>
        ))}
      </div>
    </section>
  );
}
