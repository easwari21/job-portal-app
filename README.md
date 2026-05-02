# Job Portal Application 🚀

A modern, responsive, and robust Job Portal built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This platform connects employers with job seekers, offering a seamless experience to browse listings, post jobs, and apply for roles.

## 🌟 Features

- **Modern UI/UX**: Premium dark mode design with glassmorphism effects and smooth micro-animations.
- **RESTful API**: A scalable Express.js backend handling job creations and data fetching.
- **Responsive Design**: Looks great on desktop, tablet, and mobile devices.
- **Vite Integration**: Extremely fast frontend build tooling.

## 💻 Tech Stack

- **Frontend**: React.js, Vite, React Router DOM, Axios, Vanilla CSS.
- **Backend**: Node.js, Express.js, Mongoose, dotenv, CORS.
- **Database**: MongoDB (Local or Atlas).

## 🛠️ Installation & Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You will also need a running MongoDB server (either locally installed or a free cluster on MongoDB Atlas).

### 1. Clone the repository
```bash
git clone https://github.com/easwari21/job-portal-app.git
cd job-portal-app
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder and add your environment variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
```
Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies:
```bash
cd frontend
npm install
```

Start the React development server:
```bash
npm run dev
```

The application will now be running on `http://localhost:5173/` and the backend on `http://localhost:5000/`.

## 📂 Project Structure

```
job-portal-app/
├── backend/
│   ├── models/        # Mongoose Database Models
│   ├── routes/        # Express API Routes
│   ├── package.json
│   └── server.js      # Entry point for backend
├── frontend/
│   ├── src/           # React Components and Pages
│   ├── index.html
│   ├── package.json
│   └── vite.config.js # Vite config & API Proxy
└── .gitignore
```
