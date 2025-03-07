import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

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
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <div className="flex gap-2 mb-4">
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div>
        {tasks.map((t, index) => (
          <Card key={index} className="flex justify-between items-center p-2 mb-2">
            <CardContent>{t}</CardContent>
            <Button variant="ghost" onClick={() => removeTask(index)}>
              <Trash2 className="w-5 h-5 text-red-500" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
