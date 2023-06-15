import express, { Request, Response, Router } from "express";
import { Course } from "../models/coursesModel";
import { isAuthenticated } from "../middleware/authMiddleware";

const router: Router = express.Router();
router.get("/courses", isAuthenticated, async (req: Request, res: Response) => {
  const courses = await Course.find({});
  res.json(courses);
});

router.get(
  "/courseDetail/:id",
  isAuthenticated,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const courses = await Course.findOne({ id });
    res.json(courses);
  }
);

export default router;
