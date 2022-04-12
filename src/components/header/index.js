import React from "react";
import { useSelector } from "react-redux";

function HeaderComponent() {
  const auth = useSelector((state) => state.auth);
  return (
    <header>
      {auth.loggedIn ? (
        <h1>Merhaba {auth.user?.username}</h1>
      ) : (
        <h1>Giriş Yap</h1>
      )}
    </header>
  );
}

export default HeaderComponent;
