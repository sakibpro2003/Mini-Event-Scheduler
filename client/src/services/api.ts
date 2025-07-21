import type { Event } from "../types";

// backend URL
const BASE_URL = "http://localhost:5000/events";

export const fetchEvents = async (): Promise<Event[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};


