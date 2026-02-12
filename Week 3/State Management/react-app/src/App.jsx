import Counter from "./components/Counter"; 
import Toggle from "./components/Toggle";
import Accordion from "./components/Accordion";
import "./App.css";


function App() {
  return (
    <div className="App">
      <hr />
      <hr />
      <h1>Counter Demo</h1>
      <Counter />
      <hr />
      <hr />
      <h1>Toggle Demo</h1>
      <Toggle />
      <hr />
      <hr />
      <h1>Accordion Demo</h1>
      <Accordion />
      <hr />
      <hr />
      
    </div>
  );
}
export default App;