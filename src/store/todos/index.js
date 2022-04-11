import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    newTodo: "",
    todoList: [],
  },
  reducers: {
    newTodoChange: (state, action) => {
      state.newTodo = action.payload;
    },
    addTodo: (state) => {
      const { newTodo, todoList } = state;
      todoList.push(newTodo);

      state.todoList = todoList;
      state.newTodo = "";
    },
  },
});

export const { addTodo, newTodoChange } = todoSlice.actions;

export default todoSlice.reducer;
