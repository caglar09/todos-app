import { useSelector } from "react-redux";
import "./App.css";

import AddTodoComponent from "./components/add-todo-component";
import HeaderComponent from "./components/header";
import Login from "./components/login";
import TodoList from "./components/todo-list";

function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="App">
      <HeaderComponent />
      {auth.loggedIn ? (
        <>
          <AddTodoComponent />
          <TodoList />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
