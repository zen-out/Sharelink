import logo from "./logo.svg";
import "./App.css";
import AddButton from "./components/Button";
import DayOne from "./components/DayOne";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddButton />
        <DayOne />
      </header>
    </div>
  );
}

export default App;
