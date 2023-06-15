import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import courseRouter from "./routes/courseRoutes";
import addNewUser from "./routes/addNewUser";
import authorize from "./routes/authorizeUser";
import userRoutes from "./routes/userRoutes";

dotenv.config();
mongoose.connect(process.env.CONNECTION_STRING || "", {});

mongoose.connection.on("open", () => {
  console.log(`Online Training DB connected !`);
});

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/", courseRouter);
app.use("/signup", addNewUser);
app.use("/auth", authorize);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server running @ port ${port} !`);
});
