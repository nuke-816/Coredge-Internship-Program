import { useState } from "react";

function LoginForm({ onLogin }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (inputValue.trim() === "") {
      setError("Username is required");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      onLogin(inputValue);
      setLoading(false);
    }, 1000);
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input className="input-field" type="text"placeholder="Enter username" value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {error && <p className="error-text">{error}</p>}

      <button
        className="primary-btn"type="submit"disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default LoginForm;
