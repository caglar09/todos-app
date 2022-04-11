import "./App.css";

import AddTodoComponent from "./components/add-todo-component";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="App">
      <AddTodoComponent />
      <TodoList />
    </div>
  );
}

export default App;
