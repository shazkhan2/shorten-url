import React, { useState } from "react";

export default function CopyToClipboardButton({ fullUrl, shortenedUrl, onSuccess }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `${fullUrl}\nShortened URL: ${shortenedUrl}`;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        onSuccess(); 
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <button onClick={handleCopy} disabled={copied}>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
