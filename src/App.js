import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import "./App.css";
import Modal from "./common/Modal";

function App() {
  return (
    <div className="App">
      <Header />
      <Modal />
      <div className="App__body">
        <TodoForm />
        <Todos />
      </div>
    </div>
  );
}

export default App;
