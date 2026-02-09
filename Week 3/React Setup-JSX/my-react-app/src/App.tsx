function Header() {
  return <h1>My First React App</h1>;
}

function Button() {
  return <button>Click Me</button>;
}

function Footer() {
  return <p>© 2026 Talal Rashid</p>;
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Header  />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
