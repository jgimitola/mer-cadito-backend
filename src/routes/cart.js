import express from 'express';

import Cart from '../models/Cart.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Cart' });
});

export default router;
