function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="primary-btn" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggle;
