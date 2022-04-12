import { get } from "./helpers/api";

const getTodos = () => {
  return get("todos").then((data) => {
    return data.data;
  });
};

export { getTodos };
