import { useState, useEffect } from "react";
import ThemeToggle from "./components/ToggleTheme";
import CounterCard from "./components/CounterCard";
import "./App.css";

function App() {
  const [counters, setCounters] = useState(() => {
    const saved = localStorage.getItem("counters");
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counters));
  }, [counters]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function addCounter() {
    setCounters([
      ...counters,
      { id: Date.now(), count: 0 }
    ]);
  }

  function increment(id) {
    setCounters(
      counters.map(counter =>
        counter.id === id
          ? { ...counter, count: counter.count + 1 }
          : counter
      )
    );
  }

  function decrement(id) {
    setCounters(
      counters.map(counter =>
        counter.id === id
          ? { ...counter, count: counter.count - 1 }
          : counter
      )
    );
  }

  function toggleTheme() {
    setTheme(prevTheme =>
      prevTheme === "light" ? "dark" : "light"
    );
  }

  function reset(id) {
    setCounters(
      counters.map(counter =>
        counter.id === id
          ? { ...counter, count: 0 }
          : counter
      )
    );
  }

  function remove(id) {
    setCounters(
      counters.filter(counter => counter.id !== id)
    );
  }

  function resetAll() {
    setCounters(
      counters.map(counter => ({
        ...counter,
        count: 0
      }))
    );
  }

  const grandTotal = counters.reduce(
    (total, counter) => total + counter.count,
    0
  );

  return (
    <div className={`app-container ${theme}`}>
      <h1 className="app-title">Multi Counter Dashboard</h1>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <div className="button-group">
        <button className="primary-btn" onClick={addCounter}>Add Counter</button>
        <button className="primary-btn" onClick={resetAll}>Reset All</button>
      </div>

      <h2 className="total-text"> Grand Total : {grandTotal}
      </h2>

      <div className="counter-grid">
        {counters.map(counter => (
          <CounterCard
            key={counter.id}
            id={counter.id}
            count={counter.count}
            onIncrement={increment}
            onDecrement={decrement}
            onReset={reset}
            onRemove={remove}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
