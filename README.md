# 🗓️ Mini Event Scheduler with AI Categorization

This is a full-stack web application for scheduling events like meetings or reminders. Users can create, view, update, and delete events. Each event includes a title, date, time, optional notes, and is automatically categorized as **Work**, **Personal**, or **Other** using a simple AI-like keyword detection system.

Built as part of the **Full-Stack Engineering Intern Coding Task**, the app demonstrates proficiency in React, TypeScript, Node.js, Express, Tailwind CSS, and curiosity about AI integration.

---

## 📁 Project Structure

/Backend
/client



---

## 🚀 Features

- ✅ Create, view, delete, and archive events  
- ✅ Events are auto-categorized as **Work**, **Personal**, or **Other**  
- ✅ Responsive design using Tailwind CSS  
- ✅ Simple AI categorization logic (keyword-based)  
- ✅ Filter events by category  
- ✅ Basic error handling for API failures  

---

## 🧠 AI Categorization Logic

The backend categorizes events into:

- **Work**: if the title/notes contain keywords like `meeting`, `project`, `client`
- **Personal**: if the title/notes include `birthday`, `family`, `friends`
- **Other**: if no relevant keywords are found

The categorization is case-insensitive and applies when creating an event.

---

## 📦 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS  
- **Backend**: Node.js, Express, TypeScript  
- **Styling**: Tailwind CSS  
- **Testing**: (Optional) Jest for categorization logic  
- **Deployment**: Vercel (Frontend), Render/Glitch/Local (Backend)  

---

## 🔧 Getting Started

### 🖥️ Prerequisites

- Node.js (v18+)
- npm 

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sakibpro2003/Mini-Event-Scheduler.git
cd mini-event-scheduler


cd server
npm install
npm run dev

Server will start on http://localhost:5000
You can change the port via .env file

cd client
npm install
npm run dev

VITE_API_BASE_URL=http://localhost:5000 in .env file will allow to run the project on local machine.

Frontend will run at http://localhost:5173
Make sure the frontend points to the backend's URL in api.ts or wherever API calls are configured

🔹 POST /events
Create a new event.

Request body:
{
  "title": "Project Meeting",
  "date": "2025-07-23",
  "time": "14:00",
  "notes": "Client sync-up"
}



🔹 GET /events
Retrieve all events, sorted by date and time.

🔹 PUT /events/:id
Update an event's archived status to true.

🔹 DELETE /events/:id
Delete an event by ID

## 🙌 Author

**MD Sakib Prodhan**  
[Portfolio](https://my-portfolio-three-iota-17.vercel.app/) | [GitHub](https://github.com/sakibpro2003) | [LinkedIn](https://linkedin.com/in/sakibprodhan00) | sakibprodhan2003@gmail.com


🌐 Live Demo
Live Link: [https://your-frontend.vercel.app](https://mini-event-schedular-frontend.vercel.app/)
