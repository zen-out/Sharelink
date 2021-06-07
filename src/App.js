import logo from "./logo.svg";
import "./App.css";
import AddButton from "./components/Button";
import DayOne from "./components/DayOne";
import Navbar from "./components/Navbar";

function ToDoList() {
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        <li>List component that shows existing link</li>
        <li>
          Add link that allows user to add link to
          application
        </li>
        <li>
          Search link which filters the user input on the
          content of the link
        </li>
        <li>
          An add link form that has validation on the input
          of the user{" "}
        </li>
        <li>
          Persist link data in Local Storage - stringify
          object, parse it on return{" "}
        </li>
        <li>
          Link should correspond to a model with url, title
          and tags{" "}
        </li>
        <li>Add database</li>
        <li>Login Functionality</li>
        <li>Use redux for testing</li>
        <li>React Router</li>
      </ul>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <ToDoList />
    </div>
  );
}

export default App;
