import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, newTodoChange } from "../../store/todos";

import "./style.css";

function AddTodoComponent() {
  const newTodoText = useSelector((state) => state.todos.newTodo);
  const dispatch = useDispatch();

  return (
    <section className="container">
      <div className="input-container">
        <input
          type="text"
          name="new-item"
          value={newTodoText}
          placeholder="Yeni todo"
          className="mr-5"
          onChange={(e) => {
            dispatch(newTodoChange(e.target.value));
          }}
        />
        <button onClick={() => dispatch(addTodo())}>+</button>
      </div>
    </section>
  );
}

export default AddTodoComponent;
