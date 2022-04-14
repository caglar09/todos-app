import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import AddTodoComponent from "./components/add-todo-component";
import HeaderComponent from "./components/header";
import Login from "./components/login";
import TodoList from "./components/todo-list";

import { checkIsAuthenticated } from "./store/auth";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkIsAuthenticated());
  }, []);

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
