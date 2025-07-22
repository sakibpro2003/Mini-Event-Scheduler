# Mini Event Scheduler with AI Categorization

A full-stack event scheduling application built with React, TypeScript, Tailwind CSS, and Node.js/Express backend.  
It allows users to create, view, archive, and delete events, with automatic AI-like categorization of events as **Work**, **Personal**, or **Other** based on keywords in the event title and notes.

---

## Features

- **Create, Read, Update, Delete (CRUD)** events with title, date, time, and optional notes.
- Automatic event **category classification** using simple keyword matching.
- Events displayed sorted by date and time in ascending order.
- Mark events as archived (status toggle).
- Filter events by category on the frontend (Work, Personal, Other, All).
- Responsive and clean UI styled with Tailwind CSS.
- Basic error handling on the frontend.
- Backend RESTful API implemented with Express and TypeScript.
- In-memory event storage for simplicity.
- Environment variable support for backend port configuration.

---

## Folder Structure

/client # React frontend application
/server # Node.js + Express backend API


---

## Setup and Run Instructions

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

---

### Backend Setup

```bash
cd server
npm install
# Or: yarn install
npm run dev
# Or: yarn dev


The backend runs on http://localhost:4000 by default (configurable via .env).

Available API endpoints:

Method	    Endpoint	    Description
POST	    /events	        Create a new event
GET	        /events	        Get all events sorted by date/time
PUT	        /events/:id	    Archive an event (mark archived)
DELETE	    /events/:id	    Delete an event


cd client
npm install
# Or: yarn install
npm run dev
# Or: yarn dev
