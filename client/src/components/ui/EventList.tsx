import { useEffect, useState } from "react";
import { fetchEvents } from "@/services/api";
import type { Event } from "@/types";
import EventCard from "./EventCard";

interface Props {
  refresh: boolean;
}

export default function EventList({ refresh }: Props) {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, [refresh]);

  if (!events.length) return <p>No events yet. Add one!</p>;

  return (
    <div>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onAction={() => fetchEvents().then(setEvents)}
        />
      ))}
    </div>
  );
}
