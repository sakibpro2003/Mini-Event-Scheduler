// import { createEvent } from "@/services/api";
// import { useState } from "react";

// interface Props {
//   onAdd: () => void;
// }

// export default function EventForm({ onAdd }: Props) {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [notes, setNotes] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!title || !date || !time)
//       return alert("Title, date, and time are required");

//     await createEvent({ title, date, time, notes });
//     setTitle("");
//     setDate("");
//     setTime("");
//     setNotes("");

//     // refresh event list
//     onAdd();
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white shadow-md p-4 rounded-lg mb-6"
//     >
//       <h2 className="text-lg font-semibold mb-4 text-center">Add New Event</h2>
//       <input
//         className="input"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <input
//         className="input"
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         required
//       />
//       <input
//         className="input"
//         type="time"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//         required
//       />
//       <textarea
//         className="input"
//         value={notes}
//         onChange={(e) => setNotes(e.target.value)}
//         placeholder="Notes (optional)"
//       />
//       <button type="submit" className="btn w-full mt-3">
//         Add Event
//       </button>
//     </form>
//   );
// }


import { createEvent } from "@/services/api";
import { useState } from "react";

interface Props {
  onAdd: () => void;
}

export default function EventForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loader state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !time)
      return alert("Title, date, and time are required");

    setLoading(true);
    try {
      await createEvent({ title, date, time, notes });
      setTitle("");
      setDate("");
      setTime("");
      setNotes("");
      onAdd();
    } catch (error) {
      alert("Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-4 rounded-lg mb-6"
    >
      <h2 className="text-lg font-semibold mb-4 text-center">Add New Event</h2>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        className="input"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        className="input"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <textarea
        className="input"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes (optional)"
      />

      <button type="submit" className="btn w-full mt-3" disabled={loading}>
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="loader loader-sm border-t-transparent border-white rounded-full w-4 h-4 animate-spin" />
            Adding...
          </span>
        ) : (
          "Add Event"
        )}
      </button>
    </form>
  );
}
