import mongoose from "mongoose";

interface User extends mongoose.Document {
  name: string;
  password: string;
  email: string;
  generateAuthToken: () => string;
}

export default User;
