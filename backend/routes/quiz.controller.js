import express from "express";
const router = express.Router();

router.get("/quiz", (req, res) => {
  res.json({ message: "Quiz route is working!" });
});

export default router;
