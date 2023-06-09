import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToMongoDB } from "./config/connectionDB.config";
import authRoutes from "./routes/user.routes";
import pokedexRoutes from "./routes/pokedex.routes";

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

app.use("/v1/auth", authRoutes);
app.use("/v1/pokedex", pokedexRoutes);

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT} `);
  connectToMongoDB();
});
