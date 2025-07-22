import { useState } from "react";
import EventForm from "./components/ui/EventForm";
import EventList from "./components/ui/EventList";


export default function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Mini Event Scheduler
      </h1>
      <EventForm onAdd={triggerRefresh} />
      <EventList refresh={refresh} />
    </div>
  );
}
