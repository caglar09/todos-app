import { get, post } from "./helpers/api";

const login = (username, password) => {
  return get(`users?username=${username}&password=${password}`).then((data) => {
    return data.data;
  });
};

const register = (username, password) => {
  return post("users", { username, password }).then((data) => {
    return data.data;
  });
};

export { login, register };
