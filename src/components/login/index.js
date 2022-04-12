import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleChangeLoginModel, loginOrRegister } from "../../store/auth";

function Login() {
  const dispatch = useDispatch();
  const loginModel = useSelector((state) => state.auth.loginModel);
  return (
    <div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={loginModel["username"] || ""}
          onChange={(e) =>
            dispatch(handleChangeLoginModel("username", e.target.value))
          }
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={loginModel["password"] || ""}
          onChange={(e) =>
            dispatch(handleChangeLoginModel("password", e.target.value))
          }
        />
      </div>
      <button onClick={() => dispatch(loginOrRegister(loginModel))}>
        Giriş yap/Kayıt Ol
      </button>
    </div>
  );
}

export default Login;
