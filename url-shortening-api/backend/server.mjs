import express from 'express';
import cors from 'cors';
import { shortenUrl } from './api.mjs';




const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/shorten', async (req, res) => {
  const { url } = req.body;
  try {
    const shortenedUrl = await shortenUrl(url);
    res.json({ shortenedUrl });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
