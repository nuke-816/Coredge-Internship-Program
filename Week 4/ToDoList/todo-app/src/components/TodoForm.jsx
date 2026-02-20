import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      priority,
      dueDate
    };

    addTodo(newTodo);
    setText("");
    setDueDate("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add todo..."
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <select
        value={priority}
        onChange={e => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;