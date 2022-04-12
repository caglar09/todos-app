import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import counterReducer from "./counter";
import todosReducer from "./todos";
import authReducer from "./auth";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default configureStore(
  {
    reducer: {
      counter: counterReducer,
      todos: todosReducer,
      auth: authReducer,
    },
  },
  composedEnhancer
);
