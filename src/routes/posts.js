import express from 'express';

import Post from '../models/Post.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Posts' });
});

export default router;
