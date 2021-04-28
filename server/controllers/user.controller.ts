import express, { Request, Response } from "express";
import userLogin from "../src/user/userLogin";
import userRegister from "../src/user/userRegister";

export default class UserController {
  public path = "/users";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}/create`, this.createUser);
    this.router.post(`${this.path}/login`, this.loginUser);
    this.router.delete(`${this.path}/delete`, this.deleteUser);
  }

  createUser(req: Request, res: Response) {
    userRegister(req, res);
  }

  loginUser(req: Request, res: Response) {
    userLogin(req, res);
  }

  deleteUser() {}
}
