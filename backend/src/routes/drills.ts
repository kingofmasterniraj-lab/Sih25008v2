import { Router } from "express";
import { db } from "../db";

const router = Router();

// Get drills
router.get("/", (req, res) => {
  res.json(db.drills);
});

// Add drill
router.post("/", (req, res) => {
  const { title, description, region } = req.body;
  const drill = { id: db.drills.length + 1, title, description, region };
  db.drills.push(drill);
  res.json(drill);
});

export default router;
