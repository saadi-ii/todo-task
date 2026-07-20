# Clickup Clone

This is a full-stack clone of Clickup, featuring a Next.js React frontend and an Express/Mongoose Node.js backend.

## Project Structure

The project is organized as a monorepo with two main directories:

- `frontend/`: The Next.js web application.
- `backend/`: The Express.js REST API.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a cloud instance like MongoDB Atlas)

## Getting Started

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Set up environment variables:
Create a `.env` file in the `backend/` directory based on your required configuration.
At minimum, you will likely need:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend development server:
```bash
npm run dev
```

### 2. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Set up environment variables (if required):
Create a `.env.local` file in the `frontend/` directory if your frontend relies on environment variables (e.g., API URLs).

Start the frontend development server:
```bash
npm run dev
```

The frontend should now be running on [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
