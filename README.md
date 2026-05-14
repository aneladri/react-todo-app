# Smart Task Manager 🚀

## 📌 Overview

Smart Task Manager is a full-stack task management application built with **React**, **FastAPI**, and **SQLite**.

The project demonstrates:

* frontend-backend integration
* REST API development
* database persistence
* product-focused features
* modern full-stack architecture

---

## ✨ Features

### ✅ Task Management

* Add tasks
* Delete tasks
* Mark tasks complete/incomplete

### 📊 Product Features

* Task priorities (Low / Medium / High)
* Due dates
* Overdue task detection
* Completion statistics
* High-priority tracking

### 🗄️ Backend Features

* REST APIs with FastAPI
* SQLite database persistence
* SQLAlchemy ORM
* CORS configuration

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* CSS

### Backend

* FastAPI
* Python
* SQLAlchemy
* SQLite

### Tools

* Git
* GitHub

---

## 📂 Project Structure

```text
smart-task-manager/
│
├── frontend/
│   ├── src/
│   ├── package.json
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   ├── tasks.db
│
└── README.md
```

---

## ⚙️ Prerequisites

### 1. Install Node.js

Download:
https://nodejs.org

Verify:

```bash
node -v
npm -v
```

---

### 2. Install Python 3

Download:
https://www.python.org/downloads/

Verify:

```bash
python --version
```

or

```bash
python3 --version
```

---

## ▶️ Setup & Run

# 1️⃣ Clone Repository

```bash
git clone https://github.com/aneladri/react-todo-app.git
cd react-todo-app
```

---

# 2️⃣ Backend Setup

```bash
cd backend
python -m venv venv
```

### Activate virtual environment

Mac/Linux:

```bash
source venv/bin/activate
```

Windows:

```bash
venv\Scripts\activate
```

### Install dependencies

```bash
pip install "fastapi[standard]"
pip install sqlalchemy
```

### Run backend

```bash
python -m fastapi dev main.py
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

# 3️⃣ Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| GET    | /tasks             | Fetch all tasks        |
| POST   | /tasks             | Add new task           |
| DELETE | /tasks/{id}        | Delete task            |
| PATCH  | /tasks/{id}/toggle | Toggle task completion |

---

## 📊 Product Metrics

The application tracks:

* total tasks
* completed tasks
* overdue tasks
* high-priority tasks

---

## 🧠 What I Learned

### Frontend

* React state management
* API integration
* Component-based UI

### Backend

* FastAPI development
* REST APIs
* SQLAlchemy ORM
* SQLite integration

### Full Stack

* Frontend/backend communication
* CORS handling
* CRUD operations
* Persistent data storage

---

## 🚀 Future Improvements

* User authentication
* Task categories
* Drag-and-drop UI
* Dark mode
* Deployment (Vercel + Render)
* PostgreSQL integration
* Docker support

---

## 📸 Screenshots

*Add screenshots here later*

---

## 📫 Author

**Aneesh Neladri**

GitHub:
https://github.com/aneladri
