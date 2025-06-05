import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { setUserRoutes } from "./routes/userRoutes";

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Register user routes
app.use("/", setUserRoutes());

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
