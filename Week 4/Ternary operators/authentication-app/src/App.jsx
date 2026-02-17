import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/DashBoard";
import "./App.css";

function App() {
  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("username") ? true : false;
  });

  function handleLogin(name) {
    setUsername(name);
    setIsLoggedIn(true);
    localStorage.setItem("username", name);
  }

  function handleLogout() {
    setUsername("");
    setIsLoggedIn(false);
    localStorage.removeItem("username");
  }

  return (
    <div className="app-container">
      <h1 className="title">Authentication Demo</h1>

      {isLoggedIn ? (
        <Dashboard username={username} onLogout={handleLogout} />
      ) : (
      <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
