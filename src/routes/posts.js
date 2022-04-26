import express from 'express';

import Post from '../models/Post.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const query = req.query;
  try {
    if (query.user_id) {
      const posts = await Post.find({ owner_id: query.user_id });
      res.status(200).json([...posts]);
    }

    if (query.post_id) {
      const post = await Post.findById(query.post_id);
      res.status(200).json(post);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/recent', async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ created_date: -1 });
    res.status(200).json([...posts]);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    const post = await Post.create({ ...body });
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
});

export default router;
