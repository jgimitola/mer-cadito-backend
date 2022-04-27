import express from 'express';

import Cart from '../models/Cart.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const query = req.query;
  try {
    const cart = await Cart.find({
      user_id: query.user_id,
      sold: false,
    });
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    const cart = await Cart.create({
      product_id: body.product_id,
      user_id: body.user_id,
    });
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
});

router.post('/buy', async (req, res, next) => {
  const body = req.body;
  try {
    await Cart.updateMany(
      { user_id: body.user_id, sold: false },
      { sold: true }
    );
    res.status(200).json({ message: 'Successfully bought' });
  } catch (error) {
    next(error);
  }
});

router.delete('/', async (req, res, next) => {
  const query = req.query;
  try {
    const cart = await Cart.findByIdAndDelete(query.item_id);
    res.status(204).json(cart);
  } catch (error) {
    next(error);
  }
});

export default router;
