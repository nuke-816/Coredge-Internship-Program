import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;