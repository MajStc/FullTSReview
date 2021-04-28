import User from "../../models/user";
import { requests } from "../agent";

interface UserLogin {
  email: string;
  password: string;
}

const Users = {
  login: (data: UserLogin) => requests.post<User>("/users/login", data),
};

export default Users;
