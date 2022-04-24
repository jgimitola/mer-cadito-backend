import express from 'express';

import User from '../models/User.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Users' });
});

router.post('/register', async (req, res, next) => {
  const body = req.body;
  const user = new User({
    display_name: body.display_name,
    username: body.username,
    password: body.password,
  });

  try {
    const { _id, display_name, username } = await user.save();

    res.json({ _id, display_name, username });
  } catch (error) {
    next(error);
  }
});

export default router;
