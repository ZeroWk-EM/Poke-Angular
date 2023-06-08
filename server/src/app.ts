import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToMongoDB } from "./config/connectionDB.config";

const app = express();
dotenv.config();

app.use(cors());

app.get("/", (_: Request, res: Response) => {
  return res.status(200).send({
    status: 200,
    message: "Server is running",
    endpoint: [],
  });
});

const PORT = process.env.PORT || 3000;

import authRoutes from "./routes/user.routes"

app.use("/v1/auth",authRoutes)

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT} `);
  connectToMongoDB();
});
