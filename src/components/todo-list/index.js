import React from "react";
import { connect } from "react-redux";

function TodoList({ todos }) {
  return <div>TodoList {todos?.todoList?.length}</div>;
}

const mapStateToProps = (state) => {
  const { todos } = state;

  return { todos };
};

export default connect(mapStateToProps)(TodoList);
