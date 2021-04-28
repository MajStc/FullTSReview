import { makeAutoObservable } from "mobx";
import agent from "../../api/agent";
import toastError from "../../api/toastError";
import User, { baseSetup } from "../../models/user";
import { history } from "../../index";

export default class UserStore {
  userData: User = baseSetup;

  cosntructor() {
    makeAutoObservable(this);
  }

  logInUser = async (email: string, password: string) => {
    try {
      const user = await agent.Users.login({
        email: email,
        password: password,
      });
      this.userData = { ...user.data };

      const token = user.headers["x-auth-token"];

      localStorage.setItem("token", token);

      history.push("/home");
    } catch (err) {
      toastError(err.response.status, err.response.data);
    }
  };
}
