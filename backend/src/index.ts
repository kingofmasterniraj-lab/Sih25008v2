import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import drillRoutes from "./routes/drills";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/drills", drillRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
