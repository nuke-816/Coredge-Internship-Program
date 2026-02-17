function Dashboard({ username, onLogout }) {
  return (
    <div className="card">
      <h2>Welcome, {username}</h2>

      <p className="protected-text">
        This is protected content.
      </p>

      <button className="primary-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
