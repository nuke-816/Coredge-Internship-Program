import { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleEdit() {
    editTodo(todo.id, editText);
    setIsEditing(false);
  }

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <div>
            <strong>{todo.text}</strong>
            <p>Priority: {todo.priority}</p>
            {todo.dueDate && <p>Due: {todo.dueDate}</p>}
          </div>

          <div className="buttons">
            <button onClick={() => toggleComplete(todo.id)}>✓</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;