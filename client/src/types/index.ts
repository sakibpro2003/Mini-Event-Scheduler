export interface Event {
  id: string;
  title: string;
  // key?:string,
  // event?:Event,
  date: string;
  time: string;
  notes?: string;
  category: "Work" | "Personal" | "Other";
  archived: boolean;
}
