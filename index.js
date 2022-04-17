import "dotenv/config";
import express from "express";
import cors from "cors";

import userRoute from "./src/users/route.js";

const app = express();

/* Constants */
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("Mer CADITO API");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

process.on("SIGINT", () => {
  process.exit(0);
});
