import express from 'express';
import cors from 'cors';
import { db } from './db';
import { portfolioItems } from './db/schema';
import { eq } from 'drizzle-orm';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get all portfolio items
app.get('/api/portfolio', async (req, res) => {
  try {
    const items = await db.query.portfolioItems.findMany();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch portfolio items' });
  }
});

// Create a new portfolio item
app.post('/api/portfolio', async (req, res) => {
  try {
    const { title, description, imageUrl, projectUrl } = req.body;
    await db.insert(portfolioItems).values({
      title,
      description,
      imageUrl,
      projectUrl,
    });
    res.status(201).json({ message: 'Portfolio item created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create portfolio item' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
