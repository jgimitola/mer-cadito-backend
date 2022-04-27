import express from 'express';

import Review from '../models/Review.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const query = req.query;

  const predicate = query.user_id
    ? { user_id: query.user_id }
    : { product_id: query.product_id };

  try {
    const reviews = await Review.find(predicate);
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    const review = await Review.create({
      user_id: body.user_id,
      product_id: body.product_id,
      rating: body.rating,
      description: body.description,
    });
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
});

export default router;
