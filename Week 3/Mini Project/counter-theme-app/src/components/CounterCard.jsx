function CounterCard({
  id,
  count,
  onIncrement,
  onDecrement,
  onReset,
  onRemove
}) {
  return (
    <div className="counter-card">
      <h2>Count: {count}</h2>

      <div className="button-row">
        <button className="primary-btn" onClick={() => onIncrement(id)}>+</button>
        <button className="primary-btn" onClick={() => onDecrement(id)}>-</button>
      </div>

      <div className="button-row">
        <button className="primary-btn" onClick={() => onReset(id)}>Reset</button>
        <button className="primary-btn" onClick={() => onRemove(id)}>X</button>
      </div>

    </div>
  );
}

export default CounterCard;
