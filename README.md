![Frontpage](<Skærmbillede 2024-04-19 111551.png>)
![Fullscreen](<Skærmbillede 2024-04-19 111801.png>)
![Mobileview](<Skærmbillede 2024-04-19 100758.png>)

# Features
- **Mitigation of CORS Restrictions:**
  - Utilizes a custom backend (Node) server and API to circumvent CORS restrictions imposed by the third-party API.
  
- **URL Shortening Functionality:**
  - The web application (React) sends requests to the API server, which then communicates with the public API to shorten URLs, implemented using node-fetch.
  
- **ES6 Modules Support:**
  - Overcame compatibility issues with older NPM packages reliant on CommonJS by introducing support for ES6 modules. Notably, files are designated with the .mjs extension to signal the adoption of ES module syntax.
  
- **Responsive UI Design:**
  - Dynamically adjusts UI components based on screen size, featuring a toggleable navigation bar.

# Lessons Learnt
- **CORS Challenges:**
  - CORS errors predominantly manifest in browser environments, highlighting the necessity for server-side mitigation strategies.
  
- **Access Control Workarounds:**
  - Understood the need for intermediary servers to access restricted APIs, offering insights into overcoming origin access controls.
  
- **Adaptability in Development:**
  - Experienced the evolving nature of React and Node ecosystems, emphasizing the importance of troubleshooting skills and adaptable solutions for unforeseen errors.
  
- **Clipboard Functionality:**
  - Integrated a React library for efficient clipboard operations.
