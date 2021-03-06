import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as UserService from "../../api/user";

export const authenticationSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    loading: false,
    user: null,
    loginModel: {
      username: null,
      password: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
      localStorage.removeItem("user")
    },
    checkIsAuthenticated: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        state.user = parsedUser;
        state.loggedIn = true;
      }
    },
    handleChangeLoginModel: {
      reducer(state, action) {
        state.loginModel[action.payload.key] = action.payload.value;
      },
      prepare(key, value) {
        return { payload: { key, value } };
      },
    },
  },
});

export const loginOrRegister = (loginModel) => async (dispatch) => {
  const { username, password } = loginModel;
  const loginResult = await UserService.login(username, password);
  const isUserExist = loginResult?.length > 0;
  let authenticedUser = isUserExist ? loginResult[0] : null;
  if (!isUserExist) {
    const registeredUser = await UserService.register(username, password);
    authenticedUser = registeredUser;
  }
  dispatch(login(authenticedUser));
  localStorage.setItem("user", JSON.stringify(authenticedUser));
  dispatch(handleChangeLoginModel("username", null));
  dispatch(handleChangeLoginModel("password", null));
};

export const { login, logout, handleChangeLoginModel, checkIsAuthenticated } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
