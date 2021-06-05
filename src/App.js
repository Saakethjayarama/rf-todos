import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <TodoForm />
        <Todos />
      </div>
    </div>
  );
}

export default App;
