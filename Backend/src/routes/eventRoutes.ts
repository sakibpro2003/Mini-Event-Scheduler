import express from "express";
import {
  createEvent,
  getEvents,
  archiveEvent,
  deleteEvent,
} from "../controllers/eventController";

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.put("/:id", archiveEvent);
router.delete("/:id", deleteEvent);

export default router;
