import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const fetchTasks = async () => {
    const response = await fetch("http://127.0.0.1:8000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (input.trim() === "") return;

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
  };

  return (
    <div className="app-container">
      <h1>Smart Task Manager</h1>

      <div className="input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <p>Total tasks: {tasks.length}</p>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className="task-text">
              {task.text} {task.done ? "✅" : ""}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;