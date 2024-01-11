import "./App.css";
import AddNewNotes from "./Components/addNewNotes";
function App() {
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNotes />
        <div className="note-container">notes</div>
      </div>
    </div>
  );
}

export default App;
