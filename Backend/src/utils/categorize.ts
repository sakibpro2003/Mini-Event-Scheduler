const workKeywords = ["meeting", "project", "client", "deadline", "report"];
const personalKeywords = ["birthday", "family", "friend", "party", "vacation"];

export const categorizeEvent = (
  text: string
): "Work" | "Personal" | "Other" => {
  const lower = text.toLowerCase();
  if (workKeywords.some((word) => lower.includes(word))) return "Work";
  if (personalKeywords.some((word) => lower.includes(word))) return "Personal";
  return "Other";
};
