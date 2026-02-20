function Statistics({ todos }) {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="statistics">
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>
    </div>
  );
}

export default Statistics;