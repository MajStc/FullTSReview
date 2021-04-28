import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { history } from "../../index";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userStore } = useStore();
  const { logInUser } = userStore;

  const logIn = (e: any) => {
    e.preventDefault();
    logInUser(email, password);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/home");
    }
  }, []);

  return (
    <div>
      <form onSubmit={logIn}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default observer(LoginPage);
