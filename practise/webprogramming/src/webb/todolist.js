import { useState } from "react";

export default function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "10px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center" }}>To-Do List</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
          style={{ flex: 1, padding: "5px" }}
        />
        <button onClick={addTask} style={{ padding: "5px 10px" }}>Add</button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between", padding: "5px", borderBottom: "1px solid #ddd" }}>
            {t}
            <button onClick={() => removeTask(index)} style={{ background: "red", color: "white", border: "none", padding: "3px 6px", cursor: "pointer" }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
