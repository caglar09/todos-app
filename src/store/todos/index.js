import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const _getAsyncTodoList = async () => {
  const datas=[
    { id: new Date().getTime() * 99999, todo: "Default Todo 1" },
    { id: new Date().getTime() * 99998, todo: "Default Todo 2" },
  ]
  await delay(2000);
  return Promise.resolve(datas);
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await _getAsyncTodoList();
  return res;
});

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    newTodo: "",
    loading: false,
    error: "",
    todoList: [],
  },
  reducers: {
    newTodoChange: (state, action) => {
      state.newTodo = action.payload;
    },
    addTodo: (state) => {
      const { newTodo, todoList } = state;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      todoList.push({ todo: newTodo, id: new Date().getTime() * 99999 });

      state.todoList = todoList;
      state.newTodo = "";
    },
    deleteTodo: (state, action) => {
      const deletingTodoIndex = action.payload;

      const { todoList } = state;

      todoList.splice(deletingTodoIndex, 1);
      state.todoList = todoList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.loading = false;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = "Hata oluştu";
      });
  },
});

export const { addTodo, newTodoChange, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
