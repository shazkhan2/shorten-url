import fetch from 'node-fetch';

export async function shortenUrl(originalUrl) {
  try {
    const response = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      body: JSON.stringify({ url: originalUrl }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return data.result_url;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to shorten URL');
  }
}

