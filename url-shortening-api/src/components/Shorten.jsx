import React, { useState } from "react";
import "./Shorten.css";
import CopyToClipboardButton from "./CopyToClipboardButton";

export default function Shorten() {
  const [fullUrl, setFullUrl] = useState("");
  const [urlPairs, setUrlPairs] = useState([]);

  const handleCopySuccess = () => {
    console.log("URL copied successfully!"); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullUrl) {
      alert("Please enter a valid URL!");
      return;
    }

    let processedUrl = fullUrl.trim();
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
      setUrlPairs([...urlPairs, { fullUrl, shortenedUrl: data.shortenedUrl }]);
      setFullUrl(""); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFullUrl(e.target.value);
  };

  return (
    <section className="shorten-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={fullUrl}
          onChange={handleChange}
          className="shorten-input"
        />
        <button type="submit" className="shorten-button">
          Shorten it!
        </button>
      </form>
      <div className="shortened-urls">
        {urlPairs.map((pair, index) => (
          <div key={index} className="shortened-url">
            <CopyToClipboardButton
              fullUrl={pair.fullUrl}
              shortenedUrl={pair.shortenedUrl}
              onSuccess={handleCopySuccess}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
