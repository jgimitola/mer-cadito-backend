import express from 'express';

import Review from '../models/Review.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Reviews' });
});

export default router;
