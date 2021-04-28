import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import _ from "lodash";
import { Request, Response } from "express";

import userModel from "../../models/user.model";
import validateUserLogin from "./validateUserLogin";

export default async (req: Request, res: Response) => {
  const { error } = validateUserLogin(req.body);
  if (error)
    return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

  const user = await userModel.findOne({ email: req.body.email });

  if (!user)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Invalid email or password!");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Invalid email or password!");

  const data = _.pick(user, ["name", "email", "_id"]);
  const token = user.generateAuthToken();

  res.status(StatusCodes.OK).header({ "x-auth-token": token }).send(data);
};
