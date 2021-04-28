import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "../interfaces/user/user.interface";

const userSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    minlength: 3,
    maxlength: 24,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 255,
    required: true,
  },
  email: {
    type: String,
    minlegth: 5,
    maxlength: 50,
    required: true,
  },
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, name: this.name },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: 360000,
    }
  );
};

const userModel = mongoose.model<User & mongoose.Document>("User", userSchema);

export default userModel;
