# Smart Task Manager

## 📌 Overview
A full-stack task management application built using React and FastAPI. This project demonstrates frontend-backend integration and real-world application structure.

---

## 🚀 Features
- Add tasks
- View tasks from backend
- Backend API integration
- Clean UI with React
- REST API using FastAPI

---

## 🛠️ Tech Stack
- Frontend: React (Vite)
- Backend: FastAPI (Python)
- Styling: CSS

---

## ⚙️ Prerequisites

### 1. Install Node.js (for React)
Download from: https://nodejs.org

Verify:
node -v
npm -v

---

### 2. Install Python 3
Download from: https://www.python.org/downloads/

Verify:
python --version
or
python3 --version

---

## 📂 Project Structure
smart-task-manager/
  frontend/
  backend/

---

## ▶️ How to Run the Project

### 🔹 Backend (FastAPI)
cd backend
python -m venv venv

Activate:
Mac/Linux:
source venv/bin/activate

Windows:
venv\Scripts\activate

Install:
pip install "fastapi[standard]"

Run:
fastapi dev main.py

Backend URL:
http://127.0.0.1:8000

---

### 🔹 Frontend (React)
cd frontend
npm install
npm run dev

Frontend URL:
http://localhost:5173

---

## 🔗 API Endpoints
GET /tasks — Fetch all tasks  
POST /tasks — Add new task  

---

## 🚀 Future Improvements
- Add delete/update APIs
- Add database
- Improve UI

---

## 📫 Author
Aneesh Neladri
