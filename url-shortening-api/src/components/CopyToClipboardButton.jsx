import React, { useState } from "react";
import "./CopyToClipboardButton.css";

export default function CopyToClipboardButton({ fullUrl, shortenedUrl }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `${shortenedUrl}`;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  const buttonClass = copied ? "copy-button copied" : "copy-button";

  return (
    <div className="url-info">
      <p className="full-url">{fullUrl}</p>
      <p className="shortened-url">{shortenedUrl}</p>
      <button className={buttonClass} onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
