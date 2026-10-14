# SkillBridge MERN backend

Backend API for the existing React/Vite `client`. Uses Node.js, Express, MongoDB/Mongoose, bcryptjs and JWT.

## Requirements
- Node.js LTS
- MongoDB running locally, or a MongoDB Atlas connection string

## Install
Open a terminal in this `server` folder and run:

```bash
npm install
```

Copy `.env.example` to a new file named `.env`. Set a long random `JWT_SECRET`. For local MongoDB use:

```text
MONGO_URI=mongodb://127.0.0.1:27017/skillbridge
```

Keep `.env private; do not commit or share it.

## Start
```bash
npm run dev
```
Or `npm start`. Open `http://localhost:5000/`; it should return `{"message":"SkillBridge API is running"}`.

## Endpoints
Public:
- `POST /api/auth/register` JSON `{ "name":"Amit", "email":"amit@example.com", "password":"yourpassword" }`
- `POST /api/auth/login` JSON `{ "email":"amit@example.com", "password":"yourpassword" }`

Register/login return `token` and `user`. Send `Authorization: Bearer YOUR_TOKEN` for protected requests.

Protected:
- `GET /api/auth/me`
- `GET /api/progress/Java%20Developer`
- `PUT /api/progress/Java%20Developer` JSON `{ "completedTopics":["Core Java","OOP"] }`
- `POST /api/quizzes/scores` JSON `{ "role":"Java Developer", "quizName":"Java Basics", "score":4, "totalQuestions":5 }`
- `GET /api/quizzes/scores`

## Run both parts
Use two VS Code terminals:
1. In `SkillBridge/server`: `npm run dev`
2. In `SkillBridge/client`: `npm run dev`

Open the Vite URL (usually `http://localhost:5173`). The existing frontend continues to run, but its login, progress, and quiz screens must still be connected to these API routes before they save data to MongoDB.
