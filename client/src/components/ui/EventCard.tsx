import type { Event } from "@/types";
import { archiveEvent, deleteEvent } from "@/services/api";
import { Archive, Trash2 } from "lucide-react";

interface Props {
  event: Event;
  onAction: () => void;
}

export default function EventCard({ event, onAction }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl mt-3 p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${
            event.archived
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {event.archived ? "Archived" : "Active"}
        </span>
      </div>

      <p className="text-gray-600 mb-1">
        <strong>Date:</strong> {event.date} &nbsp;&nbsp; <strong>Time:</strong>{" "}
        {event.time}
      </p>

      {event.notes && (
        <p className="text-gray-700 mt-1">
          <strong>Notes:</strong> {event.notes}
        </p>
      )}

      {/* <p className="mt-1 text-gray-700">
        <strong>Category:</strong>{" "}
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
          {event.category}
        </span>
      </p> */}
      <p className="mt-1 text-gray-700">
        <strong>Category:</strong>{" "}
        <span
          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset
      ${
        event.category === "Work"
          ? "bg-blue-50 text-blue-600 ring-blue-500/20"
          : event.category === "Personal"
          ? "bg-green-50 text-green-600 ring-green-500/20"
          : event.category === "Other"
          ? "bg-red-50 text-red-600 ring-red-500/20"
          : "bg-gray-50 text-gray-600 ring-gray-500/10"
      }
    `}
        >
          {event.category}
        </span>
      </p>

      <div className="mt-4 flex gap-3">
        {!event.archived && (
          <button
            onClick={() => archiveEvent(event.id).then(onAction)}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg shadow transition"
          >
            <Archive size={16} /> Archive
          </button>
        )}
        <button
          onClick={() => deleteEvent(event.id).then(onAction)}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow transition"
        >
          <Trash2 size={16} /> Delete
        </button>
      </div>
    </div>
  );
}
