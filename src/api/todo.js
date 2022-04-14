import { get, post } from "./helpers/api";

const getTodos = () => {
  return get("todos").then((data) => {
    return data.data;
  });
};

const addTodo = (model) => {
  return post("todos", model).then((data) => {
    return data.data;
  });
};

export { getTodos, addTodo };
