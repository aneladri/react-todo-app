from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tasks = [
    {"id": 1, "text": "Learn React", "done": False},
    {"id": 2, "text": "Build FastAPI backend", "done": False},
]

class Task(BaseModel):
    text: str
    done: bool = False

@app.get("/")
def home():
    return {"message": "Backend is running"}

@app.get("/tasks")
def get_tasks():
    return tasks

@app.post("/tasks")
def add_task(task: Task):
    new_task = {
        "id": len(tasks) + 1,
        "text": task.text,
        "done": task.done,
    }
    tasks.append(new_task)
    return new_task