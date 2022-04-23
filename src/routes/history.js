import express from 'express';

import User from '../models/User.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'History' });
});

export default router;
