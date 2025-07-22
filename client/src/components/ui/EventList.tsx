import { useEffect, useState } from "react";
import { fetchEvents } from "@/services/api";
import type { Event } from "@/types";
import EventCard from "./EventCard";

interface Props {
  refresh: boolean;
}

export default function EventList({ refresh }: Props) {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, [refresh]);

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events?.filter((event) => event?.category === selectedCategory);

  return (
    <div>
      {/* Filter dropdown */}
      <div className="mb-4 flex gap-2 items-center justify-center">
        <label htmlFor="category" className="text-sm font-medium text-gray-700">
          Filter by category:
        </label>
        <select
          id="category"
          className="border border-gray-300 rounded-md p-1 text-sm"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Event Cards */}
      {filteredEvents?.length > 0 ? (
        filteredEvents?.map((event) => (
          <EventCard
            key={event?.id}
            event={event}
            onAction={() => fetchEvents().then(setEvents)}
          />
        ))
      ) : (
        <p className="text-gray-500">No events found for this category.</p>
      )}
    </div>
  );
}
