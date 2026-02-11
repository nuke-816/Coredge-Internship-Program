import Button from "./Components/Button";
import Card from "./Components/Card";
import Badge from "./Components/Badge";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "120px" }}>

      <h1>Demo Page</h1>

      <Card>
        <h2>Buttons</h2>
        <Button variant="primary">Primary Button</Button>
        <br /><br />
        <Button variant="secondary">Secondary Button</Button>
      </Card>

      <Card>
        <h2>Badge Example</h2>
        <Badge text="New" />
      </Card>

    </div>
  );
}

export default App;
