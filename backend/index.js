import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("init");
});

async function startServer() {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(4000, () => console.log("Server has started on port http://localhost:4000"));
  } catch (err) {
    console.log(err);
  }
}

startServer();
