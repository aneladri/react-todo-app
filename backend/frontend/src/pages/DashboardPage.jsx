import { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:8000";

function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    const response = await fetch(`${API_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (input.trim() === "") return;

    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: input,
        done: false,
        priority,
        due_date: dueDate || null,
      }),
    });

    setInput("");
    setPriority("medium");
    setDueDate("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchTasks();
  };

  const toggleTask = async (id) => {
    await fetch(`${API_URL}/tasks/${id}/toggle`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const isOverdue = (task) => {
    if (!task.due_date || task.done) return false;
    const today = new Date().toISOString().split("T")[0];
    return task.due_date < today;
  };

  const completedTasks = tasks.filter((task) => task.done).length;
  const overdueTasks = tasks.filter((task) => isOverdue(task)).length;
  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "high" && !task.done
  ).length;

  return (
    <div className="app-container">
      <div className="header-row">
        <h1>Smart Task Manager 🚀</h1>
        <button onClick={logout}>Logout</button>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <strong>{tasks.length}</strong>
          <span>Total</span>
        </div>

        <div className="stat-card">
          <strong>{completedTasks}</strong>
          <span>Completed</span>
        </div>

        <div className="stat-card">
          <strong>{overdueTasks}</strong>
          <span>Overdue</span>
        </div>

        <div className="stat-card">
          <strong>{highPriorityTasks}</strong>
          <span>High Priority</span>
        </div>
      </div>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={isOverdue(task) ? "overdue-task" : ""}>
            <div>
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

              <div className="task-meta">
                Priority: {task.priority}
                {task.due_date && <> | Due: {task.due_date}</>}
                {isOverdue(task) && <> | Overdue</>}
              </div>
            </div>

            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardPage;