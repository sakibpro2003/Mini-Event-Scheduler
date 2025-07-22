// client/src/services/api.ts
import type { Event } from "@/types";

//local
// const BASE_URL = "http://localhost:5000/events";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchEvents(): Promise<Event[]> {
  console.log(BASE_URL,"url")
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch events");
    return await res.json();
  } catch (err) {
    throw new Error((err as Error).message || "Unknown error");
  }
}

export async function createEvent(event: Partial<Event>): Promise<Event> {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
    if (!res.ok) throw new Error("Failed to create event");
    return await res.json();
  } catch (err) {
    throw new Error((err as Error).message || "Unknown error");
  }
}

export async function archiveEvent(id: string): Promise<void> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { method: "PUT" });
    if (!res.ok) throw new Error("Failed to archive event");
  } catch (err) {
    throw new Error((err as Error).message || "Unknown error");
  }
}

export async function deleteEvent(id: string): Promise<void> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete event");
  } catch (err) {
    throw new Error((err as Error).message || "Unknown error");
  }
}
