import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTodos } from "../../store/todos";
import { logout } from "../../store/auth";

function TodoList() {
  const todoState = useSelector((state) => state.todos);
  // const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      {todoState.loading && (
        <div>
          <h1>Yükleniyor</h1>
        </div>
      )}
      {todoState.loading}
      <ul>
        {todoState?.todoList?.map((todoItem, index) => (
          <li key={todoItem.id}>{todoItem.todo}</li>
        ))}
      </ul>

      <button onClick={() => dispatch(logout())}>çikis yap</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   const { todos } = state;
//   return { todos };
// };

export default TodoList;
// export default connect(mapStateToProps)(TodoList);
