import { Request, Response } from "express";
import { events, Event } from "../data/events";
import { categorizeEvent } from "../utils/categorize";
import { v4 as uuidv4 } from "uuid";

export const createEvent = (req: Request, res: Response) => {
  const { title, date, time, notes } = req.body;

  if (!title || !date || !time) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const category = categorizeEvent(`${title} ${notes || ""}`);

  const newEvent: Event = {
    id: uuidv4(),
    title,
    date,
    time,
    notes,
    category,
    archived: false,
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
};

export const getEvents = (_req: Request, res: Response) => {
  const sorted = events.sort(
    (a, b) =>
      new Date(`${a.date}T${a.time}`).getTime() -
      new Date(`${b.date}T${b.time}`).getTime()
  );
  res.json(sorted);
};

export const archiveEvent = (req: Request, res: Response) => {
  const event = events.find((e) => e.id === req.params.id);
  if (!event) return res.status(404).json({ error: "Event not found." });
  event.archived = true;
  res.json(event);
};
export const updateEvent = (req: Request, res: Response) => {
  const event = events.find((e) => e.id === req.params.id);
  if (!event) return res.status(404).json({ error: "Event not found." });
  event.archived = true;
  res.json(event);
};

export const deleteEvent = (req: Request, res: Response) => {
  const index = events.findIndex((e) => e.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Event not found." });
  events.splice(index, 1);
  res.sendStatus(204);
};
