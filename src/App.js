import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import "./App.css";
import Modal from "./common/Modal";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <Modal />
        <div className="App__body">
          <TodoForm />
          <Todos />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
