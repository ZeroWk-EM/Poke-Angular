import { Schema, model } from "mongoose";
import { IUser } from "../interface/user.interface";

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verify: { type: String, required: false },
  },
  { timestamps: true, versionKey: false }
);

export default model<IUser>("users", UserSchema);
