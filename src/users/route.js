import express from "express";

import data from "../database/db.js";

const router = express.Router();

router.post("/login/:id", async (req, res) => {
  let id = +req.params.id;

  const user = data.users.find((user) => user._id === id);
  res.json({ res: { ...user, password: undefined } });
});

router.post("/prev-login/:id", async (req, res) => {
  const body = req.body;

  const user = data.users.find((user) => user._id === body.user_id);
  res.json({ res: { ...user, password: undefined } });
});

export default router;
