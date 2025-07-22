import type { Event } from "../types";

// backend URL
const BASE_URL = "http://localhost:5000/events";

export const fetchEvents = async (): Promise<Event[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createEvent = async (
  eventData: Omit<Event, "id" | "category" | "archived">
) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });
  return res.json();
};

export const archiveEvent = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
  });
  return res.json();
};

export const deleteEvent = async (id: string) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
