import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Load tasks when app starts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (input.trim() === "") return;

    try {
      await fetch("http://127.0.0.1:8000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: input,
          done: false,
        }),
      });

      setInput("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/tasks/${id}`, {
        method: "DELETE",
      });

      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Toggle complete
  const toggleTask = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/tasks/${id}/toggle`, {
        method: "PATCH",
      });

      fetchTasks();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Smart Task Manager 🚀</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <p>Total tasks: {tasks.length}</p>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              className="task-text"
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.done ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(task.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;