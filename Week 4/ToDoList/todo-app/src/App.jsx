import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import Statistics from "./components/Statistics";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos(prev => [...prev, todo]);
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function editTodo(id, updatedText) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
  }

  function filteredTodos() {
    return todos
      .filter(todo => {
        if (filter === "Active") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        return true;
      })
      .filter(todo =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }

  return (
    <div className="app">
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodo} />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <TodoList
        todos={filteredTodos()}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />

      <Statistics todos={todos} />
    </div>
  );
}

export default App;