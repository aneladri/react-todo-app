import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      text: input,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  const toggleTaskDone = (indexToToggle) => {
    const updatedTasks = [...tasks];
    updatedTasks[indexToToggle].done = !updatedTasks[indexToToggle].done;
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>My Todo App</h1>

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
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              className="task-text"
              onClick={() => toggleTaskDone(index)}
              style={{
                textDecoration: task.done ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;