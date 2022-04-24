import express from 'express';

import User from '../models/User.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Users' });
});

router.post('/login', async (req, res, next) => {
  const body = req.body;

  try {
    const user = await User.findOne({ username: body.username });

    if (!user._id || user.password !== body.password) return next({ code: 1 });

    res.status(200).json({ _id: user._id });
  } catch (error) {
    next(error);
  }
});

router.post('/prev-login', async (req, res, next) => {
  const { user_id } = req.body;

  try {
    const { _id } = await User.findById(user_id);
    res.status(200).json({ _id });
  } catch (error) {
    next(error);
  }
});

router.post('/register', async (req, res, next) => {
  const body = req.body;
  const user = new User({
    display_name: body.display_name,
    username: body.username,
    password: body.password,
  });

  try {
    const { _id } = await user.save();
    res.json({ _id });
  } catch (error) {
    next(error);
  }
});

export default router;
