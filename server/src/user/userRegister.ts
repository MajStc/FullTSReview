import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import userModel from "../../models/user.model";
import validateUserRegister from "./validateUserRegister";
import bcrypt from "bcrypt";
import _ from "lodash";

export default async (req: Request, res: Response) => {
  const { error } = validateUserRegister(req.body);
  if (error)
    return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

  let user = await userModel.findOne({ email: req.body.email });
  if (user)
    return res.status(StatusCodes.BAD_REQUEST).send("User already registered!");

  if (req.body.password !== req.body.confirmPassword)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Passsword and confirm password must match!");

  user = new userModel({ ...req.body });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;

  await user.save();

  return res
    .status(StatusCodes.OK)
    .send(_.pick(user, ["_id", "name", "email"]));
};
