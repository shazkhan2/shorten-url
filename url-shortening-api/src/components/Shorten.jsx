import React, { useState } from 'react';
import './Shorten.css';
import CopyToClipboardButton from './CopyToClipboardButton';

const API_URL = 'http://localhost:3000/api/shorten';

export default function Shorten() {
  const [inputUrl, setInputUrl] = useState('');
  const [urlPairs, setUrlPairs] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputUrl) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    setShowAlert(false);

    let processedUrl = inputUrl.trim();
    if (!processedUrl.startsWith('http://') && !processedUrl.startsWith('https://')) {
      processedUrl = 'https://' + processedUrl;
    }

    try {
      const formData = new URLSearchParams();
      formData.append('url', processedUrl);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      setUrlPairs([...urlPairs, { inputUrl, shortenedUrl: data.shortenedUrl }]);
      setInputUrl('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setInputUrl(e.target.value);
  };

  return (
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={inputUrl}
            onChange={handleChange}
            className={`shorten-input ${showAlert ? 'red-border' : ''}`}
          />
          <button type="submit" className="shorten-button">
            Shorten it!
          </button>
        </form>
        {showAlert && <p className="alert-message">Please add a link</p>}
      </section>
      <section className="shortened-container">
        <div className="shortened-urls">
          {urlPairs.map((pair, index) => (
            <div key={index} className="shortened-url">
              <CopyToClipboardButton
                inputUrl={pair.inputUrl}
                shortenedUrl={pair.shortenedUrl}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
